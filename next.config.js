/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io", "arkardev.space", "i.ytimg.com", "burma.social"],
  },

  typescript: {
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
