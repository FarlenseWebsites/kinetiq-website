"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import OrangeCircle from "../ui/OrangeCircle"
import rehabimage from "../../../public/rehabimage.png"

/*
  CIRCLE STRATEGY
  ───────────────
  • Circles positioned relative to the IMAGE WRAPPER (% units) → always tracks image at every breakpoint
  • overflow:visible on wrapper + overflow:hidden on section → right-edge circles clip naturally
  • Image z-20, circles z-10 → image is on top
  • Each circle passes whileInView + staggered delay INTO OrangeCircle's own motion.div
    so the SAME element handles both entry animation AND hover color change
*/

interface CircleDef {
  left?: string
  right?: string
  top: string
  delay: number
}

function Circle({ left, right, top, delay }: CircleDef) {
  return (
    <div
      style={{
        position: "absolute",
        ...(left !== undefined ? { left } : {}),
        ...(right !== undefined ? { right } : {}),
        top,
        width: "18%",
        aspectRatio: "1 / 1",
      }}
    >
      <OrangeCircle
        size="65%"
        // Entry: scale in from 0 with stagger
        initial={{ backgroundColor: "#FF914D", scale: 0, opacity: 0 }}
        whileInView={{ backgroundColor: "#FF914D", scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
        // Hover handled inside OrangeCircle via whileHover (not overridden here)
      />
    </div>
  )
}

/*
  LEFT cluster — 2-3-2 staircase (matches reference)
  D = 18% of image wrapper width, rows spaced D apart → circles touch

  row1 (top=44%):  col1=20%,        col2=38%
  row2 (top=62%):  col0=2%,  col1,  col2
  row3 (top=80%):  col0,     col1
*/
const LEFT: CircleDef[] = [
  { left: "59.7%", top: "41.8%", delay: 0.00 },
  { left: "48%", top: "41.8%", delay: 0.07 },
  { left: "36.3%",  top: "59%", delay: 0.14 },
  { left: "48%", top: "59%", delay: 0.21 },
  { left: "59.7%", top: "59%", delay: 0.28 },
  { left: "48%",  top: "76.4%", delay: 0.35 },
]

/*
  RIGHT cluster — 4 circles on far right (matches reference)
  right:-2% bleeds slightly outside wrapper, section clips it
  1 top → 2 side-by-side → 1 lower
*/
const RIGHT: CircleDef[] = [
  { right: "-7%", top: "2.8%",  delay: 0.49 },
  { right: "4.7%", top: "20%", delay: 0.56 },
  { right: "-7%", top: "20%", delay: 0.63 },
  { right: "-7%", top: "60%", delay: 0.70 },
]

export default function RehabIntro() {
  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-[#f5efe4]">

      {/* Top Decorative Circles */}
      

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(#ccc 1px, transparent 1px),
            linear-gradient(90deg, #ccc 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at center, black 0%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 60% 60% at center, black 0%, transparent 100%)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full flex-1 max-w-7xl flex-col items-center gap-6 px-4 sm:gap-8 sm:px-6 sm:pt-8 md:flex-row md:items-stretch md:gap-0 md:px-8 md:pt-10">

        {/* LEFT TEXT */}
        <div className="flex w-full flex-col items-center text-center md:w-[40%] md:items-start md:self-start md:text-left">
          <p className="mb-1 bg-linear-to-r from-[#68628E] to-[#373355] bg-clip-text text-base italic tracking-wider text-transparent sm:mb-2 sm:text-lg md:text-xl lg:text-2xl">
            One stop for all
          </p>
          <h2 className="bg-linear-to-r from-[#68628E] to-[#373355] bg-clip-text pb-1 text-4xl font-light leading-tight tracking-tight text-transparent sm:pb-2 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem]">
            Rehab and
            <br />
            Fitness Needs
          </h2>
        </div>

        {/* RIGHT — image wrapper is the % positioning context for all circles */}
        <div className="flex w-full justify-center md:w-[60%] md:items-end md:justify-end md:self-end">
          <div className="relative w-full" style={{ overflow: "visible" }}>

            {/* Circles — z-10, pointer-events-auto so hover works */}
            <div
              className="absolute inset-0 z-10"
              style={{ overflow: "visible" }}
            >
              {LEFT.map((c, i) => <Circle key={`l${i}`} {...c} />)}
              {RIGHT.map((c, i) => <Circle key={`r${i}`} {...c} />)}
            </div>

            {/* Image — z-20, on top */}
            <Image
              src={rehabimage}
              alt="Rehab illustration"
              className="pointer-events-none relative z-20 block h-auto w-full"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}