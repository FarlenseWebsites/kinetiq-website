"use client"

import Image from "next/image"
import OrangeCircle from "../ui/OrangeCircle"
import stopimg from "../../../public/stopimg.png"

interface CircleDef {
  id: string
  left?: string
  right?: string
  top?: string
  bottom?: string
  delay: number
  wrapSize?: string
  circleSize?: string
}

const DEFAULT_WRAP_SIZE = "16%"
const DEFAULT_CIRCLE_SIZE = "85%"

function Circle({
  left,
  right,
  top,
  bottom,
  delay,
  wrapSize = DEFAULT_WRAP_SIZE,
  circleSize = DEFAULT_CIRCLE_SIZE,
}: Omit<CircleDef, 'id'>) {
  return (
    <div
      className="absolute aspect-square pointer-events-none"
      style={{
        ...(left !== undefined && { left }),
        ...(right !== undefined && { right }),
        ...(top !== undefined && { top }),
        ...(bottom !== undefined && { bottom }),
        width: wrapSize,
      }}
    >
      <OrangeCircle
        size={circleSize}
        initial={{ backgroundColor: "#FF914D", scale: 0, opacity: 0 }}
        whileInView={{ backgroundColor: "#FF914D", scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}

/* Adjusted grid slightly left to account for the image moving flush-right */
const GRID: CircleDef[] = [
  { id: "g1", left: "42%", top: "35%", delay: 0.00 },
  { id: "g2", left: "54%", top: "35%", delay: 0.07 },
  { id: "g3", left: "42%", top: "60%", delay: 0.14 },
  { id: "g4", left: "54%", top: "60%", delay: 0.21 },
]

const BIG: CircleDef[] = [
  { id: "b1", right: "-8%", top: "-10%", delay: 0.28, wrapSize: "28%", circleSize: "95%" },
  { id: "b2", right: "-12%", top: "35%", delay: 0.35, wrapSize: "28%", circleSize: "95%" },
  { id: "b3", right: "-4%", top: "65%", delay: 0.42, wrapSize: "28%", circleSize: "95%" },
]

export default function RehabIntro() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        aspectRatio: "clamp(16/9, 21/9, 24/9)",
        minHeight: "480px",
        backgroundImage: "url('/stopback.png')",
      }}
    >
      {/* Background Texture/Grid Layer */}
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

      {/* Typography Layer - Left Aligned */}
      {/* Removed max-width constraint to prevent unwanted line wrapping */}
      <div className="absolute inset-y-0 left-0 z-30 flex flex-col justify-top px-6 sm:px-10 md:px-16 lg:px-20">
        <p className="mb-2 bg-gradient-to-r from-[#68628E] to-[#373355] bg-clip-text text-sm italic tracking-wide text-transparent sm:text-base md:text-xl lg:text-2xl">
          One stop for all your
        </p>
        {/* whitespace-nowrap forces the text to rely strictly on the <br /> for breaks, keeping it exactly 2 lines */}
        <h2 className="whitespace-nowrap bg-gradient-to-r from-[#68628E] to-[#373355] bg-clip-text text-3xl font-normal leading-tight tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Rehab and
          <br />
          Fitness Needs
        </h2>
      </div>

      {/* Graphic & Image Layer - Right Aligned */}
      <div className="absolute bottom-0 right-0 z-10 w-[70%] h-full pointer-events-none">
        
        {/* Animated Circles Layer */}
        <div className="absolute inset-0 z-10 overflow-visible">
          {GRID.map((c) => <Circle key={c.id} {...c} />)}
          {BIG.map((c) => <Circle key={c.id} {...c} />)}
        </div>

        {/* Foreground Image Layer */}
        <div className="absolute inset-0 z-20">
          <Image
            src={stopimg}
            alt="Physical therapist adjusting patient's neck"
            fill
            /* object-right-bottom ensures the image is glued to the bottom-right corner */
            className="object-contain object-right-bottom" 
            priority
            sizes="(max-width: 768px) 100vw, 70vw"
          />
        </div>
      </div>
    </section>
  )
}