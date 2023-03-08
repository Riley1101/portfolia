/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://arkar.space",
  generateRobotsTxt: true, // (optional)
  // ...other options
  exclude: ["/studio"],
};
