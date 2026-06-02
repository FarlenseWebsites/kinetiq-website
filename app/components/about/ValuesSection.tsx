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

// Near-vertical arc — x stays ~44-45% across full height
const cxOrange = -255
const cyOrange = 50
const rOrange = 300

function getOrangeX(y: number) {
  const dy = y - cyOrange
  return cxOrange + Math.sqrt(Math.max(0, rOrange * rOrange - dy * dy))
}

// y positions matching the design: 27 / 48 / 68
const rowYPositions = [27, 48, 68]

const lineStartY = 82
const lineEndY = 16
const orangeArcPath = `M ${getOrangeX(lineStartY)} ${lineStartY} A ${rOrange} ${rOrange} 0 0 0 ${getOrangeX(lineEndY)} ${lineEndY}`

// Purple dots: curve from near-arc (upper-centre-left) toward upper-left corner
const purpleDotCount = 11
const purpleDots = Array.from({ length: purpleDotCount }, (_, i) => {
  const t = i / (purpleDotCount - 1)
  return {
    x: 32 - t * 29 + Math.sin(t * Math.PI) * 2.5,
    y: 30 - t * 26,
  }
})

export default function ValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#F4F4F4] relative w-full overflow-hidden">

      {/* ── DESKTOP ─────────────────────────────────────────────────── */}
      <div className="relative mt-15 bg-[#FDEadf] hidden md:block w-full h-187.5 lg:h-212.5 max-w-400 mx-auto">

        {/* Background circles */}
        <div className="absolute top-0 left-0 w-[50%] h-full z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-20%] w-[110%] pb-[110%] rounded-full bg-[#F9CDB2] opacity-50" />
          <div className="absolute top-[25%] left-[5%] w-[60%] pb-[60%] rounded-full bg-[#F5A973] opacity-80" />
          <div className="absolute top-[35%] left-[-10%] w-[45%] pb-[45%] rounded-full bg-[#F5A973] opacity-60" />
        </div>

        {/* Photo — anchored bottom-left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-0 w-[45%] lg:w-[43%] h-[92%] z-10 pointer-events-none"
        >
          <Image
            src="/valuesimg.png"
            alt="Physiotherapy treatment"
            fill
            className="object-contain object-bottom-left"
            priority
          />
          {/* fade hard bottom edge into background */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-[#FDEadf] to-transparent" />
        </motion.div>

        {/* SVG — arc + purple dots */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        >
          <defs>
            <linearGradient id="arc-fade" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%"  stopColor="#F58F48" stopOpacity="0" />
              <stop offset="18%" stopColor="#F58F48" stopOpacity="1" />
              <stop offset="82%" stopColor="#F58F48" stopOpacity="1" />
              <stop offset="100%" stopColor="#F58F48" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d={orangeArcPath}
            fill="none"
            stroke="url(#arc-fade)"
            strokeWidth="0.22"
            vectorEffect="non-scaling-stroke"
          />

          {purpleDots.map((dot, i) => (
            <circle key={i} cx={dot.x} cy={dot.y} r="0.42" fill="#A9A4C2" />
          ))}
        </svg>

        {/* Value items — each anchored on arc at (x%, y%) */}
        <div className="absolute inset-0 w-full h-full z-30 pointer-events-none">
          {values.map((v, i) => {
            const y = rowYPositions[i]
            const x = getOrangeX(y)
            const isHovered = hoveredIndex === i

            return (
              <div
                key={v.number}
                className="absolute"
                style={{ top: `${y}%`, left: `${x}%` }}
              >
                {/* Orange dot on the arc */}
                <motion.div
                  animate={{
                    scale: isHovered ? 1.35 : 1,
                    backgroundColor: isHovered ? "#FF7A2B" : "#F58F48",
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute w-3.5 h-3.5 rounded-full"
                  style={{
                    transform: "translate(-50%, -50%)",
                    boxShadow: isHovered
                      ? "0 0 0 7px rgba(245,143,72,0.18)"
                      : "0 0 0 4px #FDEadf",
                  }}
                />

                {/* Content — centred vertically on the dot */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={{ x: isHovered ? 10 : 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="absolute pointer-events-auto cursor-default origin-left"
                  style={{
                    left: "2.5vw",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "38vw",
                    maxWidth: "480px",
                  }}
                >
                  {/*
                    Outer flex: items-baseline so the bottom of "01" aligns
                    with the bottom of the first line of the title.
                    Inner div stacks title + description so description
                    auto-aligns under the title — no manual margin needed.
                  */}
                  <div className="flex items-baseline" style={{ gap: "clamp(0.9rem, 1.4vw, 1.5rem)" }}>
                    <span
                      className="font-black leading-none text-[#37315B] tracking-tighter shrink-0"
                      style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
                    >
                      {v.number}
                    </span>

                    <div className="flex flex-col" style={{ gap: "0.3rem" }}>
                      <h3
                        className="font-semibold text-[#37315B] tracking-wide leading-tight"
                        style={{ fontSize: "clamp(1.15rem, 1.7vw, 1.7rem)" }}
                      >
                        {v.title}
                      </h3>
                      <p
                        className="italic text-[#37315B]/75 leading-relaxed"
                        style={{ fontSize: "clamp(0.85rem, 1.05vw, 1rem)" }}
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

      {/* ── MOBILE ──────────────────────────────────────────────────── */}
      <div className="w-full md:hidden flex flex-col relative z-10">
        {/* Photo block */}
        <div className="relative w-full h-105">
          <div className="absolute top-0 left-[-10%] w-[90%] pb-[90%] rounded-full bg-[#F9CDB2] opacity-50" />
          <div className="absolute top-[30%] left-[10%] w-[60%] pb-[60%] rounded-full bg-[#F5A973] opacity-80" />
          <Image
            src="/valuesimg.png"
            alt="Treatment"
            fill
            className="object-contain object-bottom-left relative z-10"
          />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#FDEadf] to-transparent z-20" />
        </div>

        {/* Text list */}
        <div className="bg-[#FDEadf] flex flex-col gap-10 px-6 pt-4 pb-16">
          {values.map((v) => (
            <div key={v.number} className="flex items-baseline gap-5">
              <span className="font-black leading-none text-[#37315B] tracking-tighter shrink-0 text-[3rem]">
                {v.number}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-[#37315B] leading-tight">
                  {v.title}
                </h3>
                <p className="text-sm italic text-[#37315B]/75 leading-relaxed">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
