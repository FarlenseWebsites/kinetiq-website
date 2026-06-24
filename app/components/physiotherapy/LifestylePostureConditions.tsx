"use client"

import PhysioServiceCard from "../ui/PhysioServiceCard"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"
import { slugifyAnchor } from "../../lib/anchors"

const conditions = [
  {
    title: "Postural Imbalance",
    description: "Poor posture leading to chronic pain, muscular imbalance, and movement dysfunction. Corrects spinal alignment and addresses compensatory movement patterns causing discomfort. Combines targeted exercise, manual therapy, and ergonomic guidance for sustained improvement.",
    image: "/mobility1.png",
  },
  {
    title: "Muscle Tightness & Imbalances",
    description: "Restricted mobility and uneven muscle function resulting from overuse or sedentary patterns. Restores flexibility, muscular balance, and strength through structured rehabilitation. Addresses underlying movement inefficiencies to prevent recurrence and improve performance.",
    image: "/muscle1.png",
  },
  {
    title: "Repetitive Strain Injuries",
    description: " Injuries caused by repetitive daily movements, prolonged postures, or overuse patterns. Treatment focuses on tissue recovery, load management, and movement correction. Includes preventive strategies to reduce the risk of re-injury in occupational and daily contexts.",
    image: "/repetitive1.png",
  },
  {
    title: "Ergonomic & Workplace Optimisation",
    description: "Addresses posture-related strain from daily habits, work setups, and lifestyle patterns. Applicable across all age groups — from children to working professionals and the elderly. Improves spinal alignment, reduces pain, and enhances overall movement efficiency.",
    image: "/ergonomic1.png",
  },
]

const IMAGE_HEIGHT_PCT = `${((280 / 702) * 100).toFixed(3)}%`

const leftCards  = conditions.filter((_, i) => i % 2 === 0)
const rightCards = conditions.filter((_, i) => i % 2 === 1)

export default function ConditionsSection() {
  return (
    <section id="physio-lifestyle-postural" className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-transparent scroll-mt-32">
      <div className="max-w-6xl mx-auto">

        <div className="justify-center mb-8 sm:mb-10">
          <ButtonWithTwoDots label="Services" />
          <h1 className="text-center text-2xl sm:text-3xl font-medium bg-linear-to-r from-[#68628E] to-[#373355] bg-clip-text text-transparent mt-7">
            Lifestyle & Postural Conditions
          </h1>
          
        </div>

        {/* Mobile: single column, alternating mirrored */}
        <div className="flex flex-col gap-14 md:hidden">
          {conditions.map((condition, idx) => (
            <div key={idx}>
              <PhysioServiceCard
                title={condition.title}
                description={condition.description}
                imageSrc={condition.image}
                variant="orange"
                mirrored={idx % 2 === 1}
              />
            </div>
          ))}
        </div>

        {/* Desktop: staggered 2-column */}
        <div className="hidden md:flex gap-12 lg:gap-16">

          <div className="flex-1 flex flex-col gap-14 lg:gap-16 pt-8">
            {leftCards.map((condition, i) => (
              <div
                key={i}
                id={slugifyAnchor(condition.title)}
                className="relative scroll-mt-32"
                style={i === 0 ? { containerType: "inline-size" } : undefined}
              >
                <PhysioServiceCard
                  title={condition.title}
                  description={condition.description}
                  imageSrc={condition.image}
                  variant="orange"
                />
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-14 lg:gap-16">
            {rightCards.map((condition, i) => (
              <div key={i} id={slugifyAnchor(condition.title)} className="scroll-mt-32" style={i === 0 ? { marginTop: `calc(${IMAGE_HEIGHT_PCT} + 3.5rem)` } : undefined}>
                <PhysioServiceCard
                  title={condition.title}
                  description={condition.description}
                  imageSrc={condition.image}
                  variant="orange"
                  mirrored
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
