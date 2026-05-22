"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const team = [
  {
    name: "Akshay Arora",
    role: "Co-Founder",
    description:
      "Helping people move pain-free through advanced rehabilitation and performance therapy.",
    image: "//akshay.png",
    bg: "#f59d75", // purple
  },
  {
    name: "Ritwik Bahuguna",
    role: "Co-Founder",
    description:
      "Building compassionate healthcare experiences with innovation and care.",
    image: "//ritwik.png",
    bg: "#f59d75", // orange center
  },
  {
    name: "Ridhima Bahuguna",
    role: "Co-Founder",
    description:
      "Creating wellness journeys focused on recovery and everyday strength.",
    image: "/ridhima.png",
    bg: "#f59d75", // purple
  },
]

function TeamCard({
  member,
  index,
}: {
  member: (typeof team)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        animation: visible
          ? `cardReveal 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.15}s both`
          : "none",
      }}
    >
      <div className="group relative overflow-hidden rounded-[34px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.14)] transition-all duration-700 hover:-translate-y-3">

        {/* TOP SECTION */}
        <div
          className="relative h-[300px] overflow-hidden flex items-center justify-center"
          style={{
            background: `
              radial-gradient(circle at top left, rgba(255,255,255,0.22), transparent 30%),
              radial-gradient(circle at bottom right, rgba(255,255,255,0.14), transparent 35%),
              ${member.bg}
            `,
          }}
        >

          {/* simplified visuals: decorative pulses/particles and rotating ring removed */}

          {/* IMAGE CARD */}
          <div
            className="relative z-10"
            style={{
              animation: `floatingCard 6s ease-in-out infinite`,
            }}
          >

            <div className="relative w-[180px] h-[220px] rounded-[34px] overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.16)]">

              {/* glass shine */}
              <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_45%)]" />

              {/* decorative ring */}
              <div className="absolute -left-7 top-10 w-24 h-24 rounded-full border-[14px] border-white/10 z-10" />

              {/* image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

        {/* CONTENT */}
        <div className="bg-[#F7F1E8] px-7 py-7 text-center">

          <h3 className="text-[#2F2B4A] text-[26px] leading-tight font-serif">
            {member.name}
          </h3>

          <div className="flex items-center justify-center gap-2 mt-3">

            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: member.bg,
              }}
            />

            <span className="uppercase tracking-[0.22em] text-[11px] font-medium text-[#5F5A78]">
              {member.role}
            </span>

            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: member.bg,
              }}
            />

          </div>

          <p className="mt-6 text-[#5B566F] text-[14px] leading-[1.9]">
            {member.description}
          </p>

        </div>

      </div>
    </div>
  )
}

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F4] py-20 px-5 font-sans">

      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#E7E0FF] opacity-40 blur-3xl" />

      <style>{`
        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        @keyframes floatingCard {
          0%,100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        /* removed spinSlow and floatParticle keyframes (no longer used) */
      `}</style>

      <div className="relative z-10 flex items-center justify-center mb-16">
        <ButtonWithTwoDots label="Our Founders" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <TeamCard
            key={member.name}
            member={member}
            index={index}
          />
        ))}
      </div>

    </section>
  )
}