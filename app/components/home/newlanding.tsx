"use client"

import React from "react"
import { motion } from "framer-motion"
import BookConsultationButton from "../ui/bookConsulationButton"

// Custom Code-Based Spiral - Matches your design, scales infinitely
const EnergySpiral = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
    {/* Center glowing core */}
    <circle cx="50" cy="50" r="2.5" fill="#FF8A00" />
    
    {/* Expanding rings with perfectly even spacing and fading opacity */}
    <circle cx="50" cy="50" r="7.5" fill="none" stroke="#FF8A00" strokeWidth="2.5" opacity="1" />
    <circle cx="50" cy="50" r="12.5" fill="none" stroke="#FF8A00" strokeWidth="2.5" opacity="0.85" />
    <circle cx="50" cy="50" r="17.5" fill="none" stroke="#FF8A00" strokeWidth="2.5" opacity="0.7" />
    <circle cx="50" cy="50" r="22.5" fill="none" stroke="#FF8A00" strokeWidth="2.5" opacity="0.55" />
    <circle cx="50" cy="50" r="27.5" fill="none" stroke="#FF8A00" strokeWidth="2.5" opacity="0.4" />
    <circle cx="50" cy="50" r="32.5" fill="none" stroke="#FF8A00" strokeWidth="2.5" opacity="0.25" />
    <circle cx="50" cy="50" r="37.5" fill="none" stroke="#FF8A00" strokeWidth="2.5" opacity="0.15" />
    <circle cx="50" cy="50" r="42.5" fill="none" stroke="#FF8A00" strokeWidth="2.5" opacity="0.08" />
    <circle cx="50" cy="50" r="47.5" fill="none" stroke="#FF8A00" strokeWidth="2.5" opacity="0.03" />
  </svg>
)

export default function NewLanding() {
  return (
    <section
      className="relative w-full bg-[#F4F4F4] overflow-hidden"
      style={{
        marginTop: "calc(clamp(2.38rem, 6.12vw, 4.08rem) + clamp(1.5rem, 3.6svh, 2.5rem))"
      }}
    >
      <div className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden">
        
        {/* LAYER 1 (z-0): Background Room Scene */}
        <div className="absolute inset-0 z-0">
          <img
            src="/nl2.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* LAYER 2 (z-10): Animated Focus Spiral (DESKTOP ONLY) */}
        {/* hidden lg:flex ensures this completely vanishes on phones and tablets */}
        <div className="hidden lg:flex absolute z-10 pointer-events-none items-center justify-center 
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            lg:w-[280px] lg:h-[280px] lg:mt-[22vh] lg:ml-[-100px]
            xl:w-[35vw] xl:h-[35vw] xl:mt-[15vh] xl:ml-[-2vw]"
        >
          <motion.div
            animate={{
              scale: [0.9, 1.1, 0.9],
              rotate: [0, 360],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              scale: { duration: 4, ease: "easeInOut", repeat: Infinity },
              rotate: { duration: 40, ease: "linear", repeat: Infinity },
              opacity: { duration: 4, ease: "easeInOut", repeat: Infinity }
            }}
            className="w-full h-full origin-center flex items-center justify-center"
          >
            {/* Using the custom SVG component instead of an image file */}
            <EnergySpiral />
          </motion.div>
        </div>

        {/* LAYER 3 (z-20): Foreground Transparent Cutout */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <img
            src="/nl3.svg" 
            alt="Therapist and Patient Cutout"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* LAYER 4 (z-30): Text Overlay & CTA */}
        <div className="absolute inset-0 z-30 flex justify-center md:justify-end items-start p-6 pt-12 md:p-12 lg:p-[4vw] select-none pointer-events-none">
          
          <div className="relative z-40 pointer-events-auto flex flex-col items-center md:items-end text-center md:text-right w-full max-w-[95%] md:max-w-[70%] lg:max-w-[55%] xl:max-w-[42%] p-0">
            
            <span className="text-[#2F295C] italic font-normal tracking-wide text-sm sm:text-base md:text-2xl lg:text-2xl xl:text-[1.35vw] mb-2 xl:mb-[0.6vw] block">
              One-stop for all your
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[4.5vw] font-medium leading-[1.1] xl:leading-[1.05] tracking-tight mb-4 xl:mb-[1.2vw]">
              <span className="text-[#68628E]">Rehab </span>
              <span className="text-white">and</span>
              <br />
              <span className="text-white">Fitness </span>
              <span className="text-[#68628E]">Needs</span>
            </h1>

            <p className="text-[#2F295C]/95 text-base sm:text-lg md:text-2xl lg:text-xl xl:text-[1.1vw] leading-relaxed mb-6 xl:mb-[1.8vw] font-normal max-w-full">
              We combine movement science, hands-on physiotherapy and personalized care to make you feel, move better and feel stronger.
            </p>

            <div className="flex flex-col items-center md:items-end w-full">
              <BookConsultationButton className="shadow-lg border-black w-full md:w-auto px-6 py-3 md:px-10 md:py-5 lg:px-8 lg:py-4 xl:px-[2vw] xl:py-[0.7vw] text-base md:text-xl lg:text-lg xl:text-[1.1vw] rounded-lg xl:rounded-[0.5vw] bg-white text-[#373355] font-normal hover:bg-[#68628e] hover:text-white transition-all duration-300" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}