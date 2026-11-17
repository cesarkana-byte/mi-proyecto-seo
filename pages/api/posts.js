// Simulación de registros obtenidos desde una Base de Datos o CMS
export default function handler(req, res) {
  const postsFromDB = [
    { slug: "/blog/meta-tags-dinamicos", updatedAt: "2026-11-15" },
    { slug: "/blog/sitemaps-en-nextjs", updatedAt: "2026-11-16" },
    { slug: "/blog/optimizacion-imagenes", updatedAt: "2026-11-17" }
  ];

  res.status(200).json(postsFromDB);
}
