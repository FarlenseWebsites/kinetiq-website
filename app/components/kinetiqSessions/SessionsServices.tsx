"use client"

import { motion } from "framer-motion"
import PhysioServiceCard from "../ui/PhysioServiceCard"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const sessions = [
  {
    title: "In-Centre Treatment",
    description:
      "Experience hands-on physiotherapy at our KinetiQ centers with access to advanced therapies and specialised equipment. Each session is guided by expert clinicians to ensure proper treatment, faster recovery, and measurable results in a structured environment.",
  },
  {
    title: "Home Visits",
    description:
      "Receive personalised physiotherapy care in the comfort of your home. Ideal for post-surgical recovery, elderly care, or convenience-led treatment, our therapists deliver the same clinical expertise with focused, one-on-one attention.",
  },
  {
    title: "Online Physiotherapy",
    description:
      "Access guided consultations and guided rehabilitation from anywhere. Our online sessions ensure continuity of care with structured programs, real-time guidance, and progress tracking tailored to your needs.",
  },
  {
    title: "Corporate",
    description:
      "Comprehensive workplace wellness solutions designed to reduce pain, improve posture, and enhance employee productivity. From on-site sessions to ergonomic assessments, we help build healthier, more resilient teams.",
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
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

export default function SessionsServices() {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-transparent border-t-2 border-[#D2D0DD]">
      <div className="max-w-5xl mx-auto">

        <div className="justify-center mb-8 sm:mb-10">
          <ButtonWithTwoDots label="We offer" />
          <h1 className="text-center text-2xl sm:text-3xl font-medium bg-gradient-to-r from-[#ff914d] to-[#e07030] bg-clip-text text-transparent mt-7">
            Session Types
          </h1>
          <p className="text-center text-[#68628E] text-sm sm:text-base italic leading-relaxed max-w-lg mx-auto mt-5">
            Choose the format that fits your life — we bring the care to you.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-12"
        >
          {sessions.map((session, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <PhysioServiceCard
                title={session.title}
                description={session.description}
                mainImageAlt={session.title}
                stackImageTopAlt={`${session.title} detail`}
                stackImageBottomAlt={`${session.title} exercise`}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
