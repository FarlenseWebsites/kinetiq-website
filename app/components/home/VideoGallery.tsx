"use client"

import Image from "next/image"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const videoimg = "/videoimg.png"

export default function EquipmentGallery() {
  return (
    <div className="relative bg-[#f4f4f4]">
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          {/*
            Full-bleed concave shape:
            - Corners touch screen edges exactly (x=0 and x=1)
            - Top center dips down to y=0.22
            - Bottom center rises up to y=0.78
          */}
          <clipPath id="eq-concave" clipPathUnits="objectBoundingBox">
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

      <section className="relative  bg-[#F4F4F4]">
        <div className="flex items-center justify-center pb-10">
          <ButtonWithTwoDots label="Testimonial" />
        </div>

        {/* Images wrapped in the concave clip */}
        <div style={{ clipPath: "url(#eq-concave)" }}>
          {/* DESKTOP — 3 images filling the shape, no cards */}
          <div
            className="hidden md:flex w-full"
            style={{ height: "clamp(380px, 52vw, 620px)" }}
          >
            {/* LEFT */}
            <div className="relative flex-1 h-full">
              <Image
                src={videoimg}
                alt="Equipment"
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>

            {/* divider */}
            <div className="w-5 shrink-0 bg-[#F4F4F4] z-10" />

            {/* CENTER */}
            <div className="relative flex-1 h-full">
              <Image
                src={videoimg}
                alt="Equipment"
                fill
                priority
                sizes="33vw"
                className="object-cover"
              />
            </div>

            {/* divider */}
            <div className="w-5 shrink-0 bg-[#F4F4F4] z-10" />

            {/* RIGHT */}
            <div className="relative flex-1 h-full">
              <Image
                src={videoimg}
                alt="Equipment"
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* MOBILE — single full-width image, swipeable */}
          <div
            className="md:hidden w-full overflow-x-auto snap-x snap-mandatory flex hide-scrollbar"
            style={{ height: "clamp(260px, 72vw, 420px)" }}
          >
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="relative shrink-0 w-full h-full snap-center"
              >
                <Image
                  src={videoimg}
                  alt="Equipment"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — outside the clipped section so it's never cut off */}
     
    </div>
  )
}