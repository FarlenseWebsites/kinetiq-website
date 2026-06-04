"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const values = [
  {
    number: "01",
    title: "Values",
    description: "Precision, consistency, and patient first care guide everything we do.",
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

// Arc positions within the right column (% of right-column dimensions)
const arcCX = -35
const arcCY = 50
const arcR = 60

function getContentX(y: number): number {
  const dy = y - arcCY
  return arcCX + Math.sqrt(Math.max(0, arcR * arcR - dy * dy))
}

const rowYPositions = [25, 50, 75]

export default function ValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="about-values" className="w-full aspect-21/9 bg-[#f4f4f4]  overflow-hidden relative scroll-mt-32">
      <div className="absolute inset-0 flex mt-12">

        {/* Left column — image */}
        <div className="w-[40%] l relative bg-[#FDE8da]">
          <Image
            src="/valuesimg.png"
            alt="Physiotherapy treatment"
            fill
            className="object-fit object-bottom-left left-[-45%]"
            priority
          />
        </div>

        {/* Right column — content with curved left edge */}
        <div
          className="flex-1 bg-[#FDE8da] relative z-10 overflow-hidden -ml-8"
          style={{ borderTopLeftRadius: "4rem", borderBottomLeftRadius: "4rem" }}
        >
          {values.map((v, i) => {
            const y = rowYPositions[i]
            const x = getContentX(y)
            const isHovered = hoveredIndex === i

            return (
              <div
                key={v.number}
                className="absolute"
                style={{ top: `${y}%`, left: `${x}%` }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={{ x: isHovered ? 10 : 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="absolute pointer-events-auto cursor-default"
                  style={{ transform: "translateY(-50%)", width: "36vw" }}
                >
                  <div className="flex items-baseline" style={{ gap: "1vw" }}>
                    <span
                      className="font-medium leading-none text-[#37315B] tracking-tighter shrink-0"
                      style={{ fontSize: "3.8vw" }}
                    >
                      {v.number}
                    </span>
                    <div className="flex flex-col" style={{ gap: "0.3em" }}>
                      <h3
                        className="font-medium text-[#37315B] tracking-wide leading-tight"
                        style={{ fontSize: "1.4vw" }}
                      >
                        {v.title}
                      </h3>
                      <p
                        className="italic text-[#37315B]/75 leading-relaxed"
                        style={{ fontSize: "0.9vw" }}
                      >
                        {v.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
