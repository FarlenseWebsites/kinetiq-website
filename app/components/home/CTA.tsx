import BookConsultationButton from "../ui/bookConsulationButton"
import Image from "next/image"

export default function CTA() {
  return (
    <section className="relative flex bg-[#F4F4F4] items-center justify-center overflow-hidden w-full min-h-svh">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/treatmenttable.jpg"
          alt="Treatment room background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: "22% 42%",
            transform: "scale(1.25) translateX(-6%)",
          }}
          aria-hidden
        />
        {/* Dark overlay for readable text */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Clear hard separator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-[#F4F4F4]" />

      <div className="relative z-10 text-center px-5 mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semi text-[#373355] mb-4 sm:mb-6 italic tracking-tight drop-shadow-lg">
          We&apos;re ready<br />when you are.
        </h2>
        <BookConsultationButton />
        <p className="mt-1 text-sm  italic text-[#373355]/90">
          Takes less then 30 seconds
        </p>
      </div>
    </section>
  )
}
