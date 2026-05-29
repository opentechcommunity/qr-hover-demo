import React, { useState } from "react";
import type { PhotoItem } from "../types";

interface PhotoCardProps {
  photo: PhotoItem;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={styles.card}>
      {/* Skeleton shown while image loads */}
      {!loaded && <div style={styles.skeleton} aria-hidden="true" />}

      <img
        src={photo.src}
        alt={photo.alt}
        style={{ ...styles.image, opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />

      <div style={styles.caption}>
        <span style={styles.altText}>{photo.alt}</span>
        <a
          href={photo.photographerUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.credit}
        >
          {photo.photographer}
        </a>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  card: {
    borderRadius: "10px",
    overflow: "hidden",
    background: "#1a1a2e",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  skeleton: {
    width: "100%",
    height: "220px",
    background: "linear-gradient(90deg, #2a2a3e 25%, #3a3a4e 50%, #2a2a3e 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.4s infinite",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    display: "block",
    transition: "opacity 0.4s ease",
  },
  caption: {
    padding: "10px 14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
  },
  altText: {
    fontSize: "0.82rem",
    color: "#c0c0d0",
    fontWeight: 500,
  },
  credit: {
    fontSize: "0.72rem",
    color: "#7878aa",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
};
