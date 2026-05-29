import React, { useState } from "react";

interface PropRow {
  name: string;
  type: string;
  default: string;
  required: boolean;
  description: string;
}

const PROPS: PropRow[] = [
  { name: "href",               type: "string",                    default: "—",                              required: true,  description: "The URL the QR code encodes. Shown as a clickable link on hover." },
  { name: "src",                type: "string",                    default: "—",                              required: true,  description: "Source path or URL of the QR code image." },
  { name: "alt",                type: "string",                    default: '"QR code"',                      required: false, description: "Alt text for the image (accessibility)." },
  { name: "width",              type: "number | string",           default: "200",                            required: false, description: "Width of the component." },
  { name: "height",             type: "number | string",           default: "200",                            required: false, description: "Height of the component." },
  { name: "overlayBackground",  type: "string",                    default: '"rgba(0,0,0,0.55)"',             required: false, description: "CSS background of the hover overlay." },
  { name: "overlayLabel",       type: "string",                    default: '"Open link"',                    required: false, description: "Heading text shown above the URL in the overlay." },
  { name: "labelFontSize",      type: "string",                    default: '"0.75rem"',                      required: false, description: "Font size of the overlay label." },
  { name: "labelColor",         type: "string",                    default: '"#ffffff"',                      required: false, description: "Color of the overlay label text." },
  { name: "linkFontSize",       type: "string",                    default: '"0.7rem"',                       required: false, description: "Font size of the URL link inside the overlay." },
  { name: "linkColor",          type: "string",                    default: '"#ffffff"',                      required: false, description: "Color of the URL link text." },
  { name: "linkUnderline",      type: "boolean",                   default: "true",                           required: false, description: "Whether to underline the link." },
  { name: "linkMaxLength",      type: "number",                    default: "40",                             required: false, description: "Max characters to display before truncating the URL." },
  { name: "borderRadius",       type: "string",                    default: '"8px"',                          required: false, description: "Border radius applied to both the image and the overlay." },
  { name: "boxShadow",          type: "string",                    default: '"0 2px 12px rgba(0,0,0,0.15)"', required: false, description: "Box shadow on the wrapper element." },
  { name: "containerStyle",     type: "CSSProperties",             default: "—",                              required: false, description: "Extra inline styles for the outer <div> wrapper." },
  { name: "imageStyle",         type: "CSSProperties",             default: "—",                              required: false, description: "Extra inline styles for the <img> element." },
  { name: "overlayStyle",       type: "CSSProperties",             default: "—",                              required: false, description: "Extra inline styles for the overlay <div>." },
  { name: "linkStyle",          type: "CSSProperties",             default: "—",                              required: false, description: "Extra inline styles for the <a> element." },
  { name: "target",             type: "string",                    default: '"_blank"',                       required: false, description: 'Where to open the link ("_blank", "_self", etc.).' },
  { name: "rel",                type: "string",                    default: '"noopener noreferrer"',           required: false, description: "rel attribute on the anchor tag." },
  { name: "onLinkClick",        type: "(href: string) => void",    default: "—",                              required: false, description: "Callback fired when the user clicks the link." },
];

export const PropsTable: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "required" | "optional">("all");

  const visible = PROPS.filter((p) => {
    if (filter === "required") return p.required;
    if (filter === "optional") return !p.required;
    return true;
  });

  return (
    <div>
      {/* Filter tabs */}
      <div style={styles.tabs}>
        {(["all", "required", "optional"] as const).map((f) => (
          <button
            key={f}
            style={{ ...styles.tab, ...(filter === f ? styles.tabActive : {}) }}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
            <span style={styles.tabCount}>
              {f === "all" ? PROPS.length : PROPS.filter((p) => (f === "required" ? p.required : !p.required)).length}
            </span>
          </button>
        ))}
      </div>

      {/* Table */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Prop</th>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>Default</th>
              <th style={{ ...styles.th, width: "40%" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((row, i) => (
              <tr key={row.name} style={{ background: i % 2 === 0 ? "#0f0f20" : "#13132a" }}>
                <td style={styles.td}>
                  <code style={styles.propName}>{row.name}</code>
                  {row.required && <span style={styles.required}>required</span>}
                </td>
                <td style={styles.td}>
                  <code style={styles.typeCode}>{row.type}</code>
                </td>
                <td style={styles.td}>
                  <code style={styles.defaultCode}>{row.default}</code>
                </td>
                <td style={{ ...styles.td, color: "#9090b8", fontSize: "0.8rem", lineHeight: 1.5 }}>
                  {row.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  tabs: {
    display: "flex",
    gap: "8px",
    marginBottom: "16px",
  },
  tab: {
    background: "transparent",
    border: "1px solid #2a2a4a",
    color: "#6060a0",
    fontSize: "0.78rem",
    padding: "5px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "all 0.15s",
  },
  tabActive: {
    background: "#1e1e4a",
    borderColor: "#5050a0",
    color: "#a0a0ff",
  },
  tabCount: {
    background: "#2a2a5a",
    color: "#7070c0",
    fontSize: "0.65rem",
    padding: "1px 6px",
    borderRadius: "10px",
    fontWeight: 700,
  },
  tableWrapper: {
    overflowX: "auto",
    borderRadius: "10px",
    border: "1px solid #1e1e3a",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.82rem",
  },
  th: {
    padding: "12px 16px",
    textAlign: "left",
    background: "#161622",
    color: "#6060a0",
    fontWeight: 600,
    fontSize: "0.72rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    borderBottom: "1px solid #1e1e3a",
    whiteSpace: "nowrap",
  },
  td: {
    padding: "10px 16px",
    borderBottom: "1px solid #1a1a30",
    verticalAlign: "top",
  },
  propName: {
    color: "#79b8ff",
    fontFamily: "monospace",
    fontSize: "0.82rem",
    marginRight: "6px",
  },
  required: {
    background: "#3a1a1a",
    color: "#ff7070",
    fontSize: "0.6rem",
    padding: "1px 6px",
    borderRadius: "4px",
    fontWeight: 700,
    letterSpacing: "0.04em",
    verticalAlign: "middle",
  },
  typeCode: {
    color: "#c084fc",
    fontFamily: "monospace",
    fontSize: "0.78rem",
    whiteSpace: "nowrap",
  },
  defaultCode: {
    color: "#a8ff78",
    fontFamily: "monospace",
    fontSize: "0.78rem",
    whiteSpace: "nowrap",
  },
};
