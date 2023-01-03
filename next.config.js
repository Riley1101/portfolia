/** @type {import('next').NextConfig} */
const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination: "/studio/",
};

const nextConfig = {
  experimental: {
    appDir: true,
  },
  rewrites: () => [STUDIO_REWRITE],
  images: {
    domains: ["cdn.sanity.io", "arkardev.space", "i.ytimg.com"],
  },
  typescript: {
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
