/**
 * IndexNow submitter for StreamGermany4K.
 *
 * Notifies participating search engines (via the shared IndexNow endpoint) about
 * URLs that are in the production sitemap, or an explicit list passed on the CLI.
 *
 * Dependency-free: uses Node's built-in fetch (Node 18+) and a small regex to
 * read <loc> entries — no node-fetch / xml2js needed.
 *
 * The IndexNow "key" is PUBLIC by design (it is served at /<KEY>.txt); it is not
 * a secret and no application/API credentials are used or read here.
 *
 * Usage:
 *   node scripts/indexnow.js                       # submit all sitemap URLs
 *   node scripts/indexnow.js https://.../page1 ...  # submit only these URLs
 *   node scripts/indexnow.js --dry-run              # discover + validate, no POST
 *   INDEXNOW_SITEMAP=<url> node scripts/indexnow.js  # override sitemap (testing)
 */

"use strict";

// ---- Configuration (production) -------------------------------------------
const SITE_URL = "https://streamgermany4k.com"; // matches SITE.domain in src/lib/site.ts
const HOST = new URL(SITE_URL).hostname; // "streamgermany4k.com"
const INDEXNOW_KEY = "c4475f4a8826129d827c67558a751940"; // == public/<KEY>.txt
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const SITEMAP_URL = process.env.INDEXNOW_SITEMAP || `${SITE_URL}/sitemap.xml`;

// IndexNow's shared endpoint fans out to all participating engines (Bing, Yandex,
// Seznam, …), so one submission is enough — avoids duplicate notifications.
const ENDPOINTS = ["https://api.indexnow.org/indexnow"];

const BATCH_SIZE = 1000; // IndexNow allows up to 10k URLs per request
const DRY_RUN = process.argv.includes("--dry-run");

// ---- Helpers ---------------------------------------------------------------
async function fetchWithTimeout(url, options = {}, ms = 15000) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(t);
  }
}

/** Fetch the sitemap and extract every <loc> URL (flat urlset). */
async function getSitemapUrls() {
  console.log(`📡 Fetching sitemap: ${SITEMAP_URL}`);
  const res = await fetchWithTimeout(SITEMAP_URL, {
    headers: { "User-Agent": "StreamGermany4K-IndexNow/1.0", Accept: "application/xml, text/xml, */*" },
  });
  if (!res.ok) throw new Error(`Sitemap fetch failed: HTTP ${res.status}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1].trim());
  if (locs.length === 0) throw new Error("No <loc> URLs found in sitemap.");
  return locs;
}

/**
 * Keep only safe, submittable URLs:
 *  - valid absolute https URL
 *  - hostname exactly matches the production host (rejects other domains AND
 *    localhost / 127.0.0.1 / preview hosts)
 * Also de-duplicates. Returns { valid, rejected }.
 */
function sanitize(urls) {
  const seen = new Set();
  const valid = [];
  const rejected = [];
  for (const raw of urls) {
    let u;
    try {
      u = new URL(raw);
    } catch {
      rejected.push({ url: raw, reason: "invalid URL" });
      continue;
    }
    if (u.protocol !== "https:") {
      rejected.push({ url: raw, reason: `non-https (${u.protocol})` });
      continue;
    }
    if (u.hostname !== HOST) {
      rejected.push({ url: raw, reason: `foreign host (${u.hostname})` });
      continue;
    }
    const normalized = u.toString();
    if (seen.has(normalized)) continue; // dedupe
    seen.add(normalized);
    valid.push(normalized);
  }
  return { valid, rejected };
}

/** Submit one batch to all endpoints. Returns true if at least one accepted it. */
async function submitBatch(batch) {
  let anyOk = false;
  for (const endpoint of ENDPOINTS) {
    try {
      const res = await fetchWithTimeout(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ host: HOST, key: INDEXNOW_KEY, keyLocation: KEY_LOCATION, urlList: batch }),
      });
      // IndexNow returns 200 (accepted) or 202 (accepted, pending). Others = problem.
      if (res.status === 200 || res.status === 202) {
        console.log(`   ✅ ${endpoint} → HTTP ${res.status} (${batch.length} URLs)`);
        anyOk = true;
      } else {
        console.log(`   ⚠️  ${endpoint} → HTTP ${res.status}`);
      }
    } catch (err) {
      console.error(`   ❌ ${endpoint} → ${err.message}`);
    }
  }
  return anyOk;
}

// ---- Main ------------------------------------------------------------------
(async () => {
  console.log("⚡ IndexNow — StreamGermany4K");
  console.log(`   host: ${HOST} | keyLocation: ${KEY_LOCATION}${DRY_RUN ? " | DRY RUN" : ""}\n`);

  try {
    const cliUrls = process.argv.slice(2).filter((a) => a.startsWith("http"));
    const source = cliUrls.length > 0 ? cliUrls : await getSitemapUrls();
    console.log(`🔍 Discovered ${source.length} URL(s) from ${cliUrls.length ? "CLI arguments" : "sitemap"}.`);

    const { valid, rejected } = sanitize(source);
    if (rejected.length) {
      console.log(`🚫 Rejected ${rejected.length} URL(s):`);
      for (const r of rejected.slice(0, 20)) console.log(`   - ${r.url}  (${r.reason})`);
    }
    console.log(`✅ ${valid.length} valid URL(s) after host filter + de-duplication.`);

    if (valid.length === 0) {
      console.error("\n🔥 Nothing to submit (no valid same-host URLs). Exiting.");
      process.exit(2);
    }

    if (DRY_RUN) {
      console.log("\n🧪 DRY RUN — not submitting. URLs that WOULD be sent:");
      valid.forEach((u) => console.log(`   • ${u}`));
      console.log(`\n✨ Dry run complete: ${valid.length} URL(s) validated.`);
      process.exit(0);
    }

    console.log(`\n🚀 Submitting ${valid.length} URL(s) in batches of ${BATCH_SIZE}...`);
    let submitted = 0;
    let failedBatches = 0;
    for (let i = 0; i < valid.length; i += BATCH_SIZE) {
      const batch = valid.slice(i, i + BATCH_SIZE);
      const ok = await submitBatch(batch);
      if (ok) submitted += batch.length;
      else failedBatches += 1;
    }

    console.log(`\n📊 Discovered: ${source.length} | Valid: ${valid.length} | Submitted: ${submitted} | Failed batches: ${failedBatches}`);
    if (failedBatches > 0 && submitted === 0) {
      console.error("🔥 All submissions failed.");
      process.exit(1);
    }
    console.log("✨ Done. Participating search engines have been notified via IndexNow.");
    process.exit(0);
  } catch (err) {
    console.error(`\n🔥 Fatal error: ${err.message}`);
    process.exit(1);
  }
})();
