/** @type {import('next').NextConfig} */
const REWRITES = [
  {
    source: "/studio/:path*",
    destination: "/studio/",
  },
  {
    source: "/facebook",
    destination: "https://www.facebook.com/arkardev00/",
  },
  {
    source: "/github",
    destination: "https://github.com/Riley1101",
  },
  {
    source: "/twitter",
    destination: "https://twitter.com/arkardev",
  },

  {
    source: "/youtube",
    destination: "https://www.youtube.com/channel/UC_RfEQCC3gL2AzsFFAABikg",
  },
  {
    source: "/devto",
    destination: "https://dev.to/riley1101",
  },
  {
    source: "/linkedin",
    destination: "https://www.linkedin.com/in/arkar-kaung-myat/",
  },
];

const nextConfig = {
  experimental: {
    appDir: true,
  },
  rewrites: () => [...REWRITES],
  images: {
    domains: ["cdn.sanity.io", "arkardev.space", "i.ytimg.com"],
  },

  typescript: {
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
