import type { ServicePageData } from "./types"
import { SERVICE_PATHS as P } from "./paths"

export const femalePage: ServicePageData = {
  path: P.female,
  metaTitle: "Best Female Physiotherapist in Gurgaon | KinetiQ",
  metaDescription:
    "Female physiotherapist in Gurgaon at KinetiQ provides personalised care, injury rehabilitation and tailored exercises to improve mobility, build strength and support recovery.",
  breadcrumb: "Female Physiotherapist",
  serviceName: "Female Physiotherapy and Women's Health Physiotherapy",
  hero: {
    label: "Golf Course Road & Sector 65",
    title: "Best Female Physiotherapist in Gurgaon",
    intro:
      "Private, comfortable care at KinetiQ Physiotherapy. Our female clinicians help you recover, rebuild and move well at every stage of life.",
    image: "/women1.avif",
    imageAlt: "Female physiotherapist with a patient at KinetiQ Physiotherapy, Gurgaon",
  },
  sections: [
    {
      kind: "cards",
      id: "why-kinetiq",
      label: "Why KinetiQ",
      heading: "Why Women Choose Our Female Physiotherapists in Gurgaon",
      intro:
        "Looking for the best female physiotherapist in Gurgaon? At KinetiQ Physiotherapy, you get a clinician who listens first and treats second.",
      cols: 4,
      items: [
        { title: "Female physiotherapists", body: "Every session is with a qualified woman who understands your body and your concerns." },
        { title: "Private, comfortable setting", body: "Quiet treatment rooms where you can speak openly and ask anything." },
        { title: "Personalised plans", body: "Built around your goals, your routine and your pace. No copy-paste exercise sheets." },
        { title: "Home visits available", body: "Prefer your own space? Our therapist comes to you." },
      ],
    },
    {
      kind: "cards",
      id: "womens-health-conditions",
      label: "Women's Health",
      heading: "Women's Health Conditions We Treat",
      intro: "Our women's physiotherapy covers the problems women ask us about most. See our full [women's health physiotherapy services](/physiotherapy#womens-health-physiotherapy) for more.",
      items: [
        { title: "Prenatal care", body: "Ease back and hip pain and prepare your body for birth." },
        { title: "Postnatal recovery", body: "Rebuild core strength safely after delivery." },
        { title: "Pelvic floor care", body: "Treat leaks, heaviness and pelvic pain." },
        {
          title: "Back and neck pain",
          body: `Relief from desk posture, lifting and daily strain. A pulled muscle? Read about our [muscle strain physiotherapy](${P.muscleStrain}).`,
        },
        { title: "Post C-section rehab", body: "Restore scar mobility and core control at the right pace." },
        { title: "Menopause and bone health", body: "Build strength to protect your bones and joints." },
      ],
    },
    {
      kind: "cards",
      id: "life-stages",
      label: "Life Stages",
      heading: "Physiotherapy for Women at Every Stage of Life",
      intro:
        "Your body changes over the years, and your care should change with it. The best female physiotherapist in Gurgaon adjusts your plan as your life shifts.",
      cols: 4,
      items: [
        { title: "Teens", body: "Posture, growing pains and sports injuries." },
        { title: "Pregnancy", body: "Safe movement and pain relief through each trimester." },
        { title: "Postpartum", body: "Gentle, step-by-step recovery." },
        { title: "Midlife and beyond", body: "Joint pain, bone health and staying active." },
      ],
    },
    {
      kind: "steps",
      id: "first-visit",
      label: "Your First Visit",
      heading: "What to Expect at Your First Visit",
      intro: "New to physiotherapy? Here is how your first visit with the best female physiotherapist in Gurgaon works.",
      items: [
        { title: "Book with a female physiotherapist", body: "Choose a clinic or a home visit." },
        { title: "Private assessment", body: "We talk through your history, your symptoms and your goals." },
        { title: "Personal plan", body: "We explain it in plain words, so you know what happens next." },
        {
          title: "Treatment and follow-up",
          body: `We track your progress and adjust as you improve. Some plans include [cupping therapy](${P.cupping}) to ease muscle tension.`,
        },
      ],
    },
    {
      kind: "team",
      id: "our-team",
      label: "Our Team",
      heading: "Meet Our Female Physiotherapists",
      intro:
        "Our team brings training, patience and real experience to every session. Meet the clinicians behind the best female physiotherapist in Gurgaon experience.",
      // TODO: add real names — hidden while empty
      members: [],
    },
    {
      kind: "cards",
      id: "home-visits",
      label: "Home Visits",
      heading: "Female Physiotherapist at Home in Gurgaon",
      intro: "Travelling is hard after delivery, surgery or when you're in pain. Our [home visit physiotherapy](/kinetiqSessions#home-visits) brings the care of the best female physiotherapist in Gurgaon to your door.",
      cols: 2,
      items: [
        // TODO: replace with the real list of sectors covered
        { title: "Areas covered", body: "Selected Gurgaon sectors. Share your sector when you book and we'll confirm availability." },
        {
          title: "How to book",
          body: "Call or WhatsApp us, or use our [contact page](/contact/). Tell us your sector and a time that suits you.",
        },
      ],
    },
    {
      kind: "reviews",
      id: "reviews",
      label: "Reviews",
      heading: "What Patients Say About Our Female Physiotherapists",
      intro:
        "Don't take our word for it. Here is what women say about the best female physiotherapist in Gurgaon experience at KinetiQ Physiotherapy.",
      // TODO: add 3 real Google reviews — hidden while empty
      reviews: [],
    },
    {
      kind: "clinics",
      id: "clinics",
      label: "Visit Us",
      heading: "Visit Our Clinics for Women's Physiotherapy in Gurgaon",
      intro:
        "Searching for a female physiotherapist near me? Visit either KinetiQ Physiotherapy clinic and ask for the best female physiotherapist in Gurgaon for your needs.",
    },
    {
      kind: "faq",
      id: "faq",
      label: "FAQ",
      heading: "Frequently Asked Questions About Female Physiotherapists in Gurgaon",
      items: [
        {
          q: "Do you have a lady physiotherapist in Gurgaon?",
          a: "Yes. KinetiQ Physiotherapy has qualified female physiotherapists at both Gurgaon clinics, on Golf Course Road (DLF Phase 1) and at AIPL Joy Central Mall, Sector 65. You can request a lady physiotherapist when you book, whether you visit a clinic or prefer treatment at home.",
        },
        {
          q: "Can I request a female therapist for home visits?",
          a: "Yes. When you book a home visit, tell us you want a female therapist and we assign one. She arrives with the equipment your plan needs. Call or WhatsApp us with your sector and preferred time, and we confirm availability.",
        },
        {
          q: "Do you offer prenatal and postnatal physiotherapy?",
          a: "Yes. Prenatal care eases back, hip and pelvic pain during pregnancy and prepares your body for birth. Postnatal physiotherapy rebuilds core and pelvic floor strength after vaginal delivery or a C-section. We tailor each plan to your stage, health history and doctor's advice.",
        },
        {
          q: "Who is the best female physiotherapist in Gurgaon?",
          a: "KinetiQ Physiotherapy is a strong choice for the best female physiotherapist in Gurgaon. You get qualified female clinicians, private treatment rooms, personalised plans and home visits across two clinics. Book by call, WhatsApp or our contact page, and we match you with the right therapist.",
        },
      ],
    },
  ],
  cta: {
    heading: "Book Your Female Physiotherapist Consultation in Gurgaon Today",
    body: "Get your comfort back. Book your first session with KinetiQ Physiotherapy, the best female physiotherapist in Gurgaon for women who want private, personal care.",
  },
}
