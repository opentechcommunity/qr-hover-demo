export interface QRItem {
  id: number;
  label: string;
  description: string;
  /** URL the QR code encodes */
  href: string;
  /** QR image fetched from an online QR generator */
  qrSrc: string;
}

export interface PhotoItem {
  id: number;
  src: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
}
