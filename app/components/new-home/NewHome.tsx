import Image from "next/image"
import Link from "next/link"
import { Plus_Jakarta_Sans } from "next/font/google"

import { cn } from "../../lib/utils"
import {
  CENTRES,
  CONTACT,
  FAQS,
  HERO,
  MAP_EMBED,
  PROGRAMS,
  REVIEWS,
  SESSIONS,
  SPECIALTIES,
  STATS,
  TREATMENTS,
  WHY,
} from "./content"

// Scoped to this page only (applied on the wrapper), so the rest of the site keeps Inter.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

// Design tokens — the existing KinetiQ site palette (Navbar, Footer, buttons)
const C = {
  teal: "#373355", // dark navy-purple: headings, dark sections
  tealCard: "#46416B", // cards on dark sections
  orange: "#FF914D", // brand orange: buttons, eyebrows on dark
  eyebrow: "#68628E", // brand purple: eyebrows on light sections
  muted: "#F4F4F4", // light grey section background
  body: "#68628E", // body text on light backgrounds
}

// ---------- small building blocks ----------

function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>{children}</div>
}

function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
}: {
  eyebrow: string
  title: string
  sub?: string
  dark?: boolean
}) {
  return (
    <div className="mb-8 md:mb-10">
      <p
        className="mb-2 text-xs font-bold uppercase tracking-[0.12em]"
        style={{ color: dark ? C.orange : C.eyebrow }}
      >
        {eyebrow}
      </p>
      <h2
        className="text-[1.75rem] font-bold leading-tight tracking-[-0.01em] sm:text-3xl lg:text-[2.1rem]"
        style={{ color: dark ? "#FFFFFF" : C.teal }}
      >
        {title}
      </h2>
      {sub && (
        <p className="mt-3 text-base" style={{ color: C.body }}>
          {sub}
        </p>
      )}
    </div>
  )
}

const cardBase = "rounded-2xl border border-[#E6E4EE] bg-white p-5 md:p-6"
const gridFour = "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF914D]"

function InfoCard({ title, text, href }: { title: string; text: string; href?: string }) {
  const inner = (
    <>
      <h3 className="text-[1.05rem] font-bold leading-snug" style={{ color: C.teal }}>
        {title}
      </h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed" style={{ color: C.body }}>
        {text}
      </p>
    </>
  )
  if (!href) return <div className={cardBase}>{inner}</div>
  return (
    <Link href={href} className={cn(cardBase, "block transition-colors hover:border-[#68628E]", focusRing)}>
      {inner}
    </Link>
  )
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-[0.95rem] font-bold text-white transition-colors hover:bg-[#68628E]",
        focusRing
      )}
      style={{ backgroundColor: C.orange }}
    >
      {children}
    </Link>
  )
}

// ---------- sections ----------

function Hero() {
  return (
    <section
      id="nh-hero"
      style={{
        backgroundColor: C.muted,
        // Clears the site's fixed Navbar (same offset the current homepage uses)
        marginTop: "calc(clamp(2.38rem, 6.12vw, 4.08rem) + clamp(1.5rem, 3.6svh, 2.5rem))",
      }}
    >
      <Container className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em]" style={{ color: C.eyebrow }}>
            {HERO.eyebrow}
          </p>
          <h1 className="text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.4rem]">
            {HERO.title.map((part, i) => (
              <span key={i} style={{ color: part.accent ? C.orange : C.eyebrow }}>
                {part.text}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: C.teal }}>
            {HERO.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="/book">Book a Consultation</PrimaryButton>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center rounded-full border-2 border-[#68628E] px-6 py-[10px] text-[0.95rem] font-bold text-[#68628E] transition-colors hover:bg-[#68628E] hover:text-white",
                focusRing
              )}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#ECEAF3]">
          <Image
            src={HERO.image}
            alt={HERO.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  )
}

function StatsBar() {
  return (
    <section aria-label="KinetiQ at a glance" className="border-b border-[#E6E4EE] bg-white">
      <Container>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 py-5 text-sm font-bold sm:text-[0.95rem] lg:flex lg:justify-between">
          {STATS.map((s) => (
            <li key={s} style={{ color: C.teal }}>
              {s}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function WhyKinetiq() {
  return (
    <section id="nh-why" className="py-14 md:py-20" style={{ backgroundColor: C.muted }}>
      <Container>
        <SectionHeading eyebrow="Why KinetiQ" title="Why KinetiQ Is the Best Physiotherapy Clinic in Gurgaon" />
        <div className={gridFour}>
          {WHY.map((c) => (
            <InfoCard key={c.title} {...c} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function Programs() {
  return (
    <section id="nh-programs" className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading eyebrow="Programs" title="Physiotherapy Programs Tailored for Every Patient" />
        <div className={gridFour}>
          {PROGRAMS.map((c) => (
            <InfoCard key={c.title} {...c} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function Specialties() {
  return (
    <section id="nh-specialties" className="py-14 md:py-20" style={{ backgroundColor: C.muted }}>
      <Container>
        <SectionHeading
          eyebrow="Specialties"
          title="Specialised Physiotherapy Services in Gurgaon"
          sub="Condition-focused care, from sports injuries to neuro rehabilitation."
        />
        <div className={gridFour}>
          {SPECIALTIES.map((c) => (
            <InfoCard key={c.title} {...c} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function Treatments() {
  return (
    <section id="nh-treatments" className="py-14 md:py-20" style={{ backgroundColor: C.teal }}>
      <Container>
        <SectionHeading eyebrow="Treatments" title="Advanced Physiotherapy Treatments We Offer" dark />
        <div className={gridFour}>
          {TREATMENTS.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className={cn(
                "block rounded-2xl border border-white/10 p-5 transition-colors hover:border-[#FF914D]/70 md:p-6",
                focusRing
              )}
              style={{ backgroundColor: C.tealCard }}
            >
              <h3 className="text-[1.05rem] font-bold text-white">{t.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-[#DCD9EC]">{t.text}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Sessions() {
  return (
    <section id="nh-sessions" className="py-14 md:py-20" style={{ backgroundColor: C.muted }}>
      <Container>
        <SectionHeading
          eyebrow="Sessions"
          title="Physiotherapy Sessions: In-Centre, Home Visits, Online & Corporate"
        />
        <div className={gridFour}>
          {SESSIONS.map((s) => (
            <Link key={s.title} href={s.href} className={cn("group block rounded-2xl", focusRing)}>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-[#ECEAF3]">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-[1.05rem] font-bold group-hover:underline" style={{ color: C.teal }}>
                {s.title}
              </h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed" style={{ color: C.body }}>
                {s.text}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

function VisitUs() {
  return (
    <section id="nh-visit" className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading eyebrow="Visit Us" title="Our Physiotherapy Clinics in Gurgaon" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CENTRES.map((c) => (
            <div key={c.name} className={cardBase}>
              <h3 className="text-[1.05rem] font-bold" style={{ color: C.teal }}>
                {c.name}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed" style={{ color: C.body }}>
                {c.address}
              </p>
              <p className="mt-3 text-[0.95rem]" style={{ color: C.body }}>
                {c.timings}
              </p>
            </div>
          ))}
          <div className="min-h-[220px] overflow-hidden rounded-2xl border border-[#E6E4EE] bg-[#ECEAF3] md:col-span-2 lg:col-span-1">
            <iframe
              src={MAP_EMBED}
              title="KinetiQ Physiotherapy, Golf Course Road on Google Maps"
              className="h-full min-h-[220px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
        <p className="mt-6 text-[0.95rem] font-bold" style={{ color: C.teal }}>
          <a href={CONTACT.phoneHref} className={cn("hover:underline", focusRing)}>
            {CONTACT.phoneDisplay}
          </a>
          <span aria-hidden="true"> · </span>
          <a href={`mailto:${CONTACT.email}`} className={cn("break-all hover:underline", focusRing)}>
            {CONTACT.email}
          </a>
        </p>
      </Container>
    </section>
  )
}

function Reviews() {
  return (
    <section id="nh-reviews" className="py-14 md:py-20" style={{ backgroundColor: C.muted }}>
      <Container>
        <SectionHeading eyebrow="Reviews" title="What Our Patients Say About Our Physiotherapy in Gurgaon" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure key={i} className={cardBase}>
              <blockquote className="text-[0.95rem] leading-relaxed" style={{ color: C.body }}>
                {r.quote}
              </blockquote>
              <figcaption className="mt-3 font-bold" style={{ color: C.teal }}>
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Faq() {
  return (
    <section id="nh-faq" className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions About Physiotherapy in Gurgaon" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {FAQS.map((f) => (
            <div key={f.q} className={cardBase}>
              <h3 className="text-[1.05rem] font-bold leading-snug" style={{ color: C.teal }}>
                {f.q}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed" style={{ color: C.body }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function BookCta() {
  return (
    <section id="nh-book" className="py-16 text-center md:py-20" style={{ backgroundColor: C.teal }}>
      <Container>
        <h2 className="text-[1.75rem] font-bold leading-tight text-white sm:text-3xl lg:text-[2.1rem]">
          Book Your Physiotherapy Consultation in Gurgaon Today
        </h2>
        <p className="mt-3 text-base text-[#DCD9EC]">We’re ready when you are.</p>
        <div className="mt-7">
          <PrimaryButton href="/book">Book a Consultation</PrimaryButton>
        </div>
      </Container>
    </section>
  )
}

// ---------- page ----------

export default function NewHome() {
  return (
    <div className={cn(jakarta.className, "w-full")} style={{ backgroundColor: C.muted, color: C.teal }}>
      <Hero />
      <StatsBar />
      <WhyKinetiq />
      <Programs />
      <Specialties />
      <Treatments />
      <Sessions />
      <VisitUs />
      <Reviews />
      <Faq />
      <BookCta />
    </div>
  )
}
