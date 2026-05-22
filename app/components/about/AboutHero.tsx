"use client"

import ButtonWithTwoDots from "../ui/buttonWithTwodots"
import Pendulum from "../ui/pendulum" // Adjust import path if needed

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFC] flex flex-col items-center justify-start pt-24 sm:pt-28 md:pt-32 pb-40 md:pb-54 font-sans">

      {/* Bottom Section Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '70%',
            background: `radial-gradient(ellipse 65% 100% at 50% 100%, #FAFAFC 40%, transparent 100%)`,
          }}
        />
      </div>

      {/* Corner Dots */}
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
        <ButtonWithTwoDots label="About" />
      </div>

      {/* Main Quote Block — forced to two lines */}
      <div className="relative z-10 text-center px-10 max-w-[640px] w-full">
        <span className="absolute left-0 top-[-10px] text-[#FF914D] font-serif text-[52px] leading-none select-none">
          &ldquo;
        </span>

        <p className="font-normal italic text-center text-lg sm:text-2xl md:text-[26px] tracking-tight text-[#2D2A43] leading-relaxed whitespace-nowrap">
          Recovery is not just about reducing pain.
        </p>
        <p className="font-normal italic text-center text-lg sm:text-2xl md:text-[26px] tracking-tight text-[#2D2A43] leading-relaxed whitespace-nowrap">
          It&apos;s about restoring how you move, live, and perform.
        </p>

        <span className="absolute right-0 bottom-[-18px] text-[#FF914D] font-serif text-[52px] leading-none select-none">
          &rdquo;
        </span>
      </div>

      {/* Newton's Cradle (With embedded Grid and Glow) */}
      <div className="relative z-10 mt-14 sm:mt-20 md:mt-25 w-full">
        <Pendulum />
      </div>

    </section>
  )
}