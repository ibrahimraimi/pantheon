const fs = require("fs");
const path = require("path");

const generateSitemap = (urls, outputPath = "./public/sitemap.xml") => {
  const baseUrl = "https://linea.studio21.studio";

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
${url.lastmod ? `    <lastmod>${url.lastmod}</lastmod>` : ""}
${url.changefreq ? `    <changefreq>${url.changefreq}</changefreq>` : ""}
${url.priority ? `    <priority>${url.priority}</priority>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>`;

  const fullPath = path.resolve(__dirname, "../", outputPath);
  fs.writeFileSync(fullPath, sitemapContent);

  console.log(`Sitemap generated at ${fullPath}`);
};

// Generate the site sitemap
const urls = [
  { loc: "/", changefreq: "daily", priority: 1.0 },
  { loc: "/category/earrings", changefreq: "weekly", priority: 0.8 },
  { loc: "/category/necklaces", changefreq: "weekly", priority: 0.8 },
  { loc: "/category/bracelets", changefreq: "weekly", priority: 0.8 },
  { loc: "/about/our-story", changefreq: "monthly", priority: 0.6 },
  { loc: "/about/sustainability", changefreq: "monthly", priority: 0.6 },
  { loc: "/about/size-guide", changefreq: "monthly", priority: 0.6 },
  { loc: "/about/customer-care", changefreq: "monthly", priority: 0.6 },
  { loc: "/about/store-locator", changefreq: "monthly", priority: 0.6 },
  { loc: "/privacy-policy", changefreq: "yearly", priority: 0.3 },
  { loc: "/terms-of-service", changefreq: "yearly", priority: 0.3 },
];

generateSitemap(urls);
