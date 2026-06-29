// Single source of truth for site content.
// Edit values here — components read from this, so markup never needs touching.

export interface SocialLink {
  /** Short label shown on the page */
  label: string;
  /** Accessible name for screen readers */
  title: string;
  /** Full URL */
  href: string;
}

export const site = {
  /** Studio wordmark. "NDA/" stays fixed; the suffix cycles through this list.
   *  First entry shows on load. Edit / reorder freely. */
  name: {
    primary: "NDA",
    suffixes: ["studio", "software", "audiovisual", "installation", "sound"],
  },

  /** Short eyebrow tagline shown above the wordmark. */
  tagline: "Creative technology studio",

  email: "contact@nda.studio",

  socials: [
    {
      label: "IG",
      title: "Instagram",
      href: "https://instagram.com/nda.root",
    },
    {
      label: "LI",
      title: "LinkedIn",
      href: "https://linkedin.com/company/studio-nda/",
    },
    {
      label: "GH",
      title: "GitHub",
      href: "https://github.com/orgs/NDAstudio/",
    },
  ] satisfies SocialLink[],
} as const;
