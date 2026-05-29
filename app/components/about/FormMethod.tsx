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
    <section className="overflow-hidden">
      {/* Light strip — button + subtitle */}
      <div className="bg-[#f4f4f4] w-full flex flex-col items-center pb-10 ">
        <ButtonWithTwoDots label="Our Approach" />
         <h2
            className="my-8 text-[#373355] font-medium text-center"
            style={{ fontSize: "clamp(1.75rem, 4vw + 0.25rem, 3rem)" }}
          >
            The KinetiQ Method
          </h2>
      </div>

      {/* FORM content — full width, no outer margin or padding */}
      <div className="bg-[#68628e] w-full">
        <div className="max-w-6xl mx-auto flex flex-col items-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <h2
              className="font-bold tracking-[0.2em] text-white inline-flex items-center gap-0"
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

          <div className="mt-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
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
                className="flex flex-col gap-4 rounded-xl bg-[#373355] hover:bg-white/[0.05] transition-colors duration-300 border border-white/10 p-6 sm:p-7"
              >
                <span
                  className="font-bold text-[#FF914D] leading-none select-none"
                  style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                >
                  {step.letter}
                </span>

                <h3
                  className="font-medium text-white leading-tight"
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
      </div>
    </section>
  )
}
