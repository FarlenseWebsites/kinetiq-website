"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

// ─── Types ────────────────────────────────────────────────────────────────────

type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string }

interface EventCard {
  id: number
  title: string
  date: string
  media: MediaItem
}

// ─── Data — swap src/type to add images or videos anytime ────────────────────



const upcomingEvents: EventCard[] = [
  {
    id: 4,
    title: "Menopause Wellness Program",
    date: "June 2026",
    media: { type: "image", src: "/insta1.png", alt: "Summer fitness camp" },
  },
  {
    id: 5,
    title: "Master class for Athletes",
    date: "June 2026",
    media: { type: "image", src: "/insta2.png", alt: "Sports recovery workshop" },
  },
  {
    id: 6,
    title: "Summer Fitness Camp",
    date: "June 2026",
    media: { type: "image", src: "/insta3.png", alt: "Community rehab drive" },
  },
]

// ─── Media renderer ──────────────────────────────────────────────────────────

function EventMedia({ media }: { media: MediaItem }) {
  if (media.type === "video") {
    return (
      <video
        src={media.src}
        poster={media.poster}
        controls
        playsInline
        className="absolute inset-0 w-full h-full object-fit"
      />
    )
  }
  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
      className="object-cover object-top"
    />
  )
}

// ─── Single event card ────────────────────────────────────────────────────────

function EventCardItem({ event }: { event: EventCard }) {
  return (
    <div className="shrink-0 w-[80%] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] snap-start">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group bg-white rounded-2xl overflow-hidden shadow-md border-2 border-transparent hover:border-[#FF914D] transition-all duration-300 h-full"
      >
        {/* Media */}
        <div className="relative aspect-square  overflow-hidden bg-[#373355]">
          <EventMedia media={event.media}  />

        </div>

        {/* Card body */}
        <div className="p-4 flex flex-col gap-3">
          <h3 className="text-[#373355] font-bold text-base leading-snug">
            {event.title}
          </h3>

          <div className="h-px bg-[#FF914D]/25" />

          {/* Book Now — WhatsApp */}
          <a
            href={`https://wa.me/919319606763?text=${encodeURIComponent(`Hi! I'd like to book a spot for the "${event.title}" event.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#8681a5] hover:text-[#FF914D] transition-colors duration-200 text-sm font-medium w-fit"
          >
            <FaWhatsapp size={16} />
            <span>Book Now</span>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

function EventCarousel({ events }: { events: EventCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)

  const updateState = useCallback(() => {
    const el = trackRef.current
    if (!el) return

    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)

    const cards = Array.from(el.children) as HTMLElement[]
    const center = el.scrollLeft + el.clientWidth / 2
    let closest = 0
    let minDist = Infinity
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center)
      if (dist < minDist) { minDist = dist; closest = i }
    })
    setActiveIdx(closest)
  }, [])

  useEffect(() => {
    updateState()
    window.addEventListener("resize", updateState)
    return () => window.removeEventListener("resize", updateState)
  }, [updateState])

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const first = el.children[0] as HTMLElement
    el.scrollBy({ left: dir * (first.offsetWidth + 16), behavior: "smooth" })
  }

  const scrollToCard = (idx: number) => {
    const el = trackRef.current
    if (!el) return
    const card = el.children[idx] as HTMLElement
    el.scrollTo({ left: card.offsetLeft, behavior: "smooth" })
  }

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        onScroll={updateState}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
      >
        {events.map((event) => (
          <EventCardItem key={event.id} event={event} />
        ))}
      </div>

      {/* Prev button */}
      {canPrev && (
        <button
          onClick={() => scrollByCard(-1)}
          aria-label="Previous event"
          className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-3 w-9 h-9 bg-[#373355] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF914D] transition-colors duration-200 z-10"
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {/* Next button */}
      {canNext && (
        <button
          onClick={() => scrollByCard(1)}
          aria-label="Next event"
          className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-3 w-9 h-9 bg-[#373355] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF914D] transition-colors duration-200 z-10"
        >
          <ChevronRight size={18} />
        </button>
      )}

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            aria-label={`Go to event ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIdx
                ? "bg-[#FF914D] w-5"
                : "bg-[#8681a5]/40 w-2 hover:bg-[#8681a5]/70"
            }`}
          />
        ))}
      </div>
    </div>
  )
}


// ─── Main section ─────────────────────────────────────────────────────────────

export default function EventsSection() {
  return (
    <section className="bg-[#F4F4F4] pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <div
          className="flex flex-col items-center mb-14"
        >
          <ButtonWithTwoDots label="KinetiQ Community" />
          <h1 className="text-[#373355] font-medium text-[clamp(1.75rem,4vw,3.5rem)] mt-8 leading-tight">
           Upcoming Events
          </h1>
        </div>
        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <EventCarousel events={upcomingEvents} />
        </motion.div>

      </div>
    </section>
  )
}
