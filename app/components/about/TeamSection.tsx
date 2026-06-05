"use client"

import { useEffect, useRef, useState } from "react"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const team = [
  {
    name: "Akshay Arora",
    role: "Co-Founder",
    description:
      "Helping people move pain-free through advanced rehabilitation and performance therapy.",
    bg: "#F5EFE4",
  },
  {
    name: "Ritwik Bahuguna",
    role: "Co-Founder",
    description:
      "Building compassionate healthcare experiences with innovation and care.",
    bg: "#F5EFE4",
  },
  {
    name: "Ridhima Bahuguna",
    role: "Co-Founder",
    description:
      "Creating wellness journeys focused on recovery and everyday strength.",
    bg: "#F5EFE4",
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
          ? `cardReveal 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.18}s both`
          : "none",
        opacity: 0,
      }}
    >
      <div
        className="flex items-center justify-center rounded-full overflow-hidden"
        style={{
          width: "clamp(190px, 24vw, 280px)",
          height: "clamp(190px, 24vw, 280px)",
          background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.30), transparent 55%), ${member.bg}`,
        }}
      >
        <div className="flex flex-col items-center justify-center gap-2 px-8 text-center">
          <h3
            className="text-[#373355] leading-tight whitespace-nowrap"
            style={{ fontSize: "clamp(1.1rem, 3vw, 1.4rem)" }}
          >
            {member.name}
          </h3>
          <span
            className="flex items-center gap-1.5 uppercase tracking-widest text-[#68628e]/80 font-medium"
            style={{ fontSize: "9px", letterSpacing: "0.2em" }}
          >
            <span className="h-1 w-1 rounded-full bg-[#Ff914d] shrink-0" />
            {member.role}
            <span className="h-1 w-1 rounded-full bg-[#Ff914d] shrink-0" />
          </span>
          <p
            className="text-[#68628e] leading-relaxed mt-1"
            style={{ fontSize: "clamp(0.65rem, 1.8vw, 0.78rem)" }}
          >
            {member.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function TeamSection() {
  return (
    <section id="about-team" className="relative overflow-hidden bg-[#F4f4f4] py-20 px-5 scroll-mt-32">

      <style>{`
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative z-10 flex items-center justify-center mb-16">
        <ButtonWithTwoDots label="Our Founders" />
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-14 max-w-5xl mx-auto place-items-center">
        {team.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>

    </section>
  )
}
