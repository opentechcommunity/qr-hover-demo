import React, { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

/**
 * Lightweight syntax-highlighted code block.
 * Highlights JSX/TSX tokens with regex — no external lib needed.
 */
export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "tsx" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const highlighted = highlight(code);

  return (
    <div style={styles.wrapper}>
      <div style={styles.topBar}>
        <span style={styles.lang}>{language}</span>
        <button style={styles.copyBtn} onClick={handleCopy} aria-label="Copy code">
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <pre style={styles.pre}>
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </div>
  );
};

// ─── Minimal tokeniser ────────────────────────────────────────────────────────

function escape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlight(raw: string): string {
  const s = escape(raw);

  return s
    // Strings (single / double / template)
    .replace(/(&#x60;[^&#x60;]*&#x60;|&quot;[^&quot;]*&quot;|&#39;[^&#39;]*&#39;)/g,
      '<span style="color:#a8ff78">$1</span>')
    // JSX prop names  (word=)
    .replace(/\b([a-zA-Z][a-zA-Z0-9]*)(?==)/g,
      '<span style="color:#79b8ff">$1</span>')
    // JSX / HTML tags  <Component  </Component  />
    .replace(/(&lt;\/?)([\w.]+)/g,
      '$1<span style="color:#f97583">$2</span>')
    // Keywords
    .replace(/\b(import|from|export|default|const|let|var|return|function|type|interface|extends)\b/g,
      '<span style="color:#f97583">$1</span>')
    // Comments
    .replace(/(\/\/[^\n]*)/g,
      '<span style="color:#6a737d">$1</span>')
    // Numbers
    .replace(/\b(\d+)\b/g,
      '<span style="color:#79b8ff">$1</span>');
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid #2a2a4a",
    background: "#0d1117",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 16px",
    background: "#161b22",
    borderBottom: "1px solid #2a2a4a",
  },
  lang: {
    fontSize: "0.7rem",
    color: "#6060a0",
    fontFamily: "monospace",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  copyBtn: {
    background: "transparent",
    border: "1px solid #2a2a4a",
    color: "#8080b0",
    fontSize: "0.7rem",
    padding: "3px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "color 0.15s, border-color 0.15s",
  },
  pre: {
    margin: 0,
    padding: "20px",
    overflowX: "auto",
    fontSize: "0.82rem",
    lineHeight: 1.7,
    fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
    color: "#e0e0ff",
    tabSize: 2,
  },
};
