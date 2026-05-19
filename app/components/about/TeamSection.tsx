"use client"

import { useState } from "react"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const team = [
  {
    name: "Akshay Arora",
    role: "Co-Founder",
    bullets: [
      "UK Trained Physiotherapist",
      "15+ Years International Experience",
      "Specialization in Rehab, Posture, Performance",
    ],
    initials: "AA",
    bg: "#F59D75", // Soft Orange matched to image
    image: "/akshay.png",
  },
  {
    name: "Ritwik Bahuguna",
    role: "Co-Founder",
    bullets: [
      "Co Founder and Strategic Investor",
      "Scaling operations, partnerships and long term vision at KinetiQ.",
    ],
    initials: "RB",
    bg: "#8983A6", // Soft Slate Purple matched to image
    image: "/ritwik.png",
  },
]

export default function TeamSection() {
  const [imageFailed, setImageFailed] = useState<Record<string, boolean>>({})

  return (
    <section className="bg-[#f4f4f4] py-16 px-5 font-sans">
      {/* Label */}
      <div className="flex items-center justify-center mb-16">
        <ButtonWithTwoDots label="Founders" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl mx-auto items-center justify-center gap-8 sm:gap-0">
        {team.map((member) => (
          <div
            key={member.name}
            className="relative overflow-hidden w-full bg-[#f4f4f4] aspect-[3/4]"
          >
            {/* =========================================
                BACKGROUND GEOMETRY LAYERS
                ========================================= */}
            
            {/* 1. Base Lower Background (Fills lower 75%, covers bottom corners) */}
            <div
              className="absolute bottom-0 left-0 w-full h-[75%] z-0"
              style={{ backgroundColor: member.bg }}
            />

            {/* 2. Top Left Pillar 
                (Width is 52% to safely overlap the exact center and prevent hairline gaps) */}
            <div
              className="absolute top-0 left-0 h-[50%] w-[52%] z-0"
              style={{ backgroundColor: member.bg }}
            />

            {/* 3. The Connector Halo 
                (Anchored exactly to top-0 so it flawlessly merges with the Pillar) */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[58%] aspect-square rounded-full z-10"
              style={{ backgroundColor: member.bg }}
            />


            {/* =========================================
                FOREGROUND ELEMENTS
                ========================================= */}

            {/* 4. Large Cream Bubble — text lives inside so it's always relative to the bubble */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[99%] aspect-square rounded-full bg-[#F5EFE4] z-20">
              {/* Text anchored to the lower 70% of the bubble, centered vertically within that zone */}
              <div className="absolute bottom-0 left-0 right-0 h-[99%] flex flex-col items-center justify-center px-6">
                <h3 className="text-[#373355] font-serif font-medium tracking-wide mb-1.5 text-[1.25rem] sm:text-[1.5rem] md:text-[1.6rem] text-center">
                  {member.name}
                </h3>

                <div className="flex items-center justify-center gap-2 text-[#373355]/70 text-[12px] sm:text-[13px] md:text-[14px] font-medium mb-3 sm:mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]" />
                  {member.role}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]" />
                </div>

                <ul className="space-y-2 w-full max-w-60 sm:max-w-70 mx-auto">
                  {member.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-[#48446B]/90 text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-relaxed text-center"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 5. Profile Photo (Centered perfectly inside the Halo) */}
            <div
              className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[48%] aspect-square rounded-full bg-white border-[5px] sm:border-[6px] border-white overflow-hidden flex items-center justify-center text-[#373355] font-bold shadow-sm z-30"
            >
              {!imageFailed[member.name] ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  onError={() => setImageFailed((s) => ({ ...s, [member.name]: true }))}
                />
              ) : (
                <span className="leading-none text-2xl sm:text-3xl">{member.initials}</span>
              )}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}