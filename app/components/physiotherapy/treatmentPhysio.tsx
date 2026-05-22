"use client"

import { motion } from "framer-motion"
import PhysioServiceCard from "../ui/PhysioServiceCard"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"
import { physioServiceImageMap } from "../../lib/physioImages"

// ─────────────────────────────────────────────────────────────────────────────
// Add / remove services here. Images are managed in lib/physioImages.ts
// ─────────────────────────────────────────────────────────────────────────────
const physioServices = [
  {
    title: "Orthopaedic Physiotherapy",
    description: "Bone, joint, and muscle rehabilitation for pain-free movement",
  },
  {
    title: "Sports Physiotherapy",
    description: "Injury management, performance training, and recovery optimisation",
  },
  {
    title: "Neurological Physiotherapy",
    description: "Stroke, Parkinson's, and nerve recovery rehabilitation",
  },
  {
    title: "Pediatric Physiotherapy",
    description: "Developmental support and posture care for children",
  },
  {
    title: "Geriatric Physiotherapy",
    description: "Fall prevention, joint stability and mobility restoration for seniors",
  },
  {
    title: "Cardiopulmonary Physiotherapy",
    description: "Breathing exercises and cardiac rehab for respiratory wellness",
  },
  {
    title: "Women's Health Physiotherapy",
    description: "Pelvic floor, hormonal, and postural care for women",
  },
  {
    title: "Antenatal Physiotherapy",
    description: "Safe exercise and posture support during pregnancy",
  },
  {
    title: "Postnatal Physiotherapy",
    description: "Recovery and strengthening after childbirth",
  },
  {
    title: "Post-Surgical Rehabilitation",
    description: "Guided recovery after spine, joint, and ligament surgeries",
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export default function PhysioServicesSection() {
  const isOddTotal = physioServices.length % 2 !== 0

  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-transparent border-t-2 border-[#D2D0DD]">
      <div className="max-w-5xl mx-auto">

        {/* Section badge */}
        <div className=" justify-center mb-8 sm:mb-10">
          <ButtonWithTwoDots label="Treatment" />
          <h1 className="text-center text-2xl sm:text-3xl font-medium bg-gradient-to-r from-[#68628E] to-[#373355] bg-clip-text text-transparent mt-7">
            Physiotherapy Services
          </h1>    
          <p className="text-center text-[#68628E] text-sm sm:text-base italic leading-relaxed max-w-lg mx-auto mt-5 ">
            Hands-on techniques to relieve pain,
            <br />
            restore mobility, and improve joint function.
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="grid gap-x-8 md:gap-x-12 gap-12"
        >
          {physioServices.map((service, idx) => {
            // Pull images from registry — any missing slot uses the default
            const imgs = physioServiceImageMap[service.title] ?? {}
            const isLastOdd = isOddTotal && idx === physioServices.length - 1

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={isLastOdd ? "sm:col-start-2" : ""}
              >
                <PhysioServiceCard
                  title={service.title}
                  description={service.description}
                  mainImage={imgs.image1}
                  stackImageTop={imgs.image2}
                  stackImageBottom={imgs.image3}
                  mainImageAlt={service.title}
                  stackImageTopAlt={`${service.title} detail`}
                  stackImageBottomAlt={`${service.title} exercise`}
                />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}