"use client"

import ButtonWithTwoDots from "../ui/buttonWithTwodots"
import Pendulum from "../ui/pendulum" // Adjust import path if needed

export default function AboutHero() {
  return (
    <section id="about-hero" className="relative overflow-hidden bg-[#FAFAFC] flex flex-col items-center justify-start pt-24 sm:pt-28 md:pt-32 pb-40 md:pb-54 scroll-mt-32">

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
      <div className="pointer-events-none absolute left-4 sm:left-8 md:left-13 top-28 sm:top-30 flex flex-col gap-[5px] z-10">
        <div className="flex gap-[5px]">
          <div className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] bg-[#68628E] rounded-full" />
          <div className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] bg-[#68628E] rounded-full" />
        </div>
        <div className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] bg-[#68628E] rounded-full" />
      </div>

      {/* Top-Right */}
      <div className="pointer-events-none absolute right-4 sm:right-8 md:right-13 top-28 sm:top-30 flex flex-col gap-[5px] items-end z-10">
        <div className="flex gap-[5px]">
          <div className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] bg-[#68628E] rounded-full" />
          <div className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] bg-[#68628E] rounded-full" />
        </div>
        <div className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] bg-[#68628E] rounded-full" />
      </div>

      {/* Bottom-Left */}
      <div className="pointer-events-none absolute left-4 sm:left-8 md:left-13 bottom-12 sm:bottom-16 md:bottom-20 flex flex-col gap-[5px] z-10">
        <div className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] bg-[#68628E] rounded-full" />
        <div className="flex gap-[5px]">
          <div className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] bg-[#68628E] rounded-full" />
          <div className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] bg-[#68628E] rounded-full" />
        </div>
      </div>

      {/* Bottom-Right */}
      <div className="pointer-events-none absolute right-4 sm:right-8 md:right-13 bottom-12 sm:bottom-16 md:bottom-20 flex flex-col gap-[5px] items-end z-10">
        <div className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] bg-[#68628E] rounded-full" />
        <div className="flex gap-[5px]">
          <div className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] bg-[#68628E] rounded-full" />
          <div className="w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] bg-[#68628E] rounded-full" />
        </div>
      </div>

      {/* Top Badge */}
      <div className="relative z-10 flex justify-center mb-7">
        <ButtonWithTwoDots label="About" />
      </div>

      {/* Main Quote Block — forced to two lines */}
    <div className="relative z-10 text-center px-6 sm:px-10 w-[90vw] max-w-[640px] mx-auto">
  <p className="font-normal text-center text-base sm:text-xl md:text-[26px] tracking-tight text-[#2D2A43] leading-relaxed md:whitespace-nowrap">
    {/* Left Quote - Standard alignment */}
    <span className="inline-block text-[#FF914D] font-serif text-[36px] sm:text-[52px] leading-none select-none align-middle mr-1 sm:mr-2 -translate-y-1 sm:-translate-y-2">
      &ldquo;
    </span>
    Recovery is not just about reducing pain.
  </p>
  
  <p className="font-normal text-center text-base sm:text-xl md:text-[26px] tracking-tight text-[#2D2A43] leading-relaxed md:whitespace-nowrap mt-1 md:mt-0">
    It&apos;s about restoring how you move, live, and perform.
    {/* Right Quote - Flipped vertically, with stronger upward translate to offset the empty font space */}
    <span className="inline-block text-[#FF914D] font-serif text-[36px] sm:text-[52px] leading-none select-none -scale-y-100 align-middle ml-1 sm:ml-2 -translate-y-4 sm:-translate-y-6 md:-translate-y-7">
      &rdquo;
    </span>
  </p>
</div>
      {/* Newton's Cradle (With embedded Grid and Glow) */}
      <div className="relative z-10 mt-14 sm:mt-20 md:mt-25 w-full">
        <Pendulum />
      </div>

    </section>
  )
}