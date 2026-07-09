"use client"

import Image from "next/image"

const values = [
  {
    number: "01",
    title: "Values",
    description:
      "Precision, consistency, and patient first care guide everything we do.",
  },
  {
    number: "02",
    title: "Philosophy",
    description:
      "We believe in treating the root cause, not just the symptom, combining clinical science with a movement first approach.",
  },
  {
    number: "03",
    title: "Commitment",
    description:
      "We are committed to delivering measurable outcomes, not just temporary relief.",
  },
]

// Translated to full Tailwind classes so they compile correctly on desktop
const desktopTopPositions = ["md:top-[20%]", "md:top-[50%]", "md:top-[80%]"]

export default function ValuesSection() {
  return (
    <section
      id="about-values"
      // Added md:aspect-[21/9] so it only restricts aspect ratio on desktop
      className="w-full bg-[#f4f4f4] relative pt-10 overflow-hidden"
    >
      {/* Main layout container: 
        Mobile: Stacked column (flex-col) 
        Desktop: Side-by-side (md:flex-row) 
      */}
      <div className="flex flex-col md:flex-row w-full min-h-screen md:min-h-0 md:aspect-[21/9]">
        
        {/* Right Content (Text) */}
        {/* order-1 puts this ON TOP for mobile. md:order-2 moves it to the RIGHT for desktop */}
        <div className="order-1 md:order-2 flex-1 bg-[#F4f4f4] relative py-16 px-6 sm:px-12 md:p-0">
          
          {/* Mobile: Standard flex flow with gaps. Desktop: Block layout for absolute positioning */}
          <div className="flex flex-col gap-12 md:block w-full h-full">
            {values.map((v, i) => (
              <div
                key={v.number}
                // Mobile: Relative natural flow. Desktop: Absolute positioning matching your original design
                className={`relative md:absolute md:left-[12%] ${desktopTopPositions[i]} w-full md:w-[40vw]`}
              >
                {/* Hover logic handled natively by Tailwind CSS (hover:scale-105) 
                  md:-translate-y-1/2 keeps your items perfectly vertically centered on desktop
                */}
                <div className="cursor-default origin-left transition-transform duration-300 ease-out hover:scale-[1.02] md:hover:scale-105 md:-translate-y-1/2">
                  
                  <div className="flex items-start gap-5 md:gap-[2vw]">
                    {/* Number */}
                    {/* text-5xl on mobile, scales to 3.8vw on desktop */}
                    <span className="font-medium leading-none text-[#37315B] shrink-0 text-5xl md:text-[3.8vw]">
                      {v.number}
                    </span>

                    {/* Text Container */}
                    <div className="flex flex-col gap-3 md:gap-[0.8vw]">
                      <h3 className="font-medium text-[#37315B] leading-tight text-2xl md:text-[1.6vw]">
                        {v.title}
                      </h3>

                      <p className="text-[#37315B]/75 leading-relaxed text-base sm:text-lg md:text-[1.15vw]">
                        {v.description}
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Image */}
        {/* order-2 puts this ON BOTTOM for mobile. md:order-1 moves it to the LEFT for desktop */}
        <div className="order-2 md:order-1 w-full md:w-[50%] h-[50vh] md:h-auto relative bg-[#FCF6EF]">
          <Image
            src="/values.avif"
            alt="Physiotherapy treatment"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  )
}