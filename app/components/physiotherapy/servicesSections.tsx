"use client"

import PhysioServiceCard from "../ui/PhysioServiceCard"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const nerveConditions = [
  {
    title: "Sciatic Nerve Pain",
    description: "Pain radiating from the lower back through the hip and into the leg. Treatment focuses on relieving nerve compression, reducing inflammation, and improving mobility. Combines manual therapy, targeted exercise, and postural correction for lasting relief.",
    image: "/excerciseimg.png",
  },
  {
    title: "Cervical Radiculopathy",
    description: "Nerve compression in the neck causing arm pain, tingling, or numbness. Treatment targets the source of compression to relieve symptoms and restore cervical function. Combines manual therapy, traction techniques, and corrective exercise for effective management.",
    image: "/excerciseimg.png",
  },
  {
    title: "Lumbar Radiculopathy",
    description: "Nerve-related lower back pain that radiates into the legs. Focuses on reducing nerve irritation, decompressing affected structures, and restoring movement. Managed through a combination of manual therapy, exercise, and functional rehabilitation.",
    image: "/excerciseimg.png",
  },
  {
    title: "Neuropathic Pain",
    description: "Chronic nerve pain presenting as burning, tingling, or sharp recurrent sensations. Includes conditions such as migraines and peripheral neuropathy managed through targeted therapy. Treatment focuses on reducing sensitization, improving function, and preventing recurrence.",
    image: "/excerciseimg.png",
  },
]

const IMAGE_HEIGHT_PCT = `${((280 / 702) * 100).toFixed(3)}%`

const leftCards  = nerveConditions.filter((_, i) => i % 2 === 0)
const rightCards = nerveConditions.filter((_, i) => i % 2 === 1)

export default function ServicesSection() {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">

        <div className="justify-center mb-8 sm:mb-10">
          <ButtonWithTwoDots label="Services" />
          <h1 className="text-center text-2xl sm:text-3xl font-medium bg-linear-to-r from-[#68628E] to-[#373355] bg-clip-text text-transparent mt-7">
            Nerve & Radiating Pain Conditions
          </h1>
          <p className="text-center text-[#373355] text-sm sm:text-base italic leading-relaxed max-w-lg mx-auto mt-5">
            Targeted treatment for nerve compression,
            <br />
            radiating pain, and neuropathic symptoms.
          </p>
        </div>

        {/* Mobile: single column, alternating mirrored */}
        <div className="flex flex-col gap-14 md:hidden">
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

          <div className="flex-1 flex flex-col gap-14 lg:gap-16 pt-8">
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
                      width: "clamp(36px, 13cqw, 72px)",
                      height: "clamp(36px, 13cqw, 72px)",
                      backgroundColor: "#DDD0BE",
                      right: "calc(-6.5cqw - 28px)",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-14 lg:gap-16">
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
