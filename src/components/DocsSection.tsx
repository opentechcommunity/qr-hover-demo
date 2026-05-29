import React from "react";
import { CodeBlock } from "./CodeBlock";
import { PropsTable } from "./PropsTable";

// ─── Code snippets ────────────────────────────────────────────────────────────

const INSTALL_NPM = `npm install qr-hover-link`;

const INSTALL_YARN = `yarn add qr-hover-link`;

const EXAMPLE_MINIMAL = `import { QRHoverLink } from "qr-hover-link";

export default function Page() {
  return (
    <QRHoverLink
      src="/qr-payment.png"
      href="https://pay.example.com/invoice/42"
    />
  );
}`;

const EXAMPLE_THEMED = `import { QRHoverLink } from "qr-hover-link";

// Purple-branded overlay for a dark site
export function BrandedQR() {
  return (
    <QRHoverLink
      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com"
      href="https://example.com"
      overlayBackground="rgba(99, 0, 210, 0.80)"
      overlayLabel="Visit our store"
      labelColor="#ffffff"
      linkColor="#ffd700"
      borderRadius="16px"
      width={220}
      height={220}
    />
  );
}`;

const EXAMPLE_LIGHT = `import { QRHoverLink } from "qr-hover-link";

// Light-themed site — white overlay with dark text
export function LightQR() {
  return (
    <QRHoverLink
      src="/qr-docs.png"
      href="https://docs.example.com"
      overlayBackground="rgba(255, 255, 255, 0.88)"
      labelColor="#111111"
      linkColor="#0055cc"
      borderRadius="4px"
      boxShadow="0 1px 6px rgba(0,0,0,0.12)"
    />
  );
}`;

const EXAMPLE_ANALYTICS = `import { QRHoverLink } from "qr-hover-link";

// Track every click with your analytics provider
export function TrackedQR() {
  const handleClick = (url: string) => {
    // e.g. Segment, Plausible, GA4 …
    analytics.track("qr_link_clicked", { url });
  };

  return (
    <QRHoverLink
      src="/qr-campaign.png"
      href="https://example.com/summer-sale"
      overlayLabel="Shop the sale"
      onLinkClick={handleClick}
      target="_blank"
    />
  );
}`;

const EXAMPLE_GENERATED = `import { QRHoverLink } from "qr-hover-link";

// Generate QR images on-the-fly — no local file needed
const url = "https://github.com";
const qrSrc = \`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=\${encodeURIComponent(url)}\`;

export function GeneratedQR() {
  return (
    <QRHoverLink
      src={qrSrc}
      href={url}
      overlayLabel="Open on GitHub"
    />
  );
}`;

// ─── Component ────────────────────────────────────────────────────────────────

export const DocsSection: React.FC = () => {
  return (
    <div style={styles.root}>

      {/* ── About ──────────────────────────────────────────────────── */}
      <section id="about" style={styles.section}>
        <SectionHeading badge="01" title="What is qr-hover-link?" />
        <p style={styles.prose}>
          QR codes are great for mobile users — but on desktop, visitors have to
          reach for their phone just to follow a link. <strong style={styles.strong}>qr-hover-link</strong> solves
          that by wrapping any QR image in a React component that shows a
          clickable overlay link on hover.
        </p>
        <p style={styles.prose}>
          No CSS files, no class name conflicts, no runtime dependencies beyond
          React itself. Defaults are intentionally minimal — black, white, and
          transparency — so it fits any site theme out of the box. Every visual
          detail is customisable via props.
        </p>

        <div style={styles.featureGrid}>
          {FEATURES.map((f) => (
            <div key={f.title} style={styles.featureCard}>
              <span style={styles.featureIcon}>{f.icon}</span>
              <strong style={styles.featureTitle}>{f.title}</strong>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Installation ───────────────────────────────────────────── */}
      <section id="install" style={styles.section}>
        <SectionHeading badge="02" title="Installation" />
        <p style={styles.prose}>
          Install from npm. React ≥ 17 must already be in your project.
        </p>
        <div style={styles.installRow}>
          <div style={{ flex: 1 }}>
            <p style={styles.installLabel}>npm</p>
            <CodeBlock code={INSTALL_NPM} language="bash" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={styles.installLabel}>yarn</p>
            <CodeBlock code={INSTALL_YARN} language="bash" />
          </div>
        </div>
      </section>

      {/* ── Props ──────────────────────────────────────────────────── */}
      <section id="props" style={styles.section}>
        <SectionHeading badge="03" title="Props reference" />
        <p style={styles.prose}>
          Only <code style={styles.inlineCode}>href</code> and{" "}
          <code style={styles.inlineCode}>src</code> are required. Everything
          else has a sensible default.
        </p>
        <PropsTable />
      </section>

      {/* ── Examples ───────────────────────────────────────────────── */}
      <section id="examples" style={styles.section}>
        <SectionHeading badge="04" title="Code examples" />

        <ExampleBlock
          title="Minimal usage"
          desc="Two required props and you're done. The overlay uses the default black/white/transparent theme."
          code={EXAMPLE_MINIMAL}
        />

        <ExampleBlock
          title="Branded overlay"
          desc="Override overlay colors, label text, border radius, and size to match your brand."
          code={EXAMPLE_THEMED}
        />

        <ExampleBlock
          title="Light-themed site"
          desc="Flip the overlay to a white background with dark text for sites that use a light color scheme."
          code={EXAMPLE_LIGHT}
        />

        <ExampleBlock
          title="Click tracking"
          desc="Use onLinkClick to fire an analytics event every time a user clicks through the overlay."
          code={EXAMPLE_ANALYTICS}
        />

        <ExampleBlock
          title="On-the-fly QR generation"
          desc="No QR image file? Use the free api.qrserver.com API to generate one from any URL at runtime."
          code={EXAMPLE_GENERATED}
        />
      </section>

    </div>
  );
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionHeading: React.FC<{ badge: string; title: string }> = ({ badge, title }) => (
  <div style={headingStyles.wrapper}>
    <span style={headingStyles.badge}>{badge}</span>
    <h2 style={headingStyles.title}>{title}</h2>
  </div>
);

const ExampleBlock: React.FC<{ title: string; desc: string; code: string }> = ({
  title,
  desc,
  code,
}) => (
  <div style={exStyles.block}>
    <h3 style={exStyles.title}>{title}</h3>
    <p style={exStyles.desc}>{desc}</p>
    <CodeBlock code={code} language="tsx" />
  </div>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "🖱️",
    title: "Hover to reveal",
    desc: "A smooth fade-in overlay appears on mouse hover and keyboard focus.",
  },
  {
    icon: "🎨",
    title: "Fully themeable",
    desc: "Every color, size, radius, and shadow is a prop. No CSS files to fight.",
  },
  {
    icon: "♿",
    title: "Accessible",
    desc: "Keyboard navigable, aria-label on the wrapper, aria-hidden on the overlay when closed.",
  },
  {
    icon: "📦",
    title: "Zero dependencies",
    desc: "Only React as a peer dep. Ships CJS + ESM + TypeScript declarations.",
  },
];

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  root: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  },
  section: {
    paddingTop: "64px",
  },
  prose: {
    fontSize: "0.92rem",
    color: "#9090b8",
    lineHeight: 1.8,
    margin: "0 0 16px",
    maxWidth: "720px",
  },
  strong: {
    color: "#c0c0e0",
    fontWeight: 600,
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "16px",
    marginTop: "28px",
  },
  featureCard: {
    background: "#1a1a2e",
    border: "1px solid #2a2a4a",
    borderRadius: "10px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  featureIcon: {
    fontSize: "1.4rem",
  },
  featureTitle: {
    color: "#c0c0e0",
    fontSize: "0.88rem",
    fontWeight: 700,
  },
  featureDesc: {
    margin: 0,
    fontSize: "0.78rem",
    color: "#7070a0",
    lineHeight: 1.6,
  },
  installRow: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap" as const,
  },
  installLabel: {
    margin: "0 0 6px",
    fontSize: "0.72rem",
    color: "#5050a0",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
  },
  inlineCode: {
    background: "#1e1e3a",
    padding: "1px 6px",
    borderRadius: "4px",
    fontSize: "0.85em",
    color: "#a0c4ff",
    fontFamily: "monospace",
  },
};

const headingStyles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px",
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
  title: {
    margin: 0,
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#c0c0e0",
  },
};

const exStyles: Record<string, React.CSSProperties> = {
  block: {
    marginBottom: "36px",
  },
  title: {
    margin: "0 0 6px",
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#a0a0d0",
  },
  desc: {
    margin: "0 0 12px",
    fontSize: "0.82rem",
    color: "#6060a0",
    lineHeight: 1.6,
  },
};
