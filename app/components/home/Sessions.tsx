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
    <section
      className="py-12 sm:py-16 md:py-20 px-2 sm:px-8"
      style={{ backgroundColor: "#F4F4F4" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col">

        <div className="flex flex-col items-center">
          <ButtonWithTwoDots label="KinetiQ Sessions" />
          <h1
            className="text-[#373355] font-semibold text-center"
            style={{ marginTop: "32px", fontSize: "42px" }}
          >
          Multiple Access Points
          </h1>
        </div>
      

        {/* Explore All — top right */}
        <div className="flex justify-end mb-8">
          <button
            className="px-6 py-2 rounded-lg border border-[#000000] font-semibold text-[#373355] text-sm font-medium bg-[#d2d0dd] hover:bg-slate-100 transition-colors"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}
          >
            Explore All
          </button>
        </div>

        {/* 2 × 2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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