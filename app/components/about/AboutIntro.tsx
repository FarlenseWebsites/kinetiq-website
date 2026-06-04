"use client"

import Image from "next/image"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

export default function AboutIntro() {
  return (
    <section id="about-intro" className="relative w-full overflow-hidden scroll-mt-32">
      {/* Top: light background header */}
      <div
        className="flex flex-col items-center text-center px-6 pt-6 pb-16"
        style={{ background: "rgba(254, 254, 254, 0.98)" }}
      >
        <ButtonWithTwoDots label="Clinical Excellence" />
        <h2
            className="my-8 text-[#373355] font-medium text-center"
            style={{ fontSize: "clamp(1.75rem, 4vw + 0.25rem, 3rem)" }}
          >
          
          Expert Care,
          <br />
          Backed by Science
        </h2>
      </div>

      {/* Bottom section: aspect-ratio drives height from width at every breakpoint */}
      <div
        className="relative w-full aspect-3/4 sm:aspect-4/3 md:aspect-video lg:aspect-2/1"
        style={{
          background: "linear-gradient(160deg, #f5f5f8 0%, #948FAF 88%, #68628E 100%)",
        }}
      >
        {/* Text — absolutely spans full height so it can center vertically */}
        <div className="absolute inset-y-0 left-0 z-10 flex flex-col justify-start pt-[8vw]  md:pt-6 px-[6%] w-full md:w-[52%]">
          <p
            className="italic font-medium text-[#373355] leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.25rem)" }}
          >
            KinetiQ is a physiotherapy and functional wellness platform rooted
            in clinical precision and personalised care.
          </p>
          <p
            className="mt-[3vw] md:mt-[1.8vw] italic font-medium text-[#373355] leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.25rem)" }}
          >
            We combine evidence-based physiotherapy, functional strength
            training, posture science, and sports rehabilitation to help people
            of all ages move better, recover faster, and perform stronger.
          </p>

          <div className="flex gap-3 mt-[4vw] md:mt-[2vw]">
            <span className="w-3 h-3 bg-white rounded-full opacity-90" />
            <span className="w-3 h-3 bg-white/60 rounded-full" />
            <span className="w-3 h-3 bg-white/60 rounded-full" />
          </div>
        </div>

        {/* Image — desktop: ellipse clip at bottom-right, unchanged from original */}
        <div
          className="hidden md:block absolute inset-0 z-0"
          style={{ clipPath: "ellipse(32% 78% at 75% 85%)" }}
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

        {/* Image — mobile: landscape block anchored to bottom-right */}
        <div className="md:hidden absolute bottom-0 right-0 w-[78vw] h-[64vw] overflow-hidden rounded-tl-full">
          <Image
            src="/aboutcheckupimg.png"
            alt="KinetiQ physiotherapy session"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "right 30%" }}
            sizes="78vw"
          />
        </div>
      </div>
    </section>
  )
}
