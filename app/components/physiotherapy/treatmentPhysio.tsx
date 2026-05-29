"use client"
import PhysioServiceCard from "../ui/PhysioServiceCard"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const physioServices = [
  {
    title: "Orthopaedic Physiotherapy",
    description: "Focused care for bones, joints, muscles, ligaments, and tendons. Treats injuries, pain, and movement restrictions to restore strength and function. Addresses acute and chronic conditions through structured, evidence-based rehabilitation.",
    image: "/excerciseimg.png",
  },
  {
    title: "Sports Physiotherapy",
    description: "Injury management and performance-focused rehabilitation for active individuals. Targets faster recovery, sports-specific injury prevention, and performance enhancement. Guides athletes through a safe, structured return to sport.",
    image: "/excerciseimg.png",
  },
  {
    title: "Neurological Physiotherapy",
    description: " Rehabilitation for nerve and neurological conditions affecting movement and function. Focuses on restoring coordination, balance, and independence through structured therapy. Extends clinical care into the home environment for continued functional progress.",
    image: "/excerciseimg.png",
  },
  {
    title: "Paediatric Physiotherapy",
    description: "Support for children with developmental, postural, sports injury, or movement challenges. Encourages healthy growth, functional mobility, and age-appropriate physical development. Tailored to each child's needs with goal-oriented, progressive rehabilitation.",
    image: "/excerciseimg.png",
  },
  {
    title: "Geriatric Physiotherapy",
    description: "Specialized care for age-related mobility, balance, and strength concerns. Aims to improve functional independence, prevent falls, and support active aging. Designed around the unique physical demands and limitations of older adults.",
    image: "/excerciseimg.png",
  },
  {
    title: "Cardiopulmonary Physiotherapy",
    description: "Supports recovery in cardiac conditions, lung disorders, and post-surgical rehabilitation. Focuses on improving cardiovascular endurance, respiratory efficiency, and functional capacity. Structured to safely progress activity levels under clinical supervision.",
    image: "/excerciseimg.png",
  },
  {
    title: "Post-Surgical Rehabilitation",
    description: "Structured recovery following ligament reconstruction, joint replacement, and spine procedures. Restores mobility, strength, and functional movement through phased rehabilitation protocols. Ensures a safe, monitored return to daily activities and physical independence.",
    image: "/excerciseimg.png",
  },
]

// Image height as % of card width: image_h = card_w * (280/702)
// CSS margin-top % is relative to parent width (= column width ≈ card width)
const IMAGE_HEIGHT_PCT = `${((280 / 702) * 100).toFixed(3)}%`

const leftCards  = physioServices.filter((_, i) => i % 2 === 0) // [0,2,4,6]
const rightCards = physioServices.filter((_, i) => i % 2 === 1) // [1,3,5]
const lastIsLeft = physioServices.length % 2 === 1              // true → last in left col

export default function PhysioServicesSection() {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-transparent border-t-2 border-[#D2D0DD]">
      <div className="max-w-6xl mx-auto">

        <div className="justify-center mb-8 sm:mb-10">
          <ButtonWithTwoDots label="Treatment" />
          <h1 className="text-center text-2xl sm:text-3xl font-medium bg-linear-to-r from-[#68628E] to-[#373355] bg-clip-text text-transparent mt-7">
            Physiotherapy Services
          </h1>
          <p className="text-center text-[#373355] text-sm sm:text-base italic leading-relaxed max-w-lg mx-auto mt-5">
            Hands-on techniques to relieve pain,
            <br />
            restore mobility, and improve joint function.
          </p>
        </div>

        {/* Mobile: single column, alternating mirrored */}
        <div className="flex flex-col gap-8 md:hidden">
          {physioServices.map((service, idx) => (
            <PhysioServiceCard
              key={idx}
              title={service.title}
              description={service.description}
              imageSrc={service.image}
              mirrored={idx % 2 === 1}
            />
          ))}
        </div>

        {/* Desktop: staggered 2-column */}
        <div className="hidden md:flex gap-12 lg:gap-16">

          {/* Left column */}
          <div className="flex-1 flex flex-col gap-8 lg:gap-10">
            {leftCards.map((service, i) => (
              <PhysioServiceCard
                key={i}
                title={service.title}
                description={service.description}
                imageSrc={service.image}
                showCircle={lastIsLeft && i === leftCards.length - 1}
              />
            ))}
          </div>

          {/* Right column — first card offset to sit below the left card's image */}
          <div className="flex-1 flex flex-col gap-8 lg:gap-12">
            {rightCards.map((service, i) => (
              <div
                key={i}
                style={i === 0 ? { marginTop: IMAGE_HEIGHT_PCT } : undefined}
              >
                <PhysioServiceCard
                  title={service.title}
                  description={service.description}
                  imageSrc={service.image}
                  mirrored
                  showCircle={i === 0 || (!lastIsLeft && i === rightCards.length - 1)}
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
