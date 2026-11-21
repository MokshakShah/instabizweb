export interface NavItem { label: string; to: string; end?: boolean }

export const navItems: NavItem[] = [
  { label: "Home", to: "/", end: true },
  { label: "Puppies", to: "/puppies" },
  { label: "Happy families", to: "/happy-families" },
  { label: "How it works", to: "/how-it-works" },
  { label: "FAQ", to: "/faq" },
  { label: "Visit & contact", to: "/contact" },
];

export const footerExplore: NavItem[] = [
  { label: "Available puppies", to: "/puppies", end: true },
  { label: "Gone home", to: "/gone-home" },
  { label: "Happy families", to: "/happy-families" },
  { label: "How it works", to: "/how-it-works" },
  { label: "Delivery & collection", to: "/how-it-works#delivery" },
  { label: "FAQ", to: "/faq" },
  { label: "Visit & contact", to: "/contact" },
];

export const socialLinks = [
  { label: "Instagram", href: "https://www.instabizweb.com/" },
  { label: "TikTok", href: "https://www.instabizweb.com/" },
  { label: "Facebook", href: "https://www.instabizweb.com/" },
];

export const MAPS_URL = "https://www.instabizweb.com/";

export const breedChips = [
  { label: "Maltipoo", key: "maltipoo" },
  { label: "Pomeranian", key: "pomeranian" },
  { label: "Poodle", key: "poodle" },
  { label: "Cavapoo", key: "cavapoo" },
  { label: "Shih Tzu", key: "shih-tzu" },
] as const;
