"use client"

import Image from "next/image"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

export default function PhysioHero() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-start pt-20">

      {/* Button */}
      <ButtonWithTwoDots label="Types of Physiotherapies" />

      {/* Main Design Section - Locked to a proportional 21:9 scale */}
      <div className="bg-[#68628e] mt-[5vw] relative overflow-hidden w-full aspect-[21/9]">

        {/* BACKGROUND SHAPES */}
        {/* Left rectangle - using % instead of fixed pixels */}
        <div className="absolute left-0 top-0 bottom-0 w-[25%] bg-[#373355]" />

        {/* Right dark shape - using % instead of vw so it stays locked inside the banner */}
        <div className="absolute right-0 top-[-10%] bottom-[-10%] w-[67%] bg-[#373355] rounded-l-[100vw]" />

        {/* Small left white circle */}
        <div className="absolute left-[-7%] bottom-[10%] w-[10%] aspect-square rounded-full bg-white z-10" />

        {/* CONTENT GRID - perfectly fills the aspect ratio container */}
        <div className="absolute inset-0 z-30 flex items-center">

          {/* IMAGE SIDE - Exact 50% width */}
          <div className="relative w-1/2 flex justify-start items-center h-full">

            {/* Full Circle Container */}
            <div className="relative left-[3vw] h-full aspect-square rounded-full overflow-hidden flex shadow-lg">
              
              {/* LEFT HALF - White Background with Inner Donut */}
              <div className="relative w-1/2 h-full bg-white flex items-center justify-center">
                {/* Inner donut - sized dynamically with % so it never breaks out of the half-circle */}
                <div
                  className="relative left-[11%] top-[-24%] w-[77%] aspect-square rounded-full z-20 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(146deg, #68628e 0%, #373355 100%)",
                  }}
                >
                  {/* Center cutout of the donut */}
                  <div className="w-[40%] aspect-square rounded-full bg-[#ECECEC]" />
                </div>
              </div>

              {/* RIGHT HALF - Image */}
              <div className="relative w-1/2 h-full">
                <Image
                  src="/physio.png"
                  alt="Physiotherapy"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* TEXT SIDE - Exact 50% width */}
          <div className="relative w-1/2 flex flex-col items-end justify-center text-right pr-[5vw] gap-[1vw]">
            {/* Pure vw for text so it shrinks exactly with the rest of the elements */}
            <h1 className="text-white leading-[0.9] font-medium text-[4.5vw]">
              Physiotherapy
            </h1>
            <h2 className="text-white font-light leading-[0.9] text-[4.5vw]">
              & Services
            </h2>
            <p className="mt-[1vw] text-white/90 italic text-[1.2vw] leading-relaxed max-w-[80%]">
              We don’t just treat pain at KinetiQ.
              <br />
              We redefine how your body moves.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}