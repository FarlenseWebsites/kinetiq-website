"use client"

import { motion } from "framer-motion"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFC] flex flex-col items-center justify-start pt-24 sm:pt-28 md:pt-32 pb-40 md:pb-54 font-sans">

      {/* Background Layers: Grid and Faded Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* Grid — visible only within the glow ellipse area */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(104, 98, 142, 0.032) 1px, transparent 1px), linear-gradient(to bottom, rgba(104, 98, 142, 0.032) 1px, transparent 1px)`,
            backgroundSize: '52px 52px',
            WebkitMaskImage:
              'radial-gradient(ellipse 85% 30% at 50% 65%, black 0%, rgba(0,0,0,0.65) 38%, rgba(0,0,0,0.15) 68%, transparent 88%)',
            maskImage:
              'radial-gradient(ellipse 85% 30% at 50% 65%, black 0%, rgba(0,0,0,0.65) 38%, rgba(0,0,0,0.15) 68%, transparent 88%)',
          }}
        />

        {/* Soft ellipse glow behind the cradle */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: '32%',
            width: '960px',
            height: '560px',
            background: `radial-gradient(ellipse 88% 48% at 50% 50%, rgba(104, 98, 142, 0.40) 0%, rgba(104, 98, 142, 0.20) 52%, transparent 74%)`,
          }}
        />

        {/* Generous bottom fade — smooth hand-off to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-72"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, #FAFAFC 85%)`,
          }}
        />
      </div>

      {/* Corner Dots — positioned at the page edges */}
      {/* Top-Left */}
      <div className="pointer-events-none absolute left-13 top-30 flex flex-col gap-[5px] z-10">
        <div className="flex gap-[5px]">
          <div className="w-[13px] h-[13px] bg-[#68628E] rounded-full" />
          <div className="w-[13px] h-[13px] bg-[#68628E] rounded-full" />
        </div>
        <div className="w-[13px] h-[13px] bg-[#68628E] rounded-full" />
      </div>

      {/* Top-Right */}
      <div className="pointer-events-none absolute right-13 top-30 flex flex-col gap-[5px] items-end z-10">
        <div className="flex gap-[5px]">
          <div className="w-[13px] h-[13px] bg-[#68628E] rounded-full" />
          <div className="w-[13px] h-[13px] bg-[#68628E] rounded-full" />
        </div>
        <div className="w-[13px] h-[13px] bg-[#68628E] rounded-full" />
      </div>

      {/* Bottom-Left */}
      <div className="pointer-events-none absolute left-13 bottom-20 flex flex-col gap-[5px] z-10">
        <div className="w-[13px] h-[13px] bg-[#68628E] rounded-full" />
        <div className="flex gap-[5px]">
          <div className="w-[13px] h-[13px] bg-[#68628E] rounded-full" />
          <div className="w-[13px] h-[13px] bg-[#68628E] rounded-full" />
        </div>
      </div>

      {/* Bottom-Right */}
      <div className="pointer-events-none absolute right-13 bottom-20 flex flex-col gap-[5px] items-end z-10">
        <div className="w-[13px] h-[13px] bg-[#68628E] rounded-full" />
        <div className="flex gap-[5px]">
          <div className="w-[13px] h-[13px] bg-[#68628E] rounded-full" />
          <div className="w-[13px] h-[13px] bg-[#68628E] rounded-full" />
        </div>
      </div>

      {/* Top Badge */}
      <div className="relative z-10 flex justify-center mb-7">
        <ButtonWithTwoDots label="About Us" />
      </div>

      {/* Main Quote Block */}
      <div className="relative z-10 text-center px-10 max-w-[580px]">
        {/* Opening Quote */}
        <span
          className="absolute left-0 top-[-10px] text-[#FF914D] font-serif text-[52px] leading-none select-none"
        >
          &ldquo;
        </span>

        <p className="font-normal italic text-center text-lg sm:text-2xl md:text-[26px] tracking-tight text-[#2D2A43] leading-relaxed">
          Recovery is not just about reducing pain.
        </p>
        <p className="font-normal italic text-center text-lg sm:text-2xl md:text-[26px] tracking-tight text-[#2D2A43] leading-relaxed">
          It&apos;s about restoring how you move, live, and perform.
        </p>

        {/* Closing Quote */}
        <span
          className="absolute right-0 bottom-[-18px] text-[#FF914D] font-serif text-[52px] leading-none select-none"
        >
          &rdquo;
        </span>
      </div>

      {/* Newton's Cradle */}
      <div className="relative z-10 mt-14 sm:mt-20 md:mt-25 flex items-start justify-center gap-0">

        {/* Ball 1 — swings left, easeIn going down (gravity accelerates), easeOut going up */}
        <motion.div
          className="relative w-[60px] sm:w-[70px] md:w-[74px] h-[180px] sm:h-[220px] md:h-[260px] origin-top flex flex-col items-center"
          animate={{ rotate: [35, 0, 0, 0, 35] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            times: [0, 0.25, 0.5, 0.75, 1],
            ease: ["easeIn", "linear", "linear", "easeOut"] as const,
          }}
        >
          <div className="w-[2px] flex-1 bg-white opacity-80" />
          <div className="w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] md:w-[70px] md:h-[70px] bg-white rounded-full shrink-0 -mt-px shadow-md" />
        </motion.div>

        {/* Balls 2-4 — stationary */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative w-[60px] sm:w-[70px] md:w-[74px] h-[180px] sm:h-[220px] md:h-[260px] flex flex-col items-center">
            <div className="w-[2px] flex-1 bg-white opacity-80" />
            <div className="w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] md:w-[70px] md:h-[70px] bg-white rounded-full shrink-0 -mt-px shadow-md" />
          </div>
        ))}

        {/* Ball 5 — swings right */}
        <motion.div
          className="relative w-[60px] sm:w-[70px] md:w-[74px] h-[180px] sm:h-[220px] md:h-[260px] origin-top flex flex-col items-center"
          animate={{ rotate: [0, 0, -35, 0, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            times: [0, 0.25, 0.5, 0.75, 1],
            ease: ["linear", "easeOut", "easeIn", "linear"] as const,
          }}
        >
          <div className="w-[2px] flex-1 bg-white opacity-80" />
          <div className="w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] md:w-[70px] md:h-[70px] bg-white rounded-full shrink-0 -mt-px shadow-md" />
        </motion.div>

      </div>

    </section>
  )
}
