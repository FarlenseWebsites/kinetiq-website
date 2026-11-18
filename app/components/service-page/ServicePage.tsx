import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa6"
import { FiMapPin, FiClock, FiChevronRight } from "react-icons/fi"
import type { CardItem, Section, ServicePageData } from "../../lib/service-pages/types"
import { BOOK_URL, CLINICS, WHATSAPP_URL } from "../../lib/service-pages/clinics"

/* ---------- inline [text](href) links ---------- */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (!m) return <span key={i}>{part}</span>
        return (
          <Link key={i} href={m[2]} className="font-semibold text-[#67618C] underline decoration-[#FF914D] underline-offset-2 hover:text-black">
            {m[1]}
          </Link>
        )
      })}
    </>
  )
}

/* ---------- shared bits ---------- */
const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8"

function SectionHead({ label, heading, intro }: { label: string; heading: string; intro?: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#67618C]">{label}</p>
      <h2 className="mt-2 text-[clamp(1.5rem,3.2vw,2.25rem)] font-semibold leading-tight text-[#67618C]">{heading}</h2>
      {intro && (
        <p className="mt-3 text-base leading-7 text-black/80">
          <RichText text={intro} />
        </p>
      )}
    </div>
  )
}

function Card({ item, tone }: { item: CardItem; tone: "white" | "soft" }) {
  return (
    <div
      className={`h-full rounded-2xl border border-[#EBEBEB] p-5 shadow-sm ${tone === "white" ? "bg-white" : "bg-[#F5EFE4]"}`}
    >
      <h3 className="text-base font-semibold text-[#67618C]">{item.title}</h3>
      {item.body && (
        <p className="mt-2 text-sm leading-6 text-black/80">
          <RichText text={item.body} />
        </p>
      )}
      {item.bullets && (
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-black/80">
          {item.bullets.map((b) => (
            <li key={b}>
              <RichText text={b} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const colClass = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const

/* ---------- sections ---------- */
function RenderSection({ section, index }: { section: Section; index: number }) {
  // alternate backgrounds so sections read as separate blocks
  const soft = index % 2 === 0
  const bg = soft ? "bg-[#F5EFE4]" : "bg-white"
  const cardTone = soft ? "white" : "soft"

  switch (section.kind) {
    case "cards":
      return (
        <section id={section.id} className={`${bg} py-14 sm:py-16 scroll-mt-32`}>
          <div className={wrap}>
            <SectionHead label={section.label} heading={section.heading} intro={section.intro} />
            <div className={`grid grid-cols-1 gap-4 ${colClass[section.cols ?? 3]}`}>
              {section.items.map((item) => (
                <Card key={item.title} item={item} tone={cardTone} />
              ))}
            </div>
            {section.note && (
              <p className="mt-5 text-sm leading-6 text-black/80">
                <RichText text={section.note} />
              </p>
            )}
          </div>
        </section>
      )

    case "steps":
      return (
        <section id={section.id} className={`${bg} py-14 sm:py-16 scroll-mt-32`}>
          <div className={wrap}>
            <SectionHead label={section.label} heading={section.heading} intro={section.intro} />
            <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {section.items.map((item, i) => (
                <li
                  key={item.title}
                  className={`rounded-2xl border border-[#EBEBEB] p-5 shadow-sm ${cardTone === "white" ? "bg-white" : "bg-[#F5EFE4]"}`}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#67618C] text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-[#67618C]">{item.title}</h3>
                  {item.body && (
                    <p className="mt-2 text-sm leading-6 text-black/80">
                      <RichText text={item.body} />
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )

    case "team":
      if (section.members.length === 0) return null // hidden until real names are added
      return (
        <section id={section.id} className={`${bg} py-14 sm:py-16 scroll-mt-32`}>
          <div className={wrap}>
            <SectionHead label={section.label} heading={section.heading} intro={section.intro} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.members.map((m) => (
                <Card key={m.name} item={{ title: m.name, body: m.detail }} tone={cardTone} />
              ))}
            </div>
          </div>
        </section>
      )

    case "reviews":
      if (section.reviews.length === 0) return null // hidden until real reviews are added
      return (
        <section id={section.id} className={`${bg} py-14 sm:py-16 scroll-mt-32`}>
          <div className={wrap}>
            <SectionHead label={section.label} heading={section.heading} intro={section.intro} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.reviews.map((r) => (
                <figure
                  key={r.name}
                  className={`rounded-2xl border border-[#EBEBEB] p-5 shadow-sm ${cardTone === "white" ? "bg-white" : "bg-[#F5EFE4]"}`}
                >
                  <blockquote className="text-sm leading-6 text-[#67618C]">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-3 text-sm font-semibold text-[#67618C]">{r.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )

    case "clinics":
      return (
        <section id={section.id} className={`${bg} py-14 sm:py-16 scroll-mt-32`}>
          <div className={wrap}>
            <SectionHead label={section.label} heading={section.heading} intro={section.intro} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CLINICS.map((c) => (
                <div
                  key={c.name}
                  className={`rounded-2xl border border-[#EBEBEB] p-5 shadow-sm ${cardTone === "white" ? "bg-white" : "bg-[#F5EFE4]"}`}
                >
                  <h3 className="text-base font-semibold text-[#67618C]">{c.name}</h3>
                  <p className="mt-2 flex gap-2 text-sm leading-6 text-black/80">
                    <FiMapPin className="mt-1 shrink-0 text-[#FF914D]" /> {c.address}
                  </p>
                  <p className="mt-1 flex gap-2 text-sm leading-6 text-black/80">
                    <FiClock className="mt-1 shrink-0 text-[#FF914D]" /> {c.timings}
                  </p>
                  <a
                    href={c.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#67618C] hover:text-black"
                  >
                    Get directions <FiChevronRight />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case "faq":
      return (
        <section id={section.id} className={`${bg} py-14 sm:py-16 scroll-mt-32`}>
          <div className={wrap}>
            <SectionHead label={section.label} heading={section.heading} />
            <div className="space-y-3">
              {section.items.map((f, i) => (
                <details
                  key={f.q}
                  open={i === 0}
                  className={`group rounded-2xl border border-[#EBEBEB] p-5 shadow-sm ${cardTone === "white" ? "bg-white" : "bg-[#F5EFE4]"}`}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#67618C]">
                    <h3>{f.q}</h3>
                    <FiChevronRight className="shrink-0 text-[#FF914D] transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-black/80">
                    <RichText text={f.a} />
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )
  }
}

/* ---------- page ---------- */
export default function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <div className="bg-[#F5EFE4]">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white pt-20 sm:pt-24">
        <ol className={`${wrap} flex flex-wrap items-center gap-1 py-3 text-xs text-black/80`}>
          <li><Link href="/" className="hover:text-[#FF914D]">Home</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/physiotherapy/" className="hover:text-[#FF914D]">Services</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="font-medium text-[#67618C]">{data.breadcrumb}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-[#67618C] py-12 sm:py-16">
        <div className={`${wrap} grid grid-cols-1 items-center gap-10 lg:grid-cols-2`}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F5EFE4]">{data.hero.label}</p>
            <h1 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.1] text-white">{data.hero.title}</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/85">
              <RichText text={data.hero.intro} />
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={BOOK_URL}
                className="inline-flex items-center justify-center rounded-full bg-[#FF914D] px-6 py-3 font-semibold text-black shadow-md transition-colors hover:bg-[#F5EFE4]"
              >
                Book a Consultation
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#67618C]"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl">
            <Image src={data.hero.image} alt={data.hero.imageAlt} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {data.sections
        // drop empty team/review blocks first so the background alternation stays correct
        .filter((s) => !(s.kind === "team" && s.members.length === 0) && !(s.kind === "reviews" && s.reviews.length === 0))
        .map((s, i) => (
        <RenderSection key={s.id} section={s} index={i} />
      ))}

      {/* Final CTA */}
      <section className="bg-[#67618C] py-14 sm:py-16">
        <div className={`${wrap} text-center`}>
          <h2 className="mx-auto max-w-3xl text-[clamp(1.5rem,3.5vw,2.4rem)] font-semibold leading-tight text-white">{data.cta.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85">
            <RichText text={data.cta.body} />
          </p>
          {data.cta.bullets && (
            <ul className="mx-auto mt-4 max-w-md space-y-1 text-left text-base text-white/85 sm:text-center">
              {data.cta.bullets.map((b) => (
                <li key={b}>✓ {b}</li>
              ))}
            </ul>
          )}
          {data.cta.footer && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85">
              <RichText text={data.cta.footer} />
            </p>
          )}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href={BOOK_URL}
              className="inline-flex items-center justify-center rounded-full bg-[#FF914D] px-7 py-3 font-semibold text-black shadow-md transition-colors hover:bg-[#F5EFE4]"
            >
              Book a Consultation
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-7 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#67618C]"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
