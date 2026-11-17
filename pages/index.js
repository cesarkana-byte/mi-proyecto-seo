import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Head>
        <title>Inicio | Plataforma Web Optimizada con Next.js y SEO</title>
        <meta name="description" content="Aprende técnicas avanzadas de SEO técnico, rendimiento web y sitemaps dinámicos en Next.js." />
        <meta name="keywords" content="Next.js, SEO técnico, rendimiento web, Open Graph" />
        <meta property="og:title" content="Inicio | Plataforma Web Optimizada con Next.js" />
        <meta property="og:description" content="Guía práctica de optimización SEO y carga rápida en aplicaciones Next.js." />
        <meta property="og:image" content="https://pega-aqui-tu-url.trycloudflare.com/images/seo-image.png" />
        <meta property="og:url" content="https://pega-aqui-tu-url.trycloudflare.com/" />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />
      <h1>Bienvenido a Mi Sitio Optimizado</h1>
      <p>Aplicación web desarrollada con Next.js aplicando buenas prácticas de posicionamiento SEO.</p>
      <Image
        src="/images/seo-image.png"
        width={400}
        height={200}
        alt="Optimización SEO en Next.js"
        priority
      />
    </div>
  );
}
