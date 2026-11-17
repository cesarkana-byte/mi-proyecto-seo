const BASE_URL = process.env.RENDER_EXTERNAL_URL || "https://recordings-print-scott-wearing.trycloudflare.com";

export default async function handler(req, res) {
  const staticRoutes = [
    { url: "/", lastmod: "2026-11-17" },
    { url: "/blog", lastmod: "2026-11-17" },
    { url: "/contacto", lastmod: "2026-11-17" }
  ];

  let dynamicRoutes = [];
  try {
    const port = process.env.PORT || 3000;
    const response = await fetch(`http://127.0.0.1:${port}/api/posts`);
    const posts = await response.json();
    dynamicRoutes = posts.map((post) => ({
      url: post.slug,
      lastmod: post.updatedAt
    }));
  } catch (error) {
    dynamicRoutes = [
      { url: "/blog/meta-tags-dinamicos", lastmod: "2026-11-17" }
    ];
  }

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
  </url>`
    )
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(sitemap);
}
