"use client"

import Image from "next/image"
import { useState } from "react"

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

// Vertical positions with more spacing
const rowYPositions = [20, 50, 80]

export default function ValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="about-values"
      className="w-full aspect-21/9 bg-[#f4f4f4] overflow-hidden relative scroll-mt-32"
    >
      <div className="absolute inset-0 flex mt-12">
        {/* Left Image */}
        <div className="w-[50%] relative bg-[#FCF6EF]">
          <Image
            src="/values.jpg"
            alt="Physiotherapy treatment"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-[#F4f4f4] relative overflow-hidden ">
          {values.map((v, i) => {
            const isHovered = hoveredIndex === i

            return (
              <div
                key={v.number}
                className="absolute"
                style={{
                  top: `${rowYPositions[i]}%`,
                  left: "12%", // Same position for all items
                }}
              >
                <div
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="cursor-default"
                  style={{
                    transform: `translateY(-50%) scale(${
                      isHovered ? 1.05 : 1
                    })`,
                    transformOrigin: "left center",
                    transition: "transform 0.35s ease",
                    width: "40vw", // Wider text area
                  }}
                >
                  <div
                    className="flex items-start"
                    style={{
                      gap: "2vw",
                    }}
                  >
                    {/* Number */}
                    <span
                      className="font-medium leading-none text-[#37315B] shrink-0"
                      style={{
                        fontSize: "3.8vw",
                      }}
                    >
                      {v.number}
                    </span>

                    {/* Text */}
                    <div className="flex flex-col gap-[0.8vw]">
                      <h3
                        className="font-medium text-[#37315B] leading-tight"
                        style={{
                          fontSize: "1.6vw",
                        }}
                      >
                        {v.title}
                      </h3>

                      <p
                        className="text-[#37315B]/75"
                        style={{
                          fontSize: "1.15vw",
                          lineHeight: 1.7,
                        }}
                      >
                        {v.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}