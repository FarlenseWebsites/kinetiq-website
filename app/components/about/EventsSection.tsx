"use client"

import Image from "next/image"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const eventImages = [
  { src: "/videoimg.png", alt: "KinetiQ fitness event" },
  { src: "/videoimg.png", alt: "KinetiQ posture workshop" },
  { src: "/videoimg.png", alt: "KinetiQ rehab session" },
]

export default function EventsSection() {
  return (
    <div className="relative bg-[#f4f4f4]">
      {/* Reuse same concave SVG clip-path as EquipmentGallery */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <clipPath id="events-concave" clipPathUnits="objectBoundingBox">
            <path d="
              M 0,0.01
              Q 0,0 0.01,0
              C 0.30,0.08 0.70,0.08 0.99,0
              Q 1,0 1,0.01
              L 1,0.99
              Q 1,1 0.99,1
              C 0.70,0.92 0.30,0.92 0.01,1
              Q 0,1 0,0.99
              Z
            "/>
          </clipPath>
        </defs>
      </svg>

      {/* Label */}
      <div className="flex flex-col items-center pt-16 sm:pt-20 pb-8">
        <ButtonWithTwoDots label="Our Events" />
        <h2
          className="mt-8 text-[#373355] font-semibold text-center"
          style={{ fontSize: "clamp(1.75rem, 4vw + 0.25rem, 3rem)" }}
        >
          Events
        </h2>
      </div>

      {/* Image gallery — clipped */}
      <section
        className="relative bg-[#F4F4F4]"
        style={{ clipPath: "url(#events-concave)" }}
      >
        {/* Desktop — 3 images */}
        <div
          className="hidden md:flex w-full"
          style={{ height: "clamp(360px, 50vw, 600px)" }}
        >
          {eventImages.map((img, i) => (
            <div key={i} className="relative flex-1 h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="33vw"
                className="object-cover"
                priority={i === 1}
              />
              {/* Divider — skip last */}
              {i < eventImages.length - 1 && (
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-[#F4F4F4] z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile — swipeable */}
        <div
          className="md:hidden w-full overflow-x-auto snap-x snap-mandatory flex hide-scrollbar"
          style={{ height: "clamp(240px, 70vw, 400px)" }}
        >
          {eventImages.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 w-full h-full snap-center"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="mb-16">
        <ButtonWithTwoDots label="View All Events" />
      </div>
    </div>
  )
}
