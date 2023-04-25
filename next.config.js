/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io", "arkar.space", "i.ytimg.com", "burma.social"],
  },
};

module.exports = nextConfig;
