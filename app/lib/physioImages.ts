// ─────────────────────────────────────────────────────────────────────────────
// lib/physioImages.ts
//
// Single source of truth for ALL card images across the site.
//
// HOW TO ADD IMAGES:
//   1. Drop photos into /public/images/conditions/ or /public/images/services/
//   2. Import them below (static imports = type-safe + Next.js optimised)
//   3. Fill in the matching slot in conditionImageMap or physioServiceImageMap
//   4. Any slot left undefined → PhysioServiceCard shows excerciseimg.png
// ─────────────────────────────────────────────────────────────────────────────

import { StaticImageData } from "next/image"

// ── Shared type ───────────────────────────────────────────────────────────────
export interface CardImages {
  image1?: StaticImageData   // col 2  — main tall image
  image2?: StaticImageData   // col 3 top
  image3?: StaticImageData   // col 3 bottom
}

// ─────────────────────────────────────────────────────────────────────────────
// CONDITION IMAGES  (used in ConditionsSection)
// ─────────────────────────────────────────────────────────────────────────────

// Uncomment and update as you add real photography:
//
// import neckMain        from "../../public/images/conditions/neck-main.jpg"
// import neckTop         from "../../public/images/conditions/neck-top.jpg"
// import neckBottom      from "../../public/images/conditions/neck-bottom.jpg"
//
// import shoulderMain    from "../../public/images/conditions/shoulder-main.jpg"
// import shoulderTop     from "../../public/images/conditions/shoulder-top.jpg"
// import shoulderBottom  from "../../public/images/conditions/shoulder-bottom.jpg"
// ... repeat for each condition

export const conditionImageMap: Record<string, CardImages> = {
  "Neck & Cervical": {
    // image1: neckMain,
    // image2: neckTop,
    // image3: neckBottom,
  },
  "Shoulder & Upper Limb": {
    // image1: shoulderMain,
    // image2: shoulderTop,
    // image3: shoulderBottom,
  },
  "Elbow Wrist & Hand":   {},
  "Lower Back & Lumbar":  {},
  "Hip & Pelvis":         {},
  "Knee":                 {},
  "Ankle & Foot":         {},
  "Frozen Shoulder":      {},
  "Scoliosis":            {},
  "Lumbar Spondylitis":   {},
  "Neuropathy":           {},
  "Osteoporosis":         {},
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE IMAGES  (used in PhysioServicesSection)
// ─────────────────────────────────────────────────────────────────────────────

// Uncomment and update as you add real photography:
//
// import orthoMain        from "../../public/images/services/ortho-main.jpg"
// import orthoTop         from "../../public/images/services/ortho-top.jpg"
// import orthoBottom      from "../../public/images/services/ortho-bottom.jpg"
//
// import sportsMain       from "../../public/images/services/sports-main.jpg"
// import sportsTop        from "../../public/images/services/sports-top.jpg"
// import sportsBottom     from "../../public/images/services/sports-bottom.jpg"
// ... repeat for each service

export const physioServiceImageMap: Record<string, CardImages> = {
  "Orthopaedic Physiotherapy": {
    // image1: orthoMain,
    // image2: orthoTop,
    // image3: orthoBottom,
  },
  "Sports Physiotherapy": {
    // image1: sportsMain,
    // image2: sportsTop,
    // image3: sportsBottom,
  },
  "Neurological Physiotherapy":     {},
  "Pediatric Physiotherapy":        {},
  "Geriatric Physiotherapy":        {},
  "Cardiopulmonary Physiotherapy":  {},
  "Women's Health Physiotherapy":   {},
  "Antenatal Physiotherapy":        {},
  "Postnatal Physiotherapy":        {},
  "Post-Surgical Rehabilitation":   {},
}