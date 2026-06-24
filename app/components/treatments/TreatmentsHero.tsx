"use client"

import Image from "next/image"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

export default function PhysioHero() {
  return (
    <section id="treatments-hero" className="relative overflow-hidden bg-[#FAFAFA] flex flex-col items-center justify-start pt-[8vw] scroll-mt-32">
      
      {/* Button */}
      <div className="relative z-10  flex justify-center pb-[5vw]">
        <ButtonWithTwoDots label="Types of Treatments" />
      </div>

      {/* Main Design Section - Locked to a proportional 21:9 scale */}
      <div className="relative overflow-hidden w-full aspect-[21/9] bg-[#f9c3a2] shadow-sm">

        {/* BASE IMAGE */}
        <div className="absolute left-0 top-0 bottom-0 w-[65%] z-0 h-full overflow-hidden rounded-r-[100vw]">
          <Image
            src="/treatmentimg.png"
            alt="KinetiQ Sessions"
            fill
            className="object-cover object-[25%_center]"
            priority
          />
        </div>

        {/* LEFT FAINT OVERLAY CIRCLE - Fixed with aspect-square */}
        {/* Defining width via % and using aspect-square forces a perfect circle */}
        <div className="absolute top-1/2 left-[-25%] -translate-y-1/2 w-[44%] aspect-square bg-[#ff914d]/50 rounded-full z-30 pointer-events-none" />

        {/* SMALL DECORATIVE ORANGE CIRCLE */}
        <div className="absolute top-[10%] right-[33%] w-[4%] aspect-square rounded-full bg-[#ff914d] z-40 pointer-events-none" />

        {/* RIGHT SOLID ORANGE CIRCLE - Fixed with aspect-square */}
        {/* Tied entirely to container width, guaranteeing it never squishes */}
        <div className="absolute top-1/2 right-0 bg-[#ff914d] -translate-y-1/2 w-[35%] aspect-square rounded-full pointer-events-none z-20 flex flex-col items-center justify-center">
          
          <div className="flex flex-col items-center justify-center text-[#373355] text-center  h-full w-full px-[12%]">
            
            {/* Pure vw for text so it scales identically with the circles */}
            <span className="text-[1.5vw] leading-[1.3] font-medium">
              Recovery shouldn&apos;t be rigid.
              <br />
              At KinetiQ, your treatment moves with you
            </span>
            
            <div className="flex gap-[0.8vw] justify-center mt-[8%]">
              <span className="w-[0.5vw] h-[0.5vw] rounded-full bg-white inline-block" />
              <span className="w-[0.5vw] h-[0.5vw] rounded-full bg-white inline-block" />
              <span className="w-[0.5vw] h-[0.5vw] rounded-full bg-white inline-block" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}