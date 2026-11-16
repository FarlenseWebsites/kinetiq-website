// Single source of truth for the new service page URLs (used for internal links + sitemap).
export const SERVICE_PATHS = {
  muscleStrain: "/physiotherapy-for-muscle-strain/",
  sports: "/best-sports-physiotherapist-in-gurgaon/",
  female: "/best-female-physiotherapist-in-gurgaon/",
  // TODO: switch to "/best-cupping-therapy-in-gurgaon/" once the cupping page is live
  cupping: "/treatments#cupping-therapy",
} as const
