import React from "react";
import { QRHoverLink } from "qr-hover-link";
import type { QRItem } from "../types";

interface QRCardProps {
  item: QRItem;
}

export const QRCard: React.FC<QRCardProps> = ({ item }) => {
  return (
    <div style={styles.card}>
      <div style={styles.qrWrapper}>
        {/* QRHoverLink from our local package */}
        <QRHoverLink
          src={item.qrSrc}
          href={item.href}
          alt={`QR code for ${item.label}`}
          width={180}
          height={180}
          overlayLabel="Open in browser"
          overlayBackground="rgba(10, 10, 30, 0.82)"
          labelColor="#e0e0ff"
          linkColor="#a0c4ff"
          borderRadius="10px"
          boxShadow="none"
          labelFontSize="0.78rem"
          linkFontSize="0.68rem"
        />
      </div>

      <div style={styles.info}>
        <h3 style={styles.label}>{item.label}</h3>
        <p style={styles.description}>{item.description}</p>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          {item.href}
        </a>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "#1a1a2e",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    transition: "transform 0.2s ease",
  },
  qrWrapper: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "10px",
    display: "inline-flex",
  },
  info: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    margin: 0,
    fontSize: "1rem",
    fontWeight: 700,
    color: "#e0e0ff",
    letterSpacing: "0.02em",
  },
  description: {
    margin: 0,
    fontSize: "0.78rem",
    color: "#9090b0",
    lineHeight: 1.5,
  },
  link: {
    fontSize: "0.7rem",
    color: "#6060aa",
    textDecoration: "none",
    wordBreak: "break-all",
  },
};
