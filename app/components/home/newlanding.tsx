"use client"

import React from "react"
import { motion } from "framer-motion"
import BookConsultationButton from "../ui/bookConsulationButton"

export default function NewLanding() {
  return (
    <section
      className="relative w-full bg-[#F4F4F4] overflow-hidden"
      style={{
        marginTop: "calc(clamp(2.38rem, 6.12vw, 4.08rem) + clamp(1.5rem, 3.6svh, 2.5rem))"
      }}
    >
      <div className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden">
        
        {/* Layer 1: Background Room Scene */}
        <div className="absolute inset-0 z-0">
          <img
            src="/heroback.png"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Layer 2: Animated Orange Spiral SVG */}
        {/* FIX: Wrapper handles positioning, motion.div handles animation */}
        <div className="absolute z-10 pointer-events-none left-[43.5%] top-[51%] w-[80%] md:w-[42%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [0.01, 2],
              opacity: [0.1, 1, 0],
              rotate: 360
            }}
            transition={{
              scale: { duration: 3.5, ease: "easeOut", repeat: Infinity, repeatType: "loop" },
              opacity: { duration: 3.5, ease: "easeOut", repeat: Infinity, repeatType: "loop" },
              rotate: { duration: 120, ease: "linear", repeat: Infinity }
            }}
            className="w-full h-full origin-center  hidden md:block w-full h-full origin-center"
          >
            <img
              src="/herospiral.svg"
              alt="Hero Spiral Animation"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>

        {/* Layer 3: Foreground Transparent Cutout */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-end justify-center md:justify-start">
          <img
            src="/herobanner2.png"
            alt="Therapist and Patient Cutout"
            className="w-full h-[80vh] md:h-full object-contain md:object-cover object-bottom"
          />
        </div>

        {/* Layer 4: Text Overlay & CTA */}
        {/* FIX: Switched to responsive breakpoints (md:, lg:) to handle mobile vs desktop layout */}
        <div className="absolute inset-0 z-30 flex justify-center md:justify-end items-start p-6 pt-12 md:p-[4vw] select-none">
          
          <div className="relative z-40 flex flex-col items-center md:items-end text-center md:text-right w-full max-w-[95%] sm:max-w-[80%] md:max-w-[45%] lg:max-w-[42%] md:bg-transparent p-4 md:p-0">
            
            {/* Tagline */}
            <span className="text-[#2F295C] italic font-normal tracking-wide text-sm sm:text-base md:text-[1.35vw] mb-2 md:mb-[0.6vw] block drop-shadow-md md:drop-shadow-none">
              One-stop for all your
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-[4.5vw] font-medium leading-[1.1] md:leading-[1.05] tracking-tight mb-4 md:mb-[1.2vw] drop-shadow-md md:drop-shadow-none">
              <span className="text-[#68628E]">Rehab </span>
              <span className="text-white">and</span>
              <br />
              <span className="text-white">Fitness </span>
              <span className="text-[#68628E]">Needs</span>
            </h1>

            {/* Description */}
            <p className="text-[#2F295C]/95 text-base sm:text-lg md:text-[1.1vw] leading-relaxed mb-6 md:mb-[1.8vw] font-normal max-w-full md:max-w-[90%] drop-shadow-md md:drop-shadow-none">
              We combine movement science, hands-on physiotherapy and personalized care to make you feel, move better and feel stronger.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col items-center md:items-end w-full">
              <BookConsultationButton className="shadow-lg border-black w-full md:w-auto px-6 py-3 md:px-[2vw] md:py-[0.7vw] text-base md:text-[1.1vw] rounded-lg md:rounded-[0.5vw] bg-white text-[#373355] font-normal hover:bg-[#68628e] hover:text-white transition-all duration-300" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}