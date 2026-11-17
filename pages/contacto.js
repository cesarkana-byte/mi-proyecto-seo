import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Contacto() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Head>
        <title>Contacto | Consultoría SEO y Desarrollo Web</title>
        <meta name="description" content="Ponte en contacto con nuestro equipo de desarrollo web para optimizar tu sitio en Google." />
        <meta name="keywords" content="Contacto SEO, soporte web, desarrollo Next.js" />
        <meta property="og:title" content="Contacto | Consultoría SEO y Desarrollo Web" />
        <meta property="og:description" content="Escríbenos para mejorar el rendimiento y visibilidad de tu plataforma." />
        <meta property="og:image" content="https://pega-aqui-tu-url.trycloudflare.com/images/seo-image.png" />
        <meta property="og:url" content="https://pega-aqui-tu-url.trycloudflare.com/contacto" />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />
      <h1>Contáctanos</h1>
      <p>Correo: contacto@mi-sitio.com</p>
      <p>Ubicación: Arequipa, Perú</p>
    </div>
  );
}
