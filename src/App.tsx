import React from "react";
import { NavBar }      from "./components/NavBar";
import { DocsSection } from "./components/DocsSection";
import { QRCard }      from "./components/QRCard";
import { PhotoCard }   from "./components/PhotoCard";
import { qrItems, photoItems } from "./data";

export default function App() {
  return (
    <div style={styles.page}>

      {/* ── Sticky nav ─────────────────────────────────────────────── */}
      <NavBar />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header style={styles.hero}>
        <div style={styles.heroPill}>React component · zero dependencies</div>
        <h1 style={styles.heroTitle}>qr-hover-link</h1>
        <p style={styles.heroSub}>
          Wrap any QR code image and let desktop users click the link directly —
          no phone required.
        </p>
        <div style={styles.heroCtas}>
          <a href="#install" style={styles.ctaPrimary}
            onClick={(e) => { e.preventDefault(); document.getElementById("install")?.scrollIntoView({ behavior: "smooth" }); }}>
            Get started
          </a>
          <a href="#demo" style={styles.ctaSecondary}
            onClick={(e) => { e.preventDefault(); document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" }); }}>
            See the demo ↓
          </a>
        </div>
      </header>

      {/* ── Docs: About · Install · Props · Examples ───────────────── */}
      <DocsSection />

      {/* ── Live demo ──────────────────────────────────────────────── */}
      <section id="demo" style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.badge}>05</span>
          <h2 style={styles.sectionTitle}>Live demo</h2>
        </div>
        <p style={styles.sectionHint}>
          QR images fetched live from{" "}
          <a href="https://goqr.me/api/" target="_blank" rel="noopener noreferrer" style={styles.inlineLink}>
            api.qrserver.com
          </a>
          . Hover any card to see the overlay in action.
        </p>
        <div style={styles.grid}>
          {qrItems.map((item) => (
            <QRCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── Photo gallery ──────────────────────────────────────────── */}
      <section id="gallery" style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={{ ...styles.badge, background: "#1a2a3a", color: "#5080a0" }}>06</span>
          <h2 style={styles.sectionTitle}>Regular images</h2>
        </div>
        <p style={styles.sectionHint}>
          Plain photos from{" "}
          <a href="https://picsum.photos" target="_blank" rel="noopener noreferrer" style={styles.inlineLink}>
            picsum.photos
          </a>{" "}
          — no hover interaction, shown for comparison.
        </p>
        <div style={styles.photoGrid}>
          {photoItems.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <span>
            <code style={styles.code}>qr-hover-link</code> — MIT license
          </span>
          <span style={styles.footerLinks}>
            Built with{" "}
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" style={styles.inlineLink}>Vite</a>
            {" + "}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" style={styles.inlineLink}>React</a>
          </span>
        </div>
      </footer>

    </div>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0d0d1a",
    color: "#e0e0ff",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  },

  // Hero
  hero: {
    textAlign: "center",
    padding: "80px 24px 60px",
    borderBottom: "1px solid #1e1e3a",
  },
  heroPill: {
    display: "inline-block",
    background: "#1a1a3a",
    border: "1px solid #2a2a5a",
    color: "#6060a0",
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    padding: "4px 14px",
    borderRadius: "20px",
    marginBottom: "20px",
    textTransform: "uppercase",
  },
  heroTitle: {
    margin: "0 0 16px",
    fontSize: "clamp(2rem, 6vw, 3.2rem)",
    fontWeight: 900,
    letterSpacing: "-0.03em",
    background: "linear-gradient(135deg, #a0c4ff 0%, #c084fc 60%, #f97583 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: 1.1,
  },
  heroSub: {
    margin: "0 auto 32px",
    maxWidth: "520px",
    fontSize: "1rem",
    color: "#7070a0",
    lineHeight: 1.7,
  },
  heroCtas: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  ctaPrimary: {
    background: "linear-gradient(135deg, #4040a0, #6040c0)",
    color: "#ffffff",
    textDecoration: "none",
    padding: "10px 28px",
    borderRadius: "8px",
    fontSize: "0.88rem",
    fontWeight: 600,
    transition: "opacity 0.15s",
  },
  ctaSecondary: {
    background: "transparent",
    border: "1px solid #2a2a5a",
    color: "#7070b0",
    textDecoration: "none",
    padding: "10px 28px",
    borderRadius: "8px",
    fontSize: "0.88rem",
    fontWeight: 500,
  },

  // Sections
  section: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "64px 24px 0",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "8px",
  },
  sectionTitle: {
    margin: 0,
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#c0c0e0",
  },
  badge: {
    background: "#1e1e4a",
    color: "#5050a0",
    fontSize: "0.65rem",
    fontWeight: 800,
    padding: "4px 8px",
    borderRadius: "6px",
    letterSpacing: "0.08em",
    fontFamily: "monospace",
  },
  sectionHint: {
    margin: "0 0 28px",
    fontSize: "0.82rem",
    color: "#6060a0",
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "24px",
  },
  photoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
  },

  // Footer
  footer: {
    marginTop: "80px",
    borderTop: "1px solid #1e1e3a",
    padding: "24px",
  },
  footerInner: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "8px",
    fontSize: "0.78rem",
    color: "#404060",
  },
  footerLinks: {
    color: "#404060",
  },
  inlineLink: {
    color: "#7878cc",
    textDecoration: "none",
  },
  code: {
    background: "#1e1e3a",
    padding: "2px 6px",
    borderRadius: "4px",
    fontSize: "0.85em",
    color: "#a0c4ff",
    fontFamily: "monospace",
  },
};
