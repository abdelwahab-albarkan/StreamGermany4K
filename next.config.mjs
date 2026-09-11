/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF first (typically 20–50% smaller than WebP), fall back to WebP,
    // then the original. Next negotiates via the browser's Accept header.
    formats: ["image/avif", "image/webp"],
    // Optimized images are content-hashed and immutable; cache them for 31 days
    // at the edge instead of the 60s default to cut repeat optimization work.
    minimumCacheTTL: 60 * 60 * 24 * 31,
    // OMDb poster images (server-fetched metadata; used by MovieShowcase).
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
