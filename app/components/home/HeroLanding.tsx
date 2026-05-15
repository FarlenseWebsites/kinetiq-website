"use client"

import { motion } from "framer-motion"
import BookConsultationButton from "../ui/bookConsulationButton"
import HeroBackground from "../ui/HeroBackground"
import OrangeCircles7 from "../ui/7circles"


export default function HeroLanding() {

  const revealContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  }

  const revealItem = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#F9F9F9] flex flex-col items-center justify-center ">

      {/* Hero Background */}
      <HeroBackground />

      {/* Content */}
      <motion.div
        variants={revealContainer}
        initial="hidden"
        animate="show"
        className="
          relative z-10
          flex flex-col items-center text-center
          w-full
          px-5 sm:px-6 md:px-8
          pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-[14svh] md:pb-[8svh] xl:pt-[17svh] xl:pb-[10svh]
          max-w-5xl mx-auto
          text-white
        "
      >

        {/* Heading */}
        <div className="overflow-hidden">
          <motion.h1
            variants={revealItem}
            className="font-bold tracking-tight leading-tight italic"
            style={{ fontSize: "clamp(1.75rem, 5vw + 0.5rem, 4.5rem)" }}
          >
            Pain is not permanent,
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-1 sm:mt-2">
          <motion.h1
            variants={revealItem}
            className="font-bold tracking-tight leading-tight italic"
            style={{ fontSize: "clamp(1.75rem, 5vw + 0.5rem, 4.5rem)" }}
          >
            It&apos;s a message.
          </motion.h1>
        </div>

        {/* Paragraph */}
        <div className="overflow-hidden mt-5 sm:mt-8">
          <motion.p
            variants={revealItem}
            className="font-light italic text-slate-100 leading-relaxed max-w-2xl px-2 sm:px-0"
            style={{ fontSize: "clamp(0.813rem, 1.5vw + 0.25rem, 1.125rem)" }}
          >
            We combine movement science, hands-on physiotherapy and
            <br />
            personalized care to treat the root cause, not just the symptoms.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          variants={revealItem}
          className="flex flex-col items-center gap-3 sm:gap-4 mt-8 sm:mt-10"
        >
          <BookConsultationButton className="shadow-xl" />

          <p className="text-[10px] sm:text-xs text-slate-300 italic tracking-wide">
            Backed by science • No quick fixes
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <OrangeCircles7 />
      </motion.div>

    </section>
  )
}