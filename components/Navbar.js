import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "12px 0", borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
      <Link href="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link href="/blog" style={{ marginRight: "15px" }}>Blog</Link>
      <Link href="/contacto">Contacto</Link>
    </nav>
  );
}
