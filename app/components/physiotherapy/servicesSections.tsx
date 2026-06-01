"use client"

import PhysioServiceCard from "../ui/PhysioServiceCard"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const nerveConditions = [
  {
    title: "Sciatic Nerve Pain",
    description: "Sciatic nerve inflammation causing sharp, radiating pain from the lower back down the leg.",
    image: "/excerciseimg.png",
  },
  {
    title: "Cervical Radiculopathy",
    description: "Pinched cervical nerve root causing arm pain, weakness, and numbness.",
    image: "/excerciseimg.png",
  },
  {
    title: "Lumbar Radiculopathy",
    description: "Compressed lumbar nerve root causing leg pain and restricted mobility.",
    image: "/excerciseimg.png",
  },
  {
    title: "Neuropathic Pain",
    description: "Chronic nerve damage causing burning, tingling, and hypersensitivity.",
    image: "/excerciseimg.png",
  },
]

const IMAGE_HEIGHT_PCT = `${((280 / 702) * 100).toFixed(3)}%`

const leftCards  = nerveConditions.filter((_, i) => i % 2 === 0)
const rightCards = nerveConditions.filter((_, i) => i % 2 === 1)

export default function ServicesSection() {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-transparent border-t-2 border-[#D2D0DD]">
      <div className="max-w-6xl mx-auto">

        <div className="justify-center mb-8 sm:mb-10">
          <ButtonWithTwoDots label="Services" />
          <h1 className="text-center text-2xl sm:text-3xl font-medium bg-linear-to-r from-[#ff914d] to-[#e06010] bg-clip-text text-transparent mt-7">
            Nerve & Radiating Pain Conditions
          </h1>
          <p className="text-center text-[#7a4020] text-sm sm:text-base italic leading-relaxed max-w-lg mx-auto mt-5">
            Targeted treatment for nerve compression,
            <br />
            radiating pain, and neuropathic symptoms.
          </p>
        </div>

        {/* Mobile: single column, alternating mirrored */}
        <div className="flex flex-col gap-8 md:hidden">
          {nerveConditions.map((condition, idx) => (
            <PhysioServiceCard
              key={idx}
              title={condition.title}
              description={condition.description}
              imageSrc={condition.image}
              variant="orange"
              mirrored={idx % 2 === 1}
            />
          ))}
        </div>

        {/* Desktop: staggered 2-column */}
        <div className="hidden md:flex gap-12 lg:gap-16">

          <div className="flex-1 flex flex-col gap-8 lg:gap-10 pt-8">
            {leftCards.map((condition, i) => (
              <div
                key={i}
                className="relative"
                style={i === 0 ? { containerType: "inline-size" } : undefined}
              >
                <PhysioServiceCard
                  title={condition.title}
                  description={condition.description}
                  imageSrc={condition.image}
                  variant="orange"
                />
                {i === 0 && (
                  <div
                    className="absolute rounded-full pointer-events-none z-10"
                    style={{
                      width: "clamp(36px, 13cqw, 78px)",
                      height: "clamp(36px, 13cqw, 78px)",
                      backgroundColor: "#DDD0BE",
                      right: "clamp(-39px, -6.5cqw, -18px)",
                      top: "55%",
                      transform: "translateY(-50%)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-8 lg:gap-10">
            {rightCards.map((condition, i) => (
              <div key={i} style={i === 0 ? { marginTop: `calc(${IMAGE_HEIGHT_PCT} + 3.5rem)` } : undefined}>
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
