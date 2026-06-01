"use client"

import Image from "next/image"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA]">
      {/* Navbar clearance + button (kept exactly as requested) */}
      <div className="pt-20 sm:pt-24 md:pt-28 pb-8 relative z-10 flex justify-center">
        <ButtonWithTwoDots label="Types of Treatments" />
      </div>

      <div className="relative overflow-hidden w-full aspect-square sm:aspect-video md:aspect-21/9 bg-[#f9c3a2] mt-2 shadow-sm">

        {/* BASE IMAGE */}
        <div className="absolute left-0 w-[55%] sm:w-[60%] md:w-[65%] z-0 h-full overflow-hidden rounded-r-[100vw]">
          <Image
            src="/contact.png"
            alt="KinetiQ Sessions"
            fill
            className="object-cover object-left md:object-[25%_center]"
            priority
          />
        </div>

        {/* LEFT FAINT OVERLAY CIRCLE */}
        <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 h-full w-[70%] bg-[#ffb2a2]/30 rounded-full -translate-x-1/2 z-30 pointer-events-none" />

        {/* SMALL DECORATIVE ORANGE CIRCLE — sits in the right gap, hidden on mobile */}
        <div className="absolute hidden sm:block top-[6%] right-[36%] sm:right-[36%] md:right-[33%] w-[4%] aspect-square rounded-full bg-[#ff914d] z-40 pointer-events-none" />

        {/* RIGHT SOLID ORANGE CIRCLE — width kept within right gap so it never overlaps image */}
        <div className="absolute top-1/2 right-0 bg-[#ff914d] -translate-y-1/2 aspect-square w-[44%] sm:w-[39%] md:w-[34%] rounded-full pointer-events-none z-20">
          <div className="flex flex-col items-center justify-center text-[#373355] text-center italic h-full w-full p-[10%]">
            <span className="text-[clamp(0.55rem,2.5vw,0.95rem)] leading-snug">
              Recovery shouldn&apos;t be rigid.
              <br />
              At KinetiQ, your treatment moves with you
            </span>
            <div className="flex gap-[5%] justify-center mt-[5%]">
              <span className="w-[clamp(0.25rem,1vw,0.45rem)] h-[clamp(0.25rem,1vw,0.45rem)] rounded-full bg-white inline-block" />
              <span className="w-[clamp(0.25rem,1vw,0.45rem)] h-[clamp(0.25rem,1vw,0.45rem)] rounded-full bg-white inline-block" />
              <span className="w-[clamp(0.25rem,1vw,0.45rem)] h-[clamp(0.25rem,1vw,0.45rem)] rounded-full bg-white inline-block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}