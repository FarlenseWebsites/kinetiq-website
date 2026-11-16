import type { ServicePageData } from "./types"
import { SERVICE_PATHS as P } from "./paths"

export const muscleStrainPage: ServicePageData = {
  path: P.muscleStrain,
  metaTitle: "Physiotherapy for Muscle Strain in Gurgaon | KinetiQ",
  metaDescription:
    "Get advance physiotherapy for muscle strain in Gurgaon at KinetiQ. Receive personalised treatment, guided exercises and rehabilitation to relieve pain and restore mobility.",
  breadcrumb: "Muscle Strain Physiotherapy",
  serviceName: "Physiotherapy for Muscle Strain",
  hero: {
    label: "Golf Course Road & Sector 65",
    title: "Physiotherapy for Muscle Strain in Gurgaon",
    intro:
      "Pulled a muscle and it won't settle? We offer physiotherapy for muscle strain at two Gurgaon clinics, with hands-on care and advanced treatment.",
    image: "/repetitive1.avif",
    imageAlt: "Physiotherapist treating a muscle strain at KinetiQ Physiotherapy, Gurgaon",
  },
  sections: [
    {
      kind: "cards",
      id: "what-is-muscle-strain",
      label: "Quick Answer",
      heading: "What Is a Muscle Strain?",
      cols: 2,
      items: [
        {
          title: "Definition",
          body: "A muscle strain is a stretch or tear in the muscle fibres, usually from sudden load or overuse. It causes pain, swelling and weakness. Physiotherapy for muscle strain speeds up healing and lowers your risk of injuring the same muscle again.",
        },
        {
          title: "Typical Muscle Strain Recovery Time",
          bullets: ["Grade 1: 1 to 3 weeks", "Grade 2: 3 to 8 weeks", "Grade 3: 3 months or more"],
        },
      ],
      note: "Your muscle, your age and how early you start treatment all change these numbers. Starting physiotherapy for muscle strain in the first few days often shortens the recovery time.",
    },
    {
      kind: "cards",
      id: "muscle-strain-grades",
      label: "Grades",
      heading: "Muscle Strain Grades: Mild, Moderate and Severe",
      intro: "Grades describe how much of the muscle has torn. Your physio confirms yours at the first visit.",
      items: [
        { title: "Grade 1", body: "You've overstretched the muscle and torn only a few fibres. You can usually walk, but it feels tight and sore." },
        { title: "Grade 2", body: "The muscle is partly torn. You'll notice swelling, bruising and a clear drop in strength." },
        { title: "Grade 3", body: "The muscle has torn completely. You may feel a pop, lose function and need an urgent review." },
      ],
    },
    {
      kind: "cards",
      id: "symptoms-and-causes",
      label: "Symptoms & Causes",
      heading: "Symptoms and Causes of Muscle Strain",
      intro: "A strain rarely feels subtle. Most people notice one or more of these:",
      items: [
        {
          title: "Symptoms",
          bullets: ["Pain that sharpens when you use the muscle", "Swelling and bruising", "Stiffness or cramping", "Weakness"],
        },
        {
          title: "Common causes",
          bullets: ["Sudden load, like sprinting or lifting", "Skipping your warm-up", "Overuse and fatigue"],
        },
        { title: "Commonly affected muscles", body: "Hamstring, calf, lower back, shoulder and groin." },
      ],
    },
    {
      kind: "steps",
      id: "treatment-plan",
      label: "Treatment Plan",
      heading: "How KinetiQ Physiotherapy Delivers Muscle Strain Treatment",
      intro: "Our physiotherapy for muscle strain follows four steps. We build every plan around your muscle, your grade and your goals.",
      items: [
        { title: "Assessment", body: "We grade your strain and work out why it happened." },
        { title: "Pain and swelling relief", body: "We use practical care and targeted modalities to heal the pain." },
        { title: "Strength and mobility", body: "We load the muscle gradually, so it gets stronger without a setback." },
        {
          title: "Return to activity",
          body: `We clear you for work or sport and build a plan that keeps the strain from coming back. Athletes can also see our [sports physiotherapist](${P.sports}) team for return-to-play rehab.`,
        },
      ],
    },
    {
      kind: "cards",
      id: "treatments",
      label: "Treatments",
      heading: "Pulled Muscle Treatment: Therapies We Use",
      intro: "Not every strain needs every therapy. We choose what fits your grade and your goals, and we tell you why.",
      cols: 4,
      items: [
        { title: "Shockwave Therapy", body: "Relieves tendon and long-standing pain." },
        { title: "Class IV Laser Therapy", body: "Reaches deep tissue to support healing." },
        { title: "Dry Needling", body: "Releases the trigger points that keep a muscle tight." },
        { title: "Cupping Therapy", body: `Eases tension and supports recovery. Read more about [cupping therapy](${P.cupping}).` },
      ],
    },
    {
      kind: "cards",
      id: "when-to-see-a-physio",
      label: "When to See a Physio",
      heading: "When to See a Physiotherapist for Muscle Strain",
      intro: "Mild strains often settle on their own. Book physiotherapy for muscle strain if any of these sound like you.",
      items: [
        { title: "Pain beyond a few days", body: "If it hasn't eased after three to five days, book an assessment." },
        {
          title: "Cannot bear weight or move",
          body: "Get it checked the same day, before any physiotherapy for muscle strain begins. A complete tear needs urgent review.",
        },
        { title: "Repeated strain in the same muscle", body: "Repeat injuries point to a weakness we can find and fix." },
      ],
    },
    {
      kind: "cards",
      id: "prevention",
      label: "Prevention",
      heading: "How to Prevent Muscle Strains",
      intro: "Our physiotherapy for muscle strain includes a prevention routine you can follow at home. Here's what it covers.",
      cols: 4,
      items: [
        { title: "Warm up", body: "Spend five to ten minutes on light movement before you train." },
        { title: "Build strength", body: "A stronger muscle copes better with sudden load." },
        { title: "Manage training load", body: "Raise your intensity bit by bit." },
        { title: "Recover well", body: "Sleep well, drink water and take rest days." },
      ],
    },
    {
      kind: "reviews",
      id: "reviews",
      label: "Reviews",
      heading: "What Patients Say About Muscle Strain Physiotherapy at KinetiQ",
      // TODO: add 3 real Google reviews — section stays hidden while this is empty
      reviews: [],
    },
    {
      kind: "clinics",
      id: "clinics",
      label: "Visit Us",
      heading: "Book Muscle Strain Physiotherapy at Our Gurgaon Clinics",
      intro: "Pick a KinetiQ Physiotherapy clinic that is nearest to your home or office.",
    },
    {
      kind: "faq",
      id: "faq",
      label: "FAQ",
      heading: "Frequently Asked Questions About Muscle Strain Physiotherapy",
      items: [
        {
          q: "How long does a muscle strain take to heal?",
          a: "Mild strains heal in one to three weeks, moderate ones in three to eight weeks, and severe tears can take three months or more. Your muscle, your age and how soon you start physiotherapy for muscle strain all affect the timeline. We give you a realistic estimate after your first assessment.",
        },
        {
          q: "Should I rest or keep moving a strained muscle?",
          a: "Rest it for the first day or two, then add gentle movement. Long rest weakens the muscle and slows healing. Stop anything that sharpens the pain. We show you which movements are safe at each stage and when to build the load.",
        },
        {
          q: "Can physiotherapy help a torn muscle?",
          a: "Physiotherapy helps most partial tears, meaning grade 1 and 2, through guided rehab and treatments like shockwave, laser or dry needling. A complete grade 3 tear needs a surgeon's opinion first. After that, we work alongside your doctor on your rehab.",
        },
        {
          q: "How many sessions will I need?",
          a: "Most grade 1 strains settle within three to six sessions. Grade 2 injuries usually need eight to twelve, spread over several weeks. The count depends on the muscle, the severity and your sport. We set a plan after your assessment and review it as you improve.",
        },
        {
          q: "Do you offer physiotherapy for muscle strain at home?",
          a: "Home visits are available at some of the Gurgaon sectors. Contact us or message us on WhatsApp with your sector and the injured area, and we'll confirm a time. Your therapist will tell you if any treatment needs a clinic visit.",
        },
      ],
    },
  ],
  cta: {
    heading: "Book Your Muscle Strain Physiotherapy Consultation in Gurgaon Today",
    body: "Tell us where it hurts and we'll find you a slot. Our physiotherapy for muscle strain starts with a full assessment, so you leave with a clear plan. [Contact us](/contact/) or message us on WhatsApp.",
  },
}
