"use client"

import Image from "next/image"
import OrangeCircle from "../ui/OrangeCircle"

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
}: Omit<CircleDef, "id">) {
  return (
    <div
      className="absolute aspect-square"
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

const GRID: CircleDef[] = [
  { id: "g1", left: "30%", top: "37%", delay: 0.0, wrapSize: "15%" },
  { id: "g2", left: "18%", top: "37%", delay: 0.07, wrapSize: "15%" },
  { id: "g3", left: "30%", top: "51%", delay: 0.14, wrapSize: "15%" },
  { id: "g4", left: "18%", top: "51%", delay: 0.21, wrapSize: "15%" },
]

const BIG: CircleDef[] = [
  {
    id: "b1",
    right: "-4%",
    top: "-6%",
    delay: 0.28,
    wrapSize: "28%",
    circleSize: "95%",
  },
  {
    id: "b2",
    right: "-4%",
    top: "23%",
    delay: 0.35,
    wrapSize: "28%",
    circleSize: "95%",
  },
  {
    id: "b3",
    right: "22%",
    top: "23%",
    delay: 0.42,
    wrapSize: "28%",
    circleSize: "95%",
  },
]

export default function RehabIntro() {
  return (
    <section className="relative flex w-full overflow-hidden aspect-[21/9] bg-[url('/stockback.png')] bg-cover bg-center">
      {/* Left Content */}
      <div className="z-30 flex w-[50%] shrink-0 flex-col justify-start pl-[7%] pt-[5%]">
        <p className="bg-linear-to-r from-[#68628E] to-[#373355] bg-clip-text text-sm  tracking-wide text-transparent text-[clamp(0.55rem,1.5vw,2.0rem)]">
          One stop for all your
        </p>

        <h2 className="whitespace-nowrap bg-linear-to-r from-[#68628E] to-[#373355] bg-clip-text text-3xl font-normal leading-tight tracking-tight text-transparent text-[clamp(1.45rem,5vw,3.5rem)]">
          Rehab and
          <br />
          Fitness Needs
        </h2>
         
      </div>

      {/* Right Side */}
      <div className="relative flex-1 h-full overflow-visible">
        {/* Circles */}
        <div className="absolute inset-0 z-10 overflow-visible">
          {GRID.map((c) => (
            <Circle key={c.id} {...c} />
          ))}

          {BIG.map((c) => (
            <Circle key={c.id} {...c} />
          ))}
        </div>

        {/* Image */}
        <div className="absolute right-[-25%] z-20 w-[150%] h-[110%] pointer-events-none">
          <Image
            src="/stopimg.png"
            alt="Physical therapist adjusting patient's neck"
            fill
            priority
            className="object-contain object-bottom-right"
            sizes="(max-width: 768px) 100vw, 65vw"
          />
        </div>
      </div>
    </section>
  )
}