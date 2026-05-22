"use client"

import { motion } from "framer-motion"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const steps = [
  {
    letter: "F",
    title: "Functional Assessment",
    description:
      "Every patient begins with a thorough movement and functional analysis to identify root cause.",
  },
  {
    letter: "O",
    title: "Outcome-Driven Planning",
    description:
      "Treatment plans are built around measurable, realistic goals — tailored to your lifestyle, sport, or recovery timeliness.",
  },
  {
    letter: "R",
    title: "Root-Cause Rehabilitation",
    description:
      "We combine hands-on manual therapy, evidence-based exercise, and technology-assisted modalities to treat the root cause.",
  },
  {
    letter: "M",
    title: "Movement Optimization",
    description:
      "Beyond recovery — we help you move better, perform stronger, and stay resilient through a range of fitness programs.",
  },
]

export default function FormMethod() {
  return (
    <section className="relative overflow-hidden bg-[#373355] py-10 sm:py-10 md:py-15 px-4 sm:px-6 md:px-8">
      {/* Subtle grid overlay */}
      

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        <ButtonWithTwoDots label="Our Approach" className="text-white border-white/30" />
        <p
            className="text-white/60 italic font-light tracking-widest text-sm mt-3"
             
          >
            The KinetiQ Method
          </p>

        <div className="mt-8 text-center">
          <h2
            className="mt-3 font-bold tracking-[0.2em] text-white inline-flex items-center gap-0"
            style={{ fontSize: "clamp(3rem, 8vw + 0.5rem, 7rem)" }}
          >
            {[
              { char: "F", x: -120, y: 0 },
              { char: ".", x: 0, y: -60 },
              { char: "O", x: 0, y: -120 },
              { char: ".", x: 0, y: 60 },
              { char: "R", x: 120, y: 0 },
              { char: ".", x: 0, y: -60 },
              { char: "M", x: 0, y: 120 },
            ].map(({ char, x, y }, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x, y }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* 4-column grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {steps.map((step, i) => (
            <motion.div
              key={step.letter}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.10] transition-colors duration-300 border border-white/10 p-6 sm:p-7"
            >
              {/* Large letter */}
              <span
                className="font-bold text-[#FF914D] leading-none select-none"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
              >
                {step.letter}
              </span>

              <h3
                className="font-semibold text-white leading-tight"
                style={{ fontSize: "clamp(1rem, 1.5vw + 0.15rem, 1.2rem)" }}
              >
                {step.title}
              </h3>

              <p
                className="text-white/60 leading-relaxed"
                style={{ fontSize: "clamp(0.825rem, 0.9vw + 0.15rem, 0.9375rem)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
