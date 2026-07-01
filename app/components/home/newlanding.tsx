"use client"

import React from "react"
import { motion } from "framer-motion"
import BookConsultationButton from "../ui/bookConsulationButton"

export default function NewLanding() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#F4F4F4]"
      style={{
        marginTop: "calc(clamp(2.38rem, 6.12vw, 4.08rem) + clamp(1.5rem, 3.6svh, 2.5rem))"
      }}
    >
      {/* 
        Strict 21:9 aspect ratio container fixed across all screen sizes.
      */}
      <div className="relative w-full min-h-screen overflow-hidden">

        {/* Layer 1: Background Room Scene (heroback.png) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/heroback.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Layer 2: Animated Orange Spiral SVG (herospiral.svg) */}
        {/* 
          Centered near left-[41.5%] and top-[51%].
          Animates scale and opacity from 1% to 100% infinitely in a looping wave pulse,
          along with a steady background rotation.
          Width increased to 42% for a larger visual impact behind the patient's head.
        */}
        <motion.div
          animate={{
            scale: [0.01, 2],
            opacity: [0.1, 1, 0],
            rotate: 360
          }}
          transition={{
            scale: {
              duration: 3.5,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "loop"
            },
            opacity: {
              duration: 3.5,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "loop"
            },
            rotate: {
              duration: 120,
              ease: "linear",
              repeat: Infinity
            }
          }}
          className="absolute z-10 pointer-events-none 
                     left-[43.5%] top-[51%] w-[42%] -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src="/herospiral.svg"
            alt="Hero Spiral Animation"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Layer 3: Foreground Transparent Cutout (heromainimg_transparent.png) */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-end justify-start">
          <img
            src="/herobanner.png"
            alt="Therapist and Patient Cutout"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Layer 4: Text Overlay & CTA */}
        {/* 
          Positioned top-right using justify-end (horizontal end) and items-start (vertical top).
          Proportional margins, paddings, and font sizes using vw units to keep the layout fixed
          and scaled beautifully on all devices.
        */}
        <div className="absolute inset-0 z-30 flex justify-end items-start p-[4vw] select-none">

          <div className="relative z-40 flex flex-col items-end text-right max-w-[42%]">
            {/* Tagline */}
            <span className="text-[#2F295C] italic font-normal tracking-wide text-[1.35vw] mb-[0.6vw] block ">
              One-stop for all your
            </span>

            {/* Heading: Rehab and Fitness Needs */}
            <h1 className="text-[4.5vw] font-medium leading-[1.05] tracking-tight mb-[1.2vw]">
              <span className="text-[#68628E] ">Rehab </span>
              <span className="text-white ">and</span>
              <br />
              <span className="text-white ">Fitness </span>
              <span className="text-[#68628E] ">Needs</span>
            </h1>

            {/* Description */}
            <p className="text-[#2F295C]/95 text-[1.1vw] leading-relaxed mb-[1.8vw] font-normal max-w-[90%]">
              We combine movement science, hands-on physiotherapy and personalized care to make you feel, move better and feel stronger.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col items-end">
              <BookConsultationButton className="shadow-lg border-black px-[2vw] py-[0.7vw] text-[1.1vw] rounded-[0.5vw] bg-white text-[#373355] font-normal hover:bg-[#68628e] hover:text-white transition-all duration-300" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
