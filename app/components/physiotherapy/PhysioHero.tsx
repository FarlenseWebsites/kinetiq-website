"use client"

import Image from "next/image"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

export default function PhysioHero() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-start pt-20 md:pt-30">

      {/* Button */}
      <ButtonWithTwoDots label="Types of Physiotherapies" />

      {/* Main Design Section */}
      <div className="bg-[#68628e] mt-20 relative overflow-hidden w-full">

        <div className="relative overflow-hidden">

          {/* left rectangle */}
          <div className="absolute left-0 top-0 bottom-0 w-[25%] bg-[#373355]" />

          {/* RIGHT DARK SHAPE */}
          <div className="absolute right-0 top-[-10%] bottom-[-10%] w-[67vw] bg-[#373355] rounded-l-[300%]" />

          {/* SMALL LEFT WHITE CIRCLE */}
          <div className="absolute left-[-7%] bottom-[8%] w-[10%] aspect-square rounded-full bg-white z-10" />

          {/* CONTENT */}
          <div className="relative z-30 grid grid-cols-[1fr_1fr] items-center">

            {/* IMAGE SIDE */}
            <div className="relative flex justify-start items-center h-[clamp(150px,45vw,480px)]">

              {/* HALF IMAGE + HALF WHITE CIRCLE */}
              <div className="relative left-[3vw] h-full aspect-square rounded-full overflow-hidden flex">
                {/* LEFT HALF WHITE */}
                <div className="w-1/2 h-full bg-white">
                  {/* Inner donut */}
                  <div
                    className="absolute left-[12%] top-[6%] w-[38%] aspect-square rounded-full z-20 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(146deg, #68628e 0%, #373355 100%)",
                    }}
                  >
                    <div className="w-[36%] aspect-square rounded-full bg-[#ECECEC]" />
                  </div>
                </div>
                {/* RIGHT HALF IMAGE */}
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

            {/* TEXT SIDE */}
            <div className="relative z-40 flex flex-col items-end justify-center text-right w-full pr-[5vw] pt-[7vw]">

              <h1 className="text-white leading-[0.9] font-medium text-[clamp(0.85rem,5.8vw,4.75rem)]">
                Physiotherapy
              </h1>

              <h2 className="text-white font-light leading-[0.9] text-[clamp(0.85rem,5.8vw,4.75rem)]">
                & Services
              </h2>

              <p className="mt-[2vw] text-white/90 italic text-[clamp(0.6rem,2.2vw,1rem)] leading-relaxed">
                We don’t just treat pain at KinetiQ.
                <br />
                We redefine how your body moves.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}