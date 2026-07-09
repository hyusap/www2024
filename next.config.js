const createMDX = require("@next/mdx");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // Enable compression for better performance
  compress: true,

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers for SEO and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/cons",
        destination:
          "https://claude.ai/public/artifacts/855fe61c-febb-46f3-a1e5-d9c2761e6709",
        permanent: false,
      },
    ];
  },

  // Generate sitemap
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      // Proxy the analytics script + events from the self-hosted Plausible
      // instance under neutral paths so adblock filter lists have no token to
      // match. Proxying (vs. a static copy) means the script auto-updates when
      // the Plausible instance is upgraded.
      {
        source: "/s/p.js",
        destination:
          "https://a.ayush.digital/js/plausible.outbound-links.tagged-events.js",
      },
      {
        source: "/s/e",
        destination: "https://a.ayush.digital/api/event",
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

module.exports = withMDX(nextConfig);
