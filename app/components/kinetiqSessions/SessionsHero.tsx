"use client"

import Image from "next/image"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

export default function SessionsHero() {
  return (
    <section id="sessions-hero" className="relative overflow-hidden flex flex-col items-center justify-start pt-[8vw] scroll-mt-32">

      {/* Top button */}
      <ButtonWithTwoDots label="KinetiQ Sessions" />

      {/* Main banner - aspect-[21/9] locks the height to scale perfectly with width */}
      <div className="bg-[#ffc7a4] mt-[5vw] relative overflow-hidden w-full aspect-21/9">
        
        {/* Right U rounded shape - Uses pure percentages to lock its position */}
        <div className="absolute right-0 top-[-10%] bottom-[-10%] w-[69.5%] bg-[#ff914d] rounded-l-[100vw]" />

        {/* Small orange circles */}
        <div className="absolute left-[-13%] top-[0%] w-[22%] aspect-square rounded-full bg-[#ff914d] z-20" />
        <div className="absolute left-[-13%] bottom-[0%] w-[22%] aspect-square rounded-full bg-[#ff914d] z-20" />

        {/* Content wrapper - absolutely positioned to perfectly fill the aspect-ratio container */}
        <div className="absolute inset-0 z-30 flex items-center">

          {/* Image side - Exact 50% width */}
          <div className="relative w-1/2 flex justify-start items-center h-full ">
            
            {/* METHOD 1 IMPLEMENTATION: 
                - aspect-[1/2] ensures width is exactly half of the height
                - rounded-r-[100vw] perfectly rounds the right side
            */}
            <div className="relative left-[9vw] h-full aspect-[1/2] rounded-r-[100vw] overflow-hidden shadow-lg bg-[#ffc7a4]/50">
              <Image
                src="/servicesrightside.png"
                alt="KinetiQ Sessions"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Text side - Exact 50% width */}
          <div className="relative z-40 w-1/2 flex flex-col items-end justify-center text-right pr-[5vw] gap-[1.5vw]">
            {/* Using pure `vw` for font sizes guarantees the text scales perfectly with the layout */}
            <h1 className="text-white leading-[0.9] font-medium text-[5.5vw]">
              KinetiQ
            </h1>
            <h2 className="text-white font-light leading-[0.9] text-[5.5vw]">
              Sessions
            </h2>
           
          </div>

        </div>
      </div>
    </section>
  )
}