"use client"

import { useEffect, useRef, useState } from "react"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4"]

export default function VideoGallery() {
  const [active, setActive] = useState(1)
  // slots 0-2 = desktop refs, slots 3-5 = mobile refs
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(Array(6).fill(null))

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return
      video.play().catch(() => {})
    })
  }, [])

  return (
    <section style={{ background: "#F4F4F4" }} className="">
      <style>{`
        @keyframes spin-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .ring-spin { animation: spin-ring 3s linear infinite; }
      `}</style>

      {/* Desktop */}
       <div className="flex items-center justify-center pb-20">
          <ButtonWithTwoDots label="Testimonial" />
       </div>
      <div
        className="hidden md:flex items-center justify-center"
        style={{ gap: "36px", minHeight: "540px", padding: "0 48px" }}
      >
        {videos.map((src, i) => {
          const isActive = i === active
          return (
            <div
              key={src}
              onMouseEnter={() => setActive(i)}
              style={{
                position: "relative",
                width: isActive ? "300px" : "175px",
                aspectRatio: "9 / 16",
                flexShrink: 0,
                transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
                cursor: isActive ? "default" : "pointer",
              }}
            >
             

              {/* Video clip */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "16px",
                  overflow: "hidden",
                  filter: isActive ? "none" : "blur(1.5px)",
                  transition: "filter 0.5s ease",
                }}
              >
                <video
                  ref={(el) => { videoRefs.current[i] = el }}
                  src={src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  controls
                  style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Mobile: accordion expand */}
      <div
        className="flex md:hidden items-stretch gap-3 px-4"
        style={{ height: "clamp(240px, 72vw, 380px)" }}
      >
        {videos.map((src, i) => {
          const isActive = i === active
          return (
            <div
              key={src}
              onClick={() => setActive(i)}
              style={{
                flex: isActive ? 2 : 1,
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1), filter 0.5s ease",
                filter: isActive ? "none" : "blur(1px)",
                cursor: isActive ? "default" : "pointer",
              }}
            >
              <video
                ref={(el) => { videoRefs.current[3 + i] = el }}
                src={src}
                muted
                loop
                playsInline
                autoPlay
                controls={isActive}
                style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
