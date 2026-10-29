// Content for the Machine Music page (/machine-music).
// Edit values here — the page reads from this. Media files live in
// public/machine-music/ and are referenced by file name only.

export interface Photo {
  file: string;
  alt: string;
  /** Shown under the photo when it's enlarged */
  caption: string;
  /** Pill shown on top of the photo */
  link?: ExternalLink;
  /** "wide" spans 2 columns, "tall" spans 2 rows */
  span?: "wide" | "tall";
  /** CSS object-position, for crops that need nudging */
  position?: string;
}

export interface ExternalLink {
  label: string;
  href: string;
}

const links = {
  recap: { label: "Export recap video", href: "https://www.youtube.com/watch?v=60gImGukdMQ" },
  vondelbunker: { label: "Vondelbunker video", href: "https://youtu.be/BiNbzY3j4dQ" },
  listen: { label: "Full set on SoundCloud", href: "https://soundcloud.com/den-ree/machine-music-at-export-by-den" },
} satisfies Record<string, ExternalLink>;

export const machineMusic = {
  title: "Machine Music",
  eyebrow: "Live A/V performance · 45-60 min",
  description:
    "Machine Music: a live audiovisual performance by NDA/ tracing the lifecycle of a semiconductor chip.",

  hero: {
    file: "hero.jpg",
    alt: "Den Ree and Niki Scheijen at their table in red light, a projection of molten texture behind them",
    caption: "Premiere, V2_ Rotterdam",
    date: "21.11.2025",
  },

  gallery: [
    { file: "export-1.jpg", link: links.recap, caption: "Export, Rotterdam", alt: "NDA/ on stage at Export with two projections of a green loading bar, code on a monitor in front" },
    { file: "v2-overview.jpg", link: links.vondelbunker, caption: "V2_, Rotterdam", alt: "Top view of the V2_ room with performers at tables and the crowd in blue light" },
    { file: "oct-phones.jpg", link: links.listen, caption: "AR layer on the audience's phones", alt: "Audience members holding up phones that show green AR text cards" },
  ] satisfies Photo[],

  links,
} as const;
