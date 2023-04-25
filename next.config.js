/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io", "arkar.space", "i.ytimg.com", "burma.social"],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // WIP : Dont do as i do
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
