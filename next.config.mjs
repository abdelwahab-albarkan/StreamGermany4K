/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve images directly instead of through Vercel's on-demand optimizer.
    // Vercel's Image Optimization quota was exhausted in production, so
    // /_next/image returned HTTP 402 (X-Vercel-Error:
    // OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED) for uncached width variants —
    // which broke images on mobile (its responsive srcset requests widths that
    // were not pre-cached). `unoptimized` bypasses /_next/image entirely: local
    // files are served from /public and remote posters straight from the CDN.
    // Trade-off: no AVIF/WebP conversion or server-side resizing. Revert this
    // (and rely on the optimizer) only after the Vercel plan/quota is raised.
    unoptimized: true,
    // remotePatterns is still required so next/image permits the remote OMDb host.
    // OMDb serves posters from Amazon's media CDN.
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com", pathname: "/images/**" },
    ],
  },
  async redirects() {
    return [
      // The English /pricing route was replaced by the German /preise page.
      { source: "/pricing", destination: "/preise", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Static images in /public are content-stable (updated by renaming or
        // cache-busting, never in place), so they are safe to cache long-lived.
        // Previously they inherited Next's default `max-age=0, must-revalidate`,
        // which forced a conditional revalidation of every image on every
        // navigation and language switch. `immutable` removes those round-trips.
        // NOTE: to replace one of these images later, change its filename (or add
        // a ?v= query) so browsers pick up the new version.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
