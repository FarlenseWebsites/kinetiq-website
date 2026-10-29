import type { MetadataRoute } from "next"
import { SITE_URL, siteRoutes } from "./lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return siteRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
