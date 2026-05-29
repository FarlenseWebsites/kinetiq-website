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
    image: "/akshay.png",
    bg: "#F5EFE4",
  },
  {
    name: "Ritwik Bahuguna",
    role: "Co-Founder",
    description:
      "Building compassionate healthcare experiences with innovation and care.",
    image: "/ritwik.png",
    bg: "#F5EFE4",
  },
  {
    name: "Ridhima Bahuguna",
    role: "Co-Founder",
    description:
      "Creating wellness journeys focused on recovery and everyday strength.",
    image: "/ridhima.png",
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
      <div className="flip-container">
        <div className="flip-inner">

          {/* FRONT — name, role, description */}
          <div
            className="flip-face flip-front"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.30), transparent 55%), ${member.bg}`,
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 px-8 text-center">
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

          {/* BACK — image */}
          <div className="flip-face flip-back" style={{ background: member.bg }}>
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 260px, 340px"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4f4f4] py-20 px-5">

      <style>{`
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .flip-container {
          perspective: 600px;
          width: clamp(190px, 24vw, 280px);
          height: clamp(190px, 24vw, 280px);
          cursor: pointer;
        }

        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform-style: preserve-3d;
          transition: transform 0.75s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .flip-container:hover .flip-inner {
          transform: rotateY(180deg);
        }

        .flip-face {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .flip-front {
          /* visible by default */
        }

        .flip-back {
          transform: rotateY(180deg);
          background: #f59d75;
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
