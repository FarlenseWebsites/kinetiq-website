"use client"

import FeatureCard from "../ui/cardforexcersice"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const services = [
  {
    title: "Working Professionals",
    description: "Ergonomic pain, fatigue, poor posture, lifestyle stiffness",
    activeDots: 1,
  },
  {
    title: "Professional Sportspersons",
    description: "Injury management and performance training",
    activeDots: 2,
  },
  {
    title: "Children & Teens",
    description: "Posture correction and developmental delays",
    activeDots: 3,
  },
  {
    title: "Post-Surgical Patients",
    description: "Rehabilitation after spine, joint, and ligament surgeries",
    activeDots: 4,
  },
  {
    title: "Geriatric Care",
    description: "Fall prevention, joint stability and mobility restoration",
    activeDots: 5,
  },
  
  {
    title: "Schools & Academies",
    description: "Curated fitness program and posture screening",
    activeDots: 6,
  },
]

export default function Services() {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-[#F4F4F4]">
      <div className="max-w-5xl mx-auto">
        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-2 sm:gap-y-4 mb-10 sm:mb-14 md:mb-16">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              title={service.title}
              description={service.description}
              activeDots={service.activeDots}
              className={index === services.length - 1 ? "sm:col-start-2" : ""}
            />
          ))}
        </div>

        {/* Navigation and Bottom Label */}
        <div className="flex flex-col items-center">
          <ButtonWithTwoDots label="One Stop for" />
          <h1
            className="text-[#373355] font-medium text-center"
            style={{ marginTop: "32px", fontSize: "42px" }}
          >
            Rehab | Posture | Fitness
          </h1>
        </div>
      </div>
    </section>
  )
}
