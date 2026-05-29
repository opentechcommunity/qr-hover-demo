import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about",    label: "About" },
  { href: "#install",  label: "Install" },
  { href: "#props",    label: "Props" },
  { href: "#examples", label: "Examples" },
  { href: "#demo",     label: "Live demo" },
  { href: "#gallery",  label: "Gallery" },
];

export const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("#about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight the nav link whose section is nearest the top of the viewport
      const ids = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(NAV_LINKS[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(href);
  };

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <div style={styles.inner}>
        <span style={styles.logo}>
          <span style={styles.logoIcon}>⬛</span> qr-hover-link
        </span>

        <div style={styles.links}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                ...styles.link,
                ...(active === l.href ? styles.linkActive : {}),
              }}
              onClick={(e) => handleClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="https://www.npmjs.com/package/qr-hover-link"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.npmBadge}
        >
          npm
        </a>
      </div>
    </nav>
  );
};

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "rgba(13, 13, 26, 0.7)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid transparent",
    transition: "border-color 0.2s, background 0.2s",
  },
  navScrolled: {
    borderBottom: "1px solid #1e1e3a",
    background: "rgba(13, 13, 26, 0.92)",
  },
  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    gap: "32px",
  },
  logo: {
    fontSize: "0.88rem",
    fontWeight: 700,
    color: "#a0a0ff",
    letterSpacing: "-0.01em",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    whiteSpace: "nowrap" as const,
    marginRight: "auto",
  },
  logoIcon: {
    fontSize: "0.7rem",
  },
  links: {
    display: "flex",
    gap: "4px",
    flexWrap: "nowrap" as const,
    overflowX: "auto" as const,
  },
  link: {
    fontSize: "0.78rem",
    color: "#6060a0",
    textDecoration: "none",
    padding: "5px 10px",
    borderRadius: "6px",
    whiteSpace: "nowrap" as const,
    transition: "color 0.15s, background 0.15s",
  },
  linkActive: {
    color: "#a0a0ff",
    background: "#1a1a3a",
  },
  npmBadge: {
    fontSize: "0.68rem",
    fontWeight: 700,
    color: "#cc3534",
    border: "1px solid #3a1a1a",
    padding: "3px 10px",
    borderRadius: "6px",
    textDecoration: "none",
    letterSpacing: "0.04em",
    whiteSpace: "nowrap" as const,
  },
};
