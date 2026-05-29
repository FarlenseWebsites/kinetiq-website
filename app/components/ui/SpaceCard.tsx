"use client"

import Image from "next/image"

interface SpaceCardProps {
  number: string
  title: string
  subtitle: string
  image?: string
  flip?: boolean
}

export default function SpaceCard({
  number,
  title,
  subtitle,
  image,
  flip = false,
}: SpaceCardProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-tr-[60px] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)]">
      
      
      <div className="relative w-full aspect-[4/3]">
        
        <Image
          src={image || "/spaceimg.png"}
          alt={title}
          fill
         className={`
          object-cover
          ${flip ? "-scale-x-100" : ""}
          [clip-path:ellipse(65%_78%_at_60%_18%)]
        `}
        />

        {/* Circle number badge */}
       <div
          className="absolute right-5 top-5 flex items-center justify-center sm:right-6 sm:top-6"
          style={{
            width: "clamp(58px, 7vw, 72px)",
            height: "clamp(58px, 7vw, 72px)",
          }}
        >
          {/* Gradient border only */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              padding: "1.5px",

              background: `
                conic-gradient(
                  from 225deg,
                  rgba(255,255,255,0.05) 0deg,
                  rgba(255,255,255,0) 70deg,
                  rgba(255,255,255,0) 160deg,
                  rgba(255,255,255,0.65) 240deg,
                  rgba(255,255,255,1) 300deg,
                  rgba(255,255,255,0.12) 360deg
                )
              `,

              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",

              pointerEvents: "none",
            }}
          />

          {/* Number */}
          <span
            className="font-bold text-white"
            style={{
              fontSize: "clamp(24px, 3vw, 42px)",
              lineHeight: 1,
              textShadow: "0 1px 6px rgba(0,0,0,0.35)",
            }}
          >
            {number}
          </span>
        </div>
      </div>

      {/* ── Text area ── */}
      <div className=" relative z-10 -mt-2 bg-white px-5 pb-7 ">
        <h3 className="mb-2  font-medium leading-tight text-[#373355] text-[clamp(24px,2.3vw,38px)]">
          {title}
        </h3>

        <p className=" pr-30 leading-relaxed italic text-[#68628e] text-[clamp(13px,1.0vw,16px)]">
          {subtitle}
        </p>
      </div>
      
    </div>
  )
}