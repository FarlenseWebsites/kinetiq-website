"use client"

import Image, { StaticImageData } from "next/image"
import { useState } from "react"

// ─────────────────────────────────────────────────────────────
// Default fallback image — shown when no image prop is passed.
// Swap this import to point at any image in your /public folder.
// ─────────────────────────────────────────────────────────────
import defaultImage from "../../../public/excerciseimg.png"

interface PhysioServiceCardProps {
  title: string
  description: string
  /** Col 2 — tall main image. Omit to show the default. */
  mainImage?: StaticImageData | string
  /** Col 3 top slot. Omit to show the default. */
  stackImageTop?: StaticImageData | string
  /** Col 3 bottom slot. Omit to show the default. */
  stackImageBottom?: StaticImageData | string
  mainImageAlt?: string
  stackImageTopAlt?: string
  stackImageBottomAlt?: string
  className?: string
}

export default function PhysioServiceCard({
  title,
  description,
  mainImage,
  stackImageTop,
  stackImageBottom,
  mainImageAlt = "Service image",
  stackImageTopAlt = "Service image top",
  stackImageBottomAlt = "Service image bottom",
  className = "",
}: PhysioServiceCardProps) {
  const [hovered, setHovered] = useState(false)

  // Fall back to the shared default when an image is not supplied
  const imgMain   = mainImage      ?? defaultImage
  const imgTop    = stackImageTop  ?? defaultImage
  const imgBottom = stackImageBottom ?? defaultImage

  return (
    <div
      className={`grid w-full gap-4 ${className}`}
      style={{
        gridTemplateColumns: "1fr 1.2fr 1.2fr",
        minHeight: "clamp(220px, 50vw, 390px)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Col 1 : Text content ── */}
      <div
        className="relative flex flex-col justify-end p-5 sm:p-6 md:p-8 transition-colors duration-300"
        style={{
          background: "#f4f4f4",
          border: `1.5px solid #FF914D`,
          borderRadius: "0 60px 0 0",
        }}
      >
        <h3
          className="mb-2 font-bold leading-tight"
          style={{ fontSize: "clamp(13px, 1.6vw, 20px)", color: "#373355" }}
        >
          {title}
        </h3>
        <p
          className="leading-relaxed"
          style={{ fontSize: "clamp(10px, 1.1vw, 13px)", color: "#68628E" }}
        >
          {description}
        </p>
      </div>

      {/* ── Col 2 : Main tall image ── */}
      <div className="group relative overflow-hidden rounded-xl">
        <Image
          src={imgMain}
          alt={mainImageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 30vw, 25vw"
        />
      </div>

      {/* ── Col 3 : Two stacked images ── */}
      <div className="grid gap-3" style={{ gridTemplateRows: "1fr 1fr" }}>
        <div className="group relative overflow-hidden rounded-xl">
          <Image
            src={imgTop}
            alt={stackImageTopAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 15vw, 12vw"
          />
        </div>
        <div className="group relative overflow-hidden rounded-xl">
          <Image
            src={imgBottom}
            alt={stackImageBottomAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 15vw, 12vw"
          />
        </div>
      </div>
    </div>
  )
}