import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Blog() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Head>
        <title>Blog de Desarrollo Web y SEO | Artículos Técnicos</title>
        <meta name="description" content="Explora nuestros artículos sobre sitemaps XML dinámicos, meta tags y optimización en buscadores." />
        <meta name="keywords" content="Blog Next.js, Sitemap XML, Google Search Console" />
        <meta property="og:title" content="Blog de Desarrollo Web y SEO" />
        <meta property="og:description" content="Tutoriales y novedades sobre posicionamiento web moderno." />
        <meta property="og:image" content="https://pega-aqui-tu-url.trycloudflare.com/images/seo-image.png" />
        <meta property="og:url" content="https://pega-aqui-tu-url.trycloudflare.com/blog" />
        <meta property="og:type" content="article" />
      </Head>

      <Navbar />
      <h1>Blog Técnico de SEO</h1>
      <ul>
        <li><strong>Artículo 1:</strong> Cómo configurar Meta Tags dinámicos en Next.js</li>
        <li><strong>Artículo 2:</strong> Generación automática de Sitemaps desde una API</li>
        <li><strong>Artículo 3:</strong> Optimización de imágenes y fuentes web</li>
      </ul>
    </div>
  );
}
