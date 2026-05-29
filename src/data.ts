import type { QRItem, PhotoItem } from "./types";

/**
 * QR codes generated on-the-fly by the free QR Server API.
 * https://goqr.me/api/
 * Format: https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=<URL>
 */
export const qrItems: QRItem[] = [
  {
    id: 1,
    label: "GitHub",
    description: "Explore open-source projects and collaborate with developers worldwide.",
    href: "https://github.com",
    qrSrc: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://github.com",
  },
  {
    id: 2,
    label: "MDN Web Docs",
    description: "The go-to reference for HTML, CSS, and JavaScript documentation.",
    href: "https://developer.mozilla.org",
    qrSrc:
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://developer.mozilla.org",
  },
  {
    id: 3,
    label: "npm Registry",
    description: "Find and publish JavaScript packages used by millions of developers.",
    href: "https://www.npmjs.com",
    qrSrc:
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.npmjs.com",
  },
  {
    id: 4,
    label: "React Docs",
    description: "Official documentation for building user interfaces with React.",
    href: "https://react.dev",
    qrSrc:
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://react.dev",
  },
  {
    id: 5,
    label: "Vite",
    description: "Next-generation frontend tooling — fast builds and instant HMR.",
    href: "https://vitejs.dev",
    qrSrc:
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://vitejs.dev",
  },
  {
    id: 6,
    label: "TypeScript",
    description: "Strongly typed JavaScript that scales — official language site.",
    href: "https://www.typescriptlang.org",
    qrSrc:
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.typescriptlang.org",
  },
];

/**
 * Nature / landscape photos from Picsum Photos (https://picsum.photos).
 * Each URL returns a deterministic image by seed so the gallery is stable.
 */
export const photoItems: PhotoItem[] = [
  {
    id: 1,
    src: "https://picsum.photos/seed/forest/400/300",
    alt: "Forest landscape",
    photographer: "Picsum Photos",
    photographerUrl: "https://picsum.photos",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/ocean/400/300",
    alt: "Ocean waves",
    photographer: "Picsum Photos",
    photographerUrl: "https://picsum.photos",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/mountain/400/300",
    alt: "Mountain peak",
    photographer: "Picsum Photos",
    photographerUrl: "https://picsum.photos",
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/desert/400/300",
    alt: "Desert dunes",
    photographer: "Picsum Photos",
    photographerUrl: "https://picsum.photos",
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/city/400/300",
    alt: "City skyline",
    photographer: "Picsum Photos",
    photographerUrl: "https://picsum.photos",
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/river/400/300",
    alt: "River valley",
    photographer: "Picsum Photos",
    photographerUrl: "https://picsum.photos",
  },
];
