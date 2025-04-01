module.exports = {
    siteUrl: 'https://musiccarz.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/admin", "/api/*"]
        }
      ]
    },
    // Esta opción es importante si usas src
    outDir: './public',
  }