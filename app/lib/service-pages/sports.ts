import type { ServicePageData } from "./types"
import { SERVICE_PATHS as P } from "./paths"

export const sportsPage: ServicePageData = {
  path: P.sports,
  metaTitle: "Best Sports Physiotherapist in Gurgaon | KinetiQ",
  metaDescription:
    "Sports physiotherapist in Gurgaon at KinetiQ offers expert injury rehabilitation, strength training and personalised recovery plans to help you return to sport.",
  breadcrumb: "Sports Physiotherapist",
  serviceName: "Sports Physiotherapy",
  hero: {
    label: "Golf Course Road & Sector 65",
    title: "Best Sports Physiotherapist in Gurgaon",
    intro:
      "A sprained ankle, a sore hamstring, a shoulder that won't let you throw. Whatever pulled you out of your sport, we at KinetiQ Physiotherapy will help you move well again and get back to playing.",
    image: "/sports.avif",
    imageAlt: "Sports physiotherapist working with an athlete at KinetiQ Physiotherapy, Gurgaon",
  },
  sections: [
    // TODO: "Why Athletes Trust KinetiQ Physiotherapy" (numbers) section.
    // Add it once the real Google rating, patients treated and number of sports physios are confirmed:
    // {
    //   kind: "cards", id: "trust", label: "Trust", cols: 4,
    //   heading: "Why Athletes Trust KinetiQ Physiotherapy",
    //   intro: "If you're looking for the best sports physiotherapist in Gurgaon, these numbers show what you'd be walking into.",
    //   items: [
    //     { title: "4.9", body: "Google rating" },
    //     { title: "5000+", body: "Patients treated" },
    //     { title: "10", body: "Sports physiotherapists" },
    //     { title: "2", body: "Centres in Gurgaon" },
    //   ],
    // },
    {
      kind: "cards",
      id: "why-kinetiq",
      label: "Why KinetiQ",
      heading: "Why Athletes Choose the Best Sports Physiotherapist in Gurgaon",
      intro: "Choosing the best sports physiotherapist in Gurgaon comes down to a few things. Here's what you get with us.",
      cols: 4,
      items: [
        {
          title: "Sports-focused clinicians",
          body: "Our physios treat athletes all week. They know how a sprint, a serve or a swing loads your body, so your plan fits your sport and your calendar.",
        },
        { title: "Advanced technology", body: "We use Shockwave, Class IV laser and EMG to find out what's wrong and speed up healing." },
        {
          title: "Return-to-play focus",
          body: "Feeling better isn't the finish line. We keep working with you until you can train and compete without holding back.",
        },
        { title: "Two convenient centres", body: "Pick DLF Phase 1 or Sector 65, whichever is easier for you to reach." },
      ],
    },
    {
      kind: "cards",
      id: "injuries",
      label: "Injuries",
      heading: "Sports Injury Treatment in Gurgaon: Injuries We Treat",
      intro: "If your sport hurt you, we've probably treated it before. Our sports injury physiotherapy in Gurgaon covers these common problems.",
      items: [
        { title: "ACL and ligament injuries", body: "We plan your rehab before surgery if you need it, and stay with you through every stage after." },
        { title: "Ankle sprains", body: "We bring the swelling down, rebuild your balance and make sure your ankle stops rolling." },
        {
          title: "Hamstring strains",
          body: `A pulled hamstring can drag on for weeks if you rush it. Read more about our [muscle strain physiotherapy](${P.muscleStrain}) and how we treat it.`,
        },
        { title: "Runner's knee", body: "We find out why your knee hurts, which is often your hips, feet or running form, and fix that." },
        { title: "Tennis and golfer's elbow", body: "We settle the pain and rebuild your grip so you can swing again." },
        { title: "Shoulder injuries", body: "Throwing, swimming or lifting overhead? We help you get your full movement and power back." },
      ],
    },
    {
      kind: "steps",
      id: "return-to-play",
      label: "Return to Play",
      heading: "Our Return-to-Play Programme",
      intro: "A good plan starts at your first session and ends when you're back on the pitch. Ours has four stages.",
      items: [
        { title: "Injury management", body: "First, we calm things down. We manage your pain and swelling and tell you what you can still do." },
        {
          title: "Rehabilitation",
          body: `Next, hands-on treatment and strengthening exercises rebuild your strength and movement. When it helps, we add recovery tools like [cupping therapy](${P.cupping}).`,
        },
        { title: "Sport-specific training", body: "Then we practise the moves your sport asks for: sprinting, cutting, swinging, landing." },
        { title: "Performance and prevention", body: "Finally, we find the weak spots behind your injury and fix them, so it doesn't come back." },
      ],
    },
    {
      kind: "cards",
      id: "who-we-work-with",
      label: "Who We Work With",
      heading: "Sports Physiotherapy in Gurgaon for Every Athlete",
      intro: "You don't have to be a pro to need the best sports physiotherapist in Gurgaon. We work with anyone who plays.",
      cols: 4,
      items: [
        { title: "Professional athletes", body: "Quick, precise rehab that protects your season and your career." },
        { title: "Gym-goers and runners", body: "We help you get past the nagging pain and plateaus that hold your training back." },
        { title: "Schools and academies", body: "Safe recovery and smart injury prevention for young players." },
        { title: "Corporate sports teams", body: "Support for your weekend league or company tournament." },
      ],
    },
    {
      kind: "cards",
      id: "technology",
      label: "Technology",
      heading: "Sports Physiotherapy Technology at KinetiQ",
      intro: "Here are the tools we use for sports injury treatment in Gurgaon, and what each one does for you.",
      cols: 4,
      items: [
        { title: "Shockwave Therapy", body: "Sound waves target stubborn tendon pain and long-running aches and help the area heal." },
        { title: "Class IV Laser Therapy", body: "Deep-reaching light that eases pain and swelling and helps damaged tissue repair." },
        { title: "EMG Biofeedback", body: "Sensors show how your muscles are firing, so we can retrain the weak ones." },
        { title: "Dry Needling", body: "Thin needles release tight spots in your muscles and ease the ache." },
      ],
    },
    {
      kind: "team",
      id: "our-team",
      label: "Our Team",
      heading: "Meet Our Sports Physiotherapists",
      intro: "Before you book the best sports physiotherapist in Gurgaon, you should know who you'll meet. Here's our team.",
      // TODO: add real names, e.g. { name: "Dr. ___ (PT)", detail: "MPT Sports · 8 years" } — hidden while empty
      members: [],
    },
    {
      kind: "reviews",
      id: "reviews",
      label: "Reviews",
      heading: "What Athletes Say About Our Sports Physiotherapy",
      // TODO: add 3 real Google reviews — hidden while empty
      reviews: [],
    },
    {
      kind: "clinics",
      id: "clinics",
      label: "Visit Us",
      heading: "Sports Physiotherapy Near Me? Visit Our Clinics in Gurgaon",
      intro: "Our two centres put the best sports physiotherapist in Gurgaon close to where you live or work.",
    },
    {
      kind: "faq",
      id: "faq",
      label: "FAQs",
      heading: "Frequently Asked Questions About Sports Physiotherapy in Gurgaon",
      items: [
        {
          q: "When should I see a sports physiotherapist?",
          a: "See a sports physiotherapist if pain hasn't eased after a few days, if the area is swollen or bruised, or if you can't put weight on it or move it properly. Book in too if the same injury keeps coming back. The sooner we assess it, the sooner you recover.",
        },
        {
          q: "How long is recovery from a sports injury?",
          a: "It depends on the injury. Mild sprains and strains usually settle in two to six weeks. Moderate tears can take six to twelve weeks. Ligament injuries such as an ACL tear take several months. After your first assessment, we'll give you a realistic timeline for your own injury.",
        },
        {
          q: "Do you work with athletes and academies?",
          a: "Yes. We treat professional athletes, gym-goers, runners, school and academy players and corporate sports teams. We can plan rehab for one player or support a whole squad. At KinetiQ Physiotherapy, we focus on getting players back safely and keeping them injury-free. Contact us to talk about your team.",
        },
        {
          q: "Can you help me return to sport after surgery?",
          a: "Yes. We guide you through each stage after surgery, from your first gentle movements to strength work and sport-specific drills. We follow your surgeon's protocol. Before we clear you to play, we test your strength, balance and movement, which lowers your chance of getting hurt again.",
        },
        {
          q: "Who is the best sports physiotherapist in Gurgaon?",
          a: "The best sports physiotherapist in Gurgaon is one with sports-specific training who uses proven treatments and plans for your return to play, not just pain relief. KinetiQ Physiotherapy offers that at two centres, DLF Phase 1 and Sector 65, with Shockwave, Class IV laser and EMG.",
        },
      ],
    },
  ],
  cta: {
    heading: "Book Your Sports Physiotherapy Consultation in Gurgaon Today",
    body: "Ready to work with the best sports physiotherapist in Gurgaon? Book a consultation and here's what happens:",
    bullets: [
      "We find out exactly what's wrong",
      "We build a plan around your sport and your calendar",
      "You leave with a clear timeline for getting back to play",
    ],
    footer: "Got a question first? [Contact us](/contact/) or send us a WhatsApp message.",
  },
}
