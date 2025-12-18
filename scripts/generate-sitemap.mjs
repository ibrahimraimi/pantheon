import { createWriteStream } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

const generateSitemap = (
  urls: SitemapUrl[],
  outputPath: string = "./public/sitemap.xml"
) => {
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

  const fullPath = resolve(__dirname, "../../", outputPath);
  const writeStream = createWriteStream(fullPath);
  writeStream.write(sitemapContent);
  writeStream.end();

  console.log(`Sitemap generated at ${fullPath}`);
};

// Generate the site sitemap
const urls: SitemapUrl[] = [
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
