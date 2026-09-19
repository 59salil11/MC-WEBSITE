export type Brand = {
  name: string
  logo: string
  /** Render on a dark tile when the logo artwork is light-on-dark */
  dark?: boolean
}

export const accessoryBrands: Brand[] = [
  { name: "Anker", logo: "/brands/anker.png" },
  { name: "Belkin", logo: "/brands/belkin.jpg" },
  { name: "Case-Mate", logo: "/brands/case-mate.jpg" },
  { name: "JBL", logo: "/brands/jbl.webp" },
  { name: "ITSKINS", logo: "/brands/itskins.png" },
  { name: "Kate Spade", logo: "/brands/kate-spade.png" },
  { name: "OtterBox", logo: "/brands/otterbox.jpg" },
  { name: "mophie", logo: "/brands/mophie.png" },
  { name: "Prodigee", logo: "/brands/prodigee.avif" },
  { name: "Pelican", logo: "/brands/pelican.jpg", dark: true },
  { name: "Speck", logo: "/brands/speck.webp" },
  { name: "Spigen", logo: "/brands/spigen.webp" },
  { name: "ZAGG", logo: "/brands/zagg.avif" },
]
