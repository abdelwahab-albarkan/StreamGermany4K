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
};

export default nextConfig;
