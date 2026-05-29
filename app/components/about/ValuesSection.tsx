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

// Arc is a semicircle bulging LEFT, sitting on the right edge of the left panel.
// The arc goes from top-right to bottom-right, curving leftward.
// We compute points along: center-x=100%, half-circle radius = 50% of height
// Using parametric: x = cx + r*cos(θ), y = cy + r*sin(θ), θ from -90° to 90°
// cx = 100% (right edge), r bulges left so subtract. We map to CSS % of the container.

// Gray dots: evenly spaced along the arc (right-edge semicircle bulging left)
// Container assumed ~600px tall, arc center at right edge (100%), radius ~50% width
// We'll express as percentages of the left-panel container
function getArcPoint(t: number) {
  // t from 0 to 1 maps angle from -90deg to +90deg
  const angle = (t - 0.5) * Math.PI // -π/2 to +π/2
  // Arc center is at LEFT edge (cx=0), bulges RIGHTWARD
  // The belly of the arc is on the right side of the left panel
  const r = 52  // radius as % of container width — how far right it bulges
  const cx = 0
  const x = cx + r * Math.cos(angle) // bulges right
  const y = 50 + 47 * Math.sin(angle)
  return { x, y }
}

const grayDotCount = 20
const grayDots = Array.from({ length: grayDotCount }, (_, i) => {
  const t = i / (grayDotCount - 1)
  const p = getArcPoint(t)
  return { top: `${p.y.toFixed(1)}%`, left: `${p.x.toFixed(1)}%` }
})

// Orange milestone dots at t positions for rows 01, 02, 03
const orangeDotTs = [0.18, 0.5, 0.82]
const orangeDotPositions = orangeDotTs.map((t) => {
  const p = getArcPoint(t)
  return { top: `${p.y.toFixed(1)}%`, left: `${p.x.toFixed(1)}%` }
})

export default function ValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-[#F4F4F4]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-0 items-stretch">

        {/* LEFT — Image with arc overlay */}
        <div className="w-full md:w-[50%] relative flex-shrink-0 min-h-[500px]">
          {/* Background arc fill — semicircle anchored left, bulging RIGHT */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(ellipse 95% 88% at 0% 50%, #E4E3EA 52%, transparent 53%)",
            }}
          />

          {/* Photo — sits inside the arc, centered */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 h-full flex items-center justify-start pl-4"
          >
            <Image
              src="/massageimg.png"
              alt="Physiotherapy treatment"
              width={380}
              height={520}
              className="object-cover rounded-2xl max-h-[520px]"
              style={{ objectPosition: "center top", width: "auto" }}
            />
          </motion.div>

          {/* Arc SVG line — semicircle anchored at LEFT edge, belly bulging RIGHT */}
          <svg
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Arc: top-left (0,3) → curves right → bottom-left (0,97) */}
            <path
              d="M 0 3 C 80 3, 80 97, 0 97"
              fill="none"
              stroke="#E8A87C"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
          </svg>

          {/* Gray decorative dots along arc */}
          {grayDots.map((dot, i) => (
            <div
              key={i}
              className="absolute z-20 rounded-full bg-[#C4C2CC]"
              style={{
                top: dot.top,
                left: dot.left,
                width: 6,
                height: 6,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          {/* Orange milestone dots — highlight on hover */}
          {orangeDotPositions.map((pos, i) => (
            <div
              key={i}
              className="absolute z-30 rounded-full transition-all duration-300"
              style={{
                top: pos.top,
                left: pos.left,
                width: hoveredIndex === i ? 16 : 12,
                height: hoveredIndex === i ? 16 : 12,
                transform: "translate(-50%, -50%)",
                background: hoveredIndex === i ? "#FF914D" : "#F0A97A",
                boxShadow: hoveredIndex === i
                  ? "0 0 0 4px rgba(255,145,77,0.25), 0 0 12px rgba(255,145,77,0.4)"
                  : "none",
              }}
            />
          ))}
        </div>

        {/* RIGHT — Numbered values */}
        <div className="flex w-full md:w-[50%] flex-col justify-center gap-0 pl-0 md:pl-8">
          {values.map((v, i) => (
            <motion.div
              key={v.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col gap-2 py-10 sm:py-12 border-b border-[#D2D0DD] last:border-b-0 cursor-default group"
            >
              {/* Number + title row */}
              <div className="flex items-baseline gap-5">
                <span
                  className="font-black leading-none select-none flex-shrink-0 transition-colors duration-300"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    color: hoveredIndex === i ? "#FF914D" : "#373355",
                    opacity: hoveredIndex === i ? 1 : 0.85,
                  }}
                >
                  {v.number}
                </span>
                <h3
                  className="font-medium text-[#4A4572] tracking-tight"
                  style={{ fontSize: "clamp(1.25rem, 2.2vw + 0.25rem, 1.875rem)" }}
                >
                  {v.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-[#4A4572]/70 leading-relaxed max-w-sm italic"
                style={{ fontSize: "clamp(0.875rem, 1vw + 0.15rem, 1rem)" }}
              >
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}