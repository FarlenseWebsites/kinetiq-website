"use client"

import SpaceCard from "../ui/SpaceCard"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const spaces = [
  {
    number: "01",
    title: "In-Centre Treatment",
    subtitle: "Hands-on physiotherapy at our centers with access to advanced treatments.",
    image: "/spaceimg.png",
  },
  {
    number: "02",
    title: "Home Visits",
    subtitle: "Hands-on physiotherapy at our centers with access to advanced treatments.",
    image: "/spaceimg.png",
  },
  {
    number: "03",
    title: "Online Physiotherapy",
    subtitle: "Consultations and guided rehab programs from anywhere.",
    image: "/spaceimg.png",
  },
  {
    number: "04",
    title: "Corporate",
    subtitle: "On-site and customized physiotherapy solutions for modern workplaces.",
    image: "/spaceimg.png",
  },
]

export default function Spaces() {
  return (
    <section className="bg-[#F4F4F4] py-10 sm:py-16 md:py-20 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36">
      {/* FIX: Added max-w-[1400px] and mx-auto so it stays centered and stops growing on huge monitors */}
      <div className="w-full  mx-auto flex flex-col">

        {/* ── HEADER AREA ── */}
        <div className="flex flex-col items-center text-center">
          <ButtonWithTwoDots label="KinetiQ Sessions" />
          
          <h1 className="text-[#373355] font-semibold text-[clamp(1.75rem,4vw,3.5rem)] mt-8 leading-tight">
            Multiple Access Points
          </h1>
        </div>
      
        {/* ── ACTION BAR ── */}
        <div className="flex justify-end mt-6 mb-6">
          <button
            className="px-6 py-2 rounded-lg border border-gray-300 font-semibold text-[#373355] text-sm bg-transparent hover:bg-black/5 transition-colors shadow-sm"
          >
            Explore All
          </button>
        </div>

        {/* ── 2 × 2 GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {spaces.map((space, index) => (
            <SpaceCard
              key={index}
              number={space.number}
              title={space.title}
              subtitle={space.subtitle}
              image={space.image}
            />
          ))}
        </div>

      </div>
    </section>
  )
}