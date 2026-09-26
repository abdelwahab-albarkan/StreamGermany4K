import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALE_COOKIE } from "@/i18n/config";

// Common search engine crawler bots that must never be redirected based on IP/Geo
const BOT_USER_AGENTS = /googlebot|bingbot|baiduspider|duckduckbot|yandexbot|sogou|slurp|facebookexternalhit|twitterbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest\/0\.|bingpreview/i;

/**
 * Extracts country code (ISO 3166-1 alpha-2) from standard hosting/CDN headers.
 */
function getCountryFromHeaders(req: NextRequest): string | null {
  const headers = [
    "x-vercel-ip-country",
    "cf-ipcountry",
    "cloudfront-viewer-country",
    "x-country-code",
    "x-country",
    "geo-country",
  ];

  for (const h of headers) {
    const val = req.headers.get(h);
    if (val && typeof val === "string" && val.length === 2 && val !== "XX" && val !== "T1") {
      return val.toUpperCase();
    }
  }

  // Next.js geo object if provided by hosting platform
  const geoCountry = req.geo?.country;
  if (typeof geoCountry === "string" && geoCountry.length === 2 && geoCountry !== "XX" && geoCountry !== "T1") {
    return geoCountry.toUpperCase();
  }

  return null;
}

/**
 * Parses Accept-Language header to determine language preference if country is unavailable.
 */
function getLanguageFromAcceptHeader(acceptHeader: string | null): "de" | "en" {
  if (!acceptHeader) return "en";
  const lower = acceptHeader.toLowerCase();

  const deIndex = lower.indexOf("de");
  const enIndex = lower.indexOf("en");

  if (deIndex !== -1 && (enIndex === -1 || deIndex < enIndex)) {
    return "de";
  }

  return "en";
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const userAgent = req.headers.get("user-agent") || "";

  // 1. Never redirect search engine crawlers
  if (BOT_USER_AGENTS.test(userAgent)) {
    return NextResponse.next();
  }

  // 2. Check if user already has an explicit preference stored in cookie
  const cookieLocale = req.cookies.get(LOCALE_COOKIE)?.value;

  // 3. Rule for explicit English URLs (/en, /en/...)
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const res = NextResponse.next();
    // Update preference cookie to "en" if missing or different
    if (cookieLocale !== "en") {
      res.cookies.set(LOCALE_COOKIE, "en", {
        path: "/",
        maxAge: 31536000,
        sameSite: "lax",
      });
    }
    return res;
  }

  // 4. Rule for explicit German non-root subpages (e.g. /preise, /order, /iptv-anbieter, etc.)
  // Never override an explicit direct link or bookmark to a specific subpage
  if (pathname !== "/") {
    const res = NextResponse.next();
    if (cookieLocale !== "de") {
      res.cookies.set(LOCALE_COOKIE, "de", {
        path: "/",
        maxAge: 31536000,
        sameSite: "lax",
      });
    }
    return res;
  }

  // 5. Root path (/) routing & initial country detection
  if (pathname === "/") {
    // If the user already has a saved preference:
    if (cookieLocale === "en") {
      const url = req.nextUrl.clone();
      url.pathname = "/en";
      return NextResponse.redirect(url, 307);
    }
    if (cookieLocale === "de") {
      return NextResponse.next();
    }

    // First visit (no saved preference):
    const country = getCountryFromHeaders(req);
    let targetLocale: "de" | "en";

    if (country) {
      // Germany -> German (de)
      if (country === "DE") {
        targetLocale = "de";
      } else {
        // United Kingdom (GB/UK) and all other countries -> English (en)
        targetLocale = "en";
      }
    } else {
      // Fall back to Accept-Language header
      const acceptHeader = req.headers.get("accept-language");
      targetLocale = getLanguageFromAcceptHeader(acceptHeader);
    }

    if (targetLocale === "en") {
      const url = req.nextUrl.clone();
      url.pathname = "/en";
      url.search = search;
      const res = NextResponse.redirect(url, 307);
      res.cookies.set(LOCALE_COOKIE, "en", {
        path: "/",
        maxAge: 31536000,
        sameSite: "lax",
      });
      return res;
    } else {
      // German target
      const res = NextResponse.next();
      res.cookies.set(LOCALE_COOKIE, "de", {
        path: "/",
        maxAge: 31536000,
        sameSite: "lax",
      });
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml, robots.txt
     * - static image extensions (.jpg, .png, .webp, .svg, .ico)
     */
    "/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|images/|.*\\.(?:jpg|jpeg|gif|png|webp|svg|ico)$).*)",
  ],
};
