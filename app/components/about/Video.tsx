"use client"

import ButtonWithTwoDots from "../ui/buttonWithTwodots"

export default function Video() {
  return (
    <section className="relative bg-[#f4f4f4] py-10 px-4 md:px-8">
      <ButtonWithTwoDots label="Tv Video" />

      <div className="mt-20 w-full" style={{ aspectRatio: "21/9" }}>
        <video
          src="/tvvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
    </section>
  )
}
