/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://safe-encode.vercel.app",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/api',
            },
        ],
    },
};