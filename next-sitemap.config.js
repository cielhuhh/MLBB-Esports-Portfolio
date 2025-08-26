/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://mlbb-portfolio.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
};
