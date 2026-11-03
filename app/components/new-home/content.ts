// All text for the /new-home page lives here, so copy can be edited without touching layout.
// Values wrapped in [brackets] are placeholders from the design — replace them with real data.

import {
  physiotherapyLinks,
  sessionLinks,
  treatmentLinks,
} from "../../lib/navigation"

export const CONTACT = {
  phoneDisplay: "+91 9319606763",
  phoneHref: "tel:+919319606763",
  email: "info@kinetiqphysiotherapy.com",
  whatsapp: "https://wa.me/919319606763",
  instagram: "https://www.instagram.com/kinetiqphysiotherapy",
  linkedin: "https://www.linkedin.com/company/kinetiq-physiotherapy/",
}

export const HERO = {
  eyebrow: "Golf Course Road & Sector 65",
  // Two-tone title like the current homepage ("Rehab and Fitness Needs"):
  // accent: true → brand orange, otherwise brand purple.
  title: [
    { text: "Best Physiotherapy Clinic in Gurgaon for " },
    { text: "Rehab", accent: true },
    { text: ", Posture & " },
    { text: "Fitness", accent: true },
  ],
  text: "KinetiQ combines movement science, hands-on physiotherapy and personalised care to help you move better and feel stronger.",
  image: "/incenter-5.avif",
  imageAlt: "KinetiQ physiotherapist guiding a patient through a shoulder mobility exercise",
}

// TODO: replace the bracketed values with real numbers before going live.
export const STATS = [
  "[X.X] Google Rating",
  "[XXXX+] Patients Treated",
  "2 Centres in Gurgaon",
  "[XX] Expert Physiotherapists",
]

export const WHY = [
  { title: "Expert Physiotherapists", text: "Qualified clinicians with hands-on, evidence-based care." },
  { title: "Advanced Technology", text: "Shockwave, Class IV laser and EMG biofeedback in-house." },
  { title: "Personalised Recovery Plans", text: "Every programme is built around your goals and assessment." },
  { title: "Two Convenient Centres", text: "DLF Phase 1 and Sector 65, Gurgaon." },
  { title: "Care Wherever You Are", text: "In-centre, home visits, online and corporate sessions." },
]

export const PROGRAMS = [
  { title: "Working Professionals", text: "Ergonomic pain, fatigue, poor posture, lifestyle stiffness." },
  { title: "Professional Sportspersons", text: "Injury management and performance training." },
  { title: "Children & Teens", text: "Posture correction and developmental delays." },
  { title: "Post-Surgical Patients", text: "Rehabilitation after spine, joint and ligament surgeries." },
  { title: "Geriatric Care", text: "Fall prevention, joint stability and mobility restoration." },
  { title: "Schools & Academies", text: "Curated fitness programs and posture screening." },
]

export const SPECIALTIES = [
  { title: "Orthopaedic Physiotherapy", text: "Joint, spine and muscle conditions.", href: physiotherapyLinks.orthopaedic },
  { title: "Sports Physiotherapy", text: "Injury recovery and return to play.", href: physiotherapyLinks.sports },
  { title: "Neurological Physiotherapy", text: "Stroke, nerve and balance rehabilitation.", href: physiotherapyLinks.neurological },
  { title: "Women's Health", text: "Prenatal, postnatal and pelvic floor care.", href: physiotherapyLinks.womensHealth },
  { title: "Paediatric & Geriatric", text: "Care across every stage of life.", href: physiotherapyLinks.paediatric },
  { title: "Post-Surgical Rehabilitation", text: "Structured recovery after surgery.", href: physiotherapyLinks.postSurgical },
]

export const TREATMENTS = [
  { title: "Shockwave Therapy", text: "Tendon and chronic pain relief.", href: treatmentLinks.shockwaveTherapy },
  { title: "Class IV Laser Therapy", text: "Deep tissue healing.", href: treatmentLinks.classIVLaser },
  { title: "Dry Needling", text: "Trigger point release.", href: treatmentLinks.dryNeedling },
  { title: "ANF Therapy", text: "Amino neuro frequency care.", href: treatmentLinks.anfTherapy },
  { title: "EMG Biofeedback", text: "Muscle retraining.", href: treatmentLinks.emgBiofeedback },
  { title: "Cupping Therapy", text: "Recovery and mobility support.", href: treatmentLinks.cuppingTherapy },
]

export const SESSIONS = [
  {
    title: "In-Centre Treatment",
    text: "Hands-on physiotherapy with access to advanced treatments.",
    image: "/incenter.avif",
    alt: "Physiotherapist treating a patient at the KinetiQ centre",
    href: sessionLinks.inCentre,
  },
  {
    title: "Home Visits",
    text: "Physiotherapy at your home, on your schedule.",
    image: "/home.avif",
    alt: "Physiotherapy session at a patient's home",
    href: sessionLinks.homeVisits,
  },
  {
    title: "Online Sessions",
    text: "Consultations and guided rehab from anywhere.",
    image: "/online.avif",
    alt: "Online physiotherapy consultation on a laptop",
    href: sessionLinks.online,
  },
  {
    title: "Corporate Wellness",
    text: "On-site physiotherapy for modern workplaces.",
    image: "/corporate.avif",
    alt: "Corporate wellness physiotherapy session in an office",
    href: sessionLinks.corporate,
  },
]

// Timings match openingHoursSpecification in app/lib/schema.ts — keep both in sync.
export const CENTRES = [
  {
    name: "Golf Course Road, DLF Phase 1",
    address: "2nd Floor, F 11 16/17, Golf Course Road, DLF Phase 1, Sector 27, Gurugram 122002",
    timings: "Mon–Sat, 8:00 AM – 8:00 PM",
  },
  {
    name: "AIPL Joy Central Mall, Sector 65",
    address: "AIPL Joy Central Mall, Sector 65, Gurugram 122101",
    timings: "Mon–Sat, 8:00 AM – 8:00 PM",
  },
]

// Same embed as the Golf Course Road centre on /contact.
export const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4316833970497!2d77.0939389!3d28.4665435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1960c4b62a15%3A0xb16ca90c9680d6d5!2sKinetiQ%20Physiotherapy!5e0!3m2!1sen!2sin!4v1780297154631!5m2!1sen!2sin"

// TODO: replace with real Google reviews (with the patient's permission).
export const REVIEWS = [
  { quote: "[Patient review 1]", name: "[Name]" },
  { quote: "[Patient review 2]", name: "[Name]" },
  { quote: "[Patient review 3]", name: "[Name]" },
]

// Draft answers — review with the clinical team before going live.
export const FAQS = [
  {
    q: "Which is the best physiotherapy clinic in Gurgaon?",
    a: "The right clinic pairs qualified physiotherapists with a proper assessment and a plan built for you. KinetiQ offers this at two centres, on Golf Course Road and in Sector 65, with advanced treatments like shockwave and Class IV laser in-house.",
  },
  {
    q: "Do you offer home visit physiotherapy in Gurgaon?",
    a: "Yes. Our physiotherapists visit patients at home across Gurgaon, which suits post-surgical recovery, older adults and anyone who finds travel difficult.",
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on your condition, how long you've had it and your goals. After your first assessment, your physiotherapist will give you a clear plan with an estimated number of sessions.",
  },
  {
    q: "Do you treat sports injuries and post-surgery rehab?",
    a: "Yes. We manage sports injuries from first aid through return to play, and run structured rehab after spine, joint and ligament surgeries.",
  },
]
