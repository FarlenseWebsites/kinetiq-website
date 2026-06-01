"use client"

import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa6"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA]">
      {/* Navbar clearance + button (kept exactly as requested) */}
      <div className="pt-20 sm:pt-24 md:pt-28 pb-8 relative z-10 flex justify-center">
        <ButtonWithTwoDots label="Contact Us" />
      </div>

      <div className="relative overflow-hidden w-full aspect-[21/9] bg-[#767198] mt-2 shadow-sm">
        
        {/* 1. BASE IMAGE */}
        {/* Adjusted object position anchors the image better to simulate a "zoomed out" feel without white space */}
       <div className="absolute left-0 w-[63%] z-20 h-full z-0 overflow-hidden rounded-r-[100vw]">
          <Image
            src="/contact.png"
            alt="KinetiQ Sessions"
            fill
            className="object-cover object-left md:object-[25%_center]"
            priority
          />
        </div>

        {/* 2. LEFT FAINT OVERLAY CIRCLE */}
        {/* Centered on the left edge, bulging right */}
        <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 h-full w-[70%] bg-[#767198]/30 rounded-full -translate-x-1/2 z-30 pointer-events-none"></div>

        {/* 3. RIGHT SOLID PURPLE circular AREA */}
        <div
          className="absolute top-1/2 right-[-0%] -translate-y-1/2 aspect-square h-[100%] rounded-full z-10 pointer-events-none"
          style={{
            background: "conic-gradient(from 180deg, #373355 0%, #68628E 100%)",
          }}
        >
          <div className="absolute left-[20%] pt-[25%] inset-0 text-[2vw] m-auto w-[40%] italic flex items-center justify-end">
            Lorem ipsum
            <br />
            Lorem ipsum

          </div>
        </div>


      </div>
    </section>
  )
}