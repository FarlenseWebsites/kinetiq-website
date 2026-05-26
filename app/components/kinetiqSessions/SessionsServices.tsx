"use client"

import { motion } from "framer-motion"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"
import TreatmentCard from "../ui/kinetiqsessionCard"

const sessions = [
  {
    title: "In-Centre Treatment",
    description:
      "Experience hands-on physiotherapy at our KinetiQ centers with access to advanced therapies and specialised equipment. Each session is guided by expert clinicians to ensure precise treatment, faster recovery, and measurable results in a structured environment.",

    images: [
      "/sessions/incentre-1.jpg",
      "/sessions/incentre-2.jpg",
      "/sessions/incentre-3.jpg",
    ],
  },

  {
    title: "Home Visits",
    description:
      "Receive personalised physiotherapy care in the comfort of your home. Ideal for post-surgical recovery, elderly care, or convenience-led treatment, our therapists deliver the same clinical expertise with focused, one-on-one attention.",

    images: [
      "/sessions/home-1.jpg",
      "/sessions/home-2.jpg",
      "/sessions/home-3.jpg",
    ],
  },

  {
    title: "Online Physiotherapy",
    description:
      "Access expert consultations and guided rehabilitation from anywhere. Our online sessions ensure continuity of care with structured programs, real-time guidance, and progress tracking tailored to your needs.",

    images: [
      "/sessions/online-1.jpg",
      "/sessions/online-2.jpg",
      "/sessions/online-3.jpg",
    ],
  },

  {
    title: "Corporate",
    description:
      "Comprehensive workplace wellness solutions designed to reduce pain, improve posture, and enhance employee productivity. From on-site sessions to ergonomic assessments, we help build healthier and more resilient teams.",

    images: [
      "/sessions/corporate-1.jpg",
      "/sessions/corporate-2.jpg",
      "/sessions/corporate-3.jpg",
    ],
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [
        number,
        number,
        number,
        number
      ],
    },
  },
}

export default function SessionsServices() {
  return (
    <section className="relative overflow-hidden border-t  bg-[#F4f4f4] py-14 sm:py-16 lg:py-24">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-14 flex flex-col items-center text-center sm:mb-20">
          
          <ButtonWithTwoDots label="We Offer" />

          <h2 className="mt-5 text-[28px] font-light tracking-[-0.03em] text-[#68628E] sm:text-[40px]">
           Lorem Ipsum
          </h2>

          
        </div>

        {/* CARDS */}
        <div
         
          className="grid gap-8 lg:gap-10"
        >
          {sessions.map((session, index) => (
            <div
              key={index}
              className="flex justify-center"
            >
              <TreatmentCard
                title={session.title}
                description={session.description}
                images={session.images}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}