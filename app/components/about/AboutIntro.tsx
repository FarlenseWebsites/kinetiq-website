"use client"

import Image from "next/image"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

export default function AboutIntro() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col">
      {/* Top: light background header */}
      <div
        className="flex flex-col items-center text-center px-6 pt-6 pb-16"
        style={{ background: "rgba(254, 254, 254, 0.97)" }}
      >
        <ButtonWithTwoDots label="Clinical Excellence" />
        <h1
          className="font-semibold text-[#373355] mt-6 leading-tight"
          style={{ fontSize: "clamp(1.75rem, 4vw + 0.25rem, 3rem)" }}
        >
          Expert Care,
          <br />
          <span className="font-bold">Backed by Science</span>
        </h1>
      </div>

      {/* Bottom section: gradient bg + overlapping image */}
      <div
        className="relative flex-1 min-h-[75vh]"
        style={{
          background: "linear-gradient(160deg, #f5f5f8 0%, #948FAF 88% , #68628E 100%)",
        }}
      >
        {/* Left text content */}
        <div className="relative z-10 flex flex-col justify-start px-8 sm:px-12 md:px-16 py-12 md:py-16 max-w-[52%]">
          <p className="text-base sm:text-lg md:text-xl italic font-medium text-[#373355] leading-relaxed">
            KinetiQ is a physiotherapy and functional wellness platform rooted
            in clinical precision and personalised care.
          </p>
          <p className="mt-6 text-base sm:text-lg md:text-xl italic font-medium text-[#373355] leading-relaxed">
            We combine evidence-based physiotherapy, functional strength
            training, posture science, and sports rehabilitation to help people
            of all ages move better, recover faster, and perform stronger.
          </p>

          {/* Three white dots */}
          <div className="flex gap-3 mt-10">
            <span className="w-3 h-3 bg-white rounded-full opacity-90" />
            <span className="w-3 h-3 bg-white/60 rounded-full" />
            <span className="w-3 h-3 bg-white/60 rounded-full" />
          </div>
        </div>

        {/* Image — large circle arch from bottom-right, bleeding to edge */}
        <div
          className="absolute inset-0 z-0"
          style={{
            clipPath: "ellipse(32% 78% at 75% 85%)",
          }}
        >
          <Image
            src="/aboutcheckupimg.png"
            alt="KinetiQ physiotherapy session"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "70% 20%" }}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  )
}