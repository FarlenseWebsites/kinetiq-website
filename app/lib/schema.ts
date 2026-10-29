import { SITE_URL } from "./site"

const BASE = `${SITE_URL}/`
const ORG_ID = `${BASE}#organization`
const WEBSITE_ID = `${BASE}#website`

// Public-folder path, so it doesn't change on every build
// (the /_next/static/media/... hashed URL does).
const LOGO = `${SITE_URL}/KinetiQLogo.avif`
const IMAGE = `${SITE_URL}/nl2.jpg`

const TELEPHONE = "+91-9319606763"
const EMAIL = "info@kinetiqphysiotherapy.com"
const SLOGAN = "Best Physiotherapy Clinic In Gurgaon"
const SAME_AS = [
  "https://www.instagram.com/kinetiqphysiotherapy",
  "https://www.linkedin.com/company/kinetiq-physiotherapy/",
]

const golfCourseAddress = {
  "@type": "PostalAddress",
  streetAddress: "Fl 2A, F, 16-17, Golf Course Rd, DLF Phase 1, Sector 27",
  addressLocality: "Gurugram",
  addressRegion: "Haryana",
  postalCode: "122009",
  addressCountry: "IN",
}

const sector65Address = {
  "@type": "PostalAddress",
  streetAddress: "AIPL Joy Central Mall, Sector 65",
  addressLocality: "Gurugram",
  addressRegion: "Haryana",
  postalCode: "122101",
  addressCountry: "IN",
}

const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
]

const clinicCommon = {
  "@type": "Physiotherapy",
  name: "KinetiQ Physiotherapy",
  url: BASE,
  parentOrganization: { "@id": ORG_ID },
  slogan: SLOGAN,
  telephone: TELEPHONE,
  email: EMAIL,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: ["Cash", "UPI"],
  logo: LOGO,
  openingHoursSpecification: openingHours,
  knowsLanguage: ["en-IN"],
  knowsAbout: ["Physiotherapy Center"],
  sameAs: SAME_AS,
}

/** Site-wide graph: Organization + both clinic locations + WebSite. Rendered in the root layout. */
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "KinetiQ Physiotherapy",
      url: BASE,
      logo: LOGO,
      image: IMAGE,
      slogan: SLOGAN,
      email: EMAIL,
      telephone: TELEPHONE,
      knowsLanguage: ["en-IN"],
      knowsAbout: ["Physiotherapy Center"],
      address: [golfCourseAddress, sector65Address],
      sameAs: SAME_AS,
      location: [
        { "@id": `${BASE}#location-golf-course-road` },
        { "@id": `${BASE}#location-sector-65` },
      ],
    },
    {
      ...clinicCommon,
      "@id": `${BASE}#location-golf-course-road`,
      description:
        "KinetiQ Physiotherapy is a trusted destination for personalised rehabilitation, pain management, and movement-focused care. Recognised as a choice for those seeking the best physiotherapy clinic in Gurgaon, we offer specialised treatments for sports injuries, back and neck pain, posture correction, joint problems, and pre- and post-surgical recovery. Our evidence-based approach combines hands-on physiotherapy, corrective exercises, and advanced treatment techniques to support recovery, improve mobility, and build strength. With customised care for adults, children, athletes, and seniors, we also provide home visits, online consultations, and corporate wellness programs to help you move better and live stronger.",
      image: [
        "https://lh3.googleusercontent.com/grass-cs/AABkmLep9ibHb0uRZaYb_wHPmEuGX6jTnjK2h2Gdd8bKvS648LG9RGEAtwAvXBAdKrlxIPA-fOK5MgphlOx2LLT-yfTUYN5kEwUFTXhb20vnUrUBp2iwycWIk-niT9W48rtWHRDrBwCUNSocQiPa=w408-h306-k-no",
        IMAGE,
      ],
      address: golfCourseAddress,
      geo: { "@type": "GeoCoordinates", latitude: 28.466737, longitude: 77.09395 },
      hasMap: "https://maps.app.goo.gl/FX5WNS4BzmPuPpG96",
    },
    {
      ...clinicCommon,
      "@id": `${BASE}#location-sector-65`,
      description:
        "At KinetiQ Physiotherapy, we focus on helping you move comfortably, recover effectively, and return to your daily activities with confidence. If you are looking for the best physiotherapy clinic in Gurgaon, our personalised care plans address musculoskeletal pain, sports injuries, mobility limitations, posture-related issues, and post-operative rehabilitation. Through individualised exercise programs, movement assessment, and hands-on therapy, we aim to improve flexibility, strength, and physical function. We also offer home physiotherapy, virtual sessions, and corporate wellness solutions to make professional care accessible to different needs and lifestyles.",
      image: IMAGE,
      address: sector65Address,
      geo: { "@type": "GeoCoordinates", latitude: 28.406615, longitude: 77.060128 },
      hasMap: "https://maps.app.goo.gl/PqTi65grPDajztLVA",
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: BASE,
      name: "KinetiQ Physiotherapy",
      inLanguage: "en-IN",
      publisher: { "@id": ORG_ID },
    },
  ],
}

export const HOME_TITLE = "Best Physiotherapy Clinic in Gurgaon | KinetiQ Physiotherapy"
export const HOME_DESCRIPTION =
  "Looking for the best physiotherapy clinic in Gurgaon? KinetiQ offers expert physiotherapists, advanced treatment & faster recovery. Book your appointment today!"

/** Homepage-only WebPage node. */
export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE}#webpage`,
  url: BASE,
  name: HOME_TITLE,
  description: HOME_DESCRIPTION,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  mainEntity: { "@id": ORG_ID },
  inLanguage: "en-IN",
}
