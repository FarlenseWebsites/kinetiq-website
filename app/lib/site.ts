export const SITE_URL = "https://www.kinetiqphysiotherapy.com"

// Every public route. Add new pages here so they show up in sitemap.xml.
// Paths end with "/" to match `trailingSlash: true` in next.config.ts.
export const siteRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/physiotherapy/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/treatments/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/kinetiqSessions/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/book/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.7, changeFrequency: "yearly" },
] as const
