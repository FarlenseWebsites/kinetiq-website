"use client"

import { Fragment, useRef, useState } from "react"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4"]

export default function EquipmentGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  const scrollTo = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const next = Math.max(0, Math.min(videos.length - 1, index))
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" })
    setCurrent(next)
  }

  const onScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCurrent(Math.round(el.scrollLeft / el.clientWidth))
  }

  return (
    <div className="relative bg-[#f4f4f4]">
      {/*
        SVG must NOT use overflow-hidden — that can prevent clipPath defs from
        being exposed to external CSS url() references in some browsers.
      */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
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
            " />
          </clipPath>
        </defs>
      </svg>

      <section className="relative bg-[#F4F4F4]">
        <div className="flex items-center justify-center pb-10">
          <ButtonWithTwoDots label="Testimonial" />
        </div>

        <div style={{ clipPath: "url(#eq-concave)" }}>
          {/* DESKTOP — 3 videos filling the shape */}
          <div
            className="hidden md:flex w-full"
            style={{ height: "clamp(380px, 52vw, 620px)" }}
          >
            {videos.map((src, i) => (
              <Fragment key={src}>
                {i > 0 && <div className="w-5 shrink-0 bg-[#F4F4F4]" />}
                <div className="relative flex-1 h-full">
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </Fragment>
            ))}
          </div>

          {/* MOBILE — swipeable carousel with prev/next arrows */}
          <div
            className="md:hidden relative"
            style={{ height: "clamp(260px, 72vw, 420px)" }}
          >
            <div
              ref={scrollRef}
              onScroll={onScroll}
              className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden"
            >
              {videos.map((src) => (
                <div key={src} className="shrink-0 w-full h-full snap-center">
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {current > 0 && (
              <button
                onClick={() => scrollTo(current - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-white/75 backdrop-blur-sm rounded-full p-2.5 shadow-md"
                aria-label="Previous video"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M11 14L6 9L11 4" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}

            {current < videos.length - 1 && (
              <button
                onClick={() => scrollTo(current + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-white/75 backdrop-blur-sm rounded-full p-2.5 shadow-md"
                aria-label="Next video"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M7 4L12 9L7 14" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
