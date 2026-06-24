"use client";
import TreatmentCard from "../ui/TreatmentCard";
import ButtonWithTwoDots from "../ui/buttonWithTwodots";
import { slugifyAnchor } from "../../lib/anchors";

interface Treatment {
  title: string;
  description: string;
  image: string;
}

interface TreatmentSectionProps {
  id?: string;
  label: string;
  title: string;
  subtitle?: string;
  treatments: Treatment[];
  variant?: "purple" | "orange";
}

export default function TreatmentSection({
  id,
  label,
  title,
  subtitle,
  treatments,
  variant = "orange",
}: TreatmentSectionProps) {
  const titleGradient =
    variant === "orange"
      ? "from-[#ff914d] to-[#e06010]"
      : "from-[#68628E] to-[#373355]";
  const subtitleColor =
    variant === "orange" ? "text-[#7a4020]" : "text-[#373355]";

  return (
    <section id={id} className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <ButtonWithTwoDots label={label} />
          <h2
            className={`text-center text-2xl sm:text-3xl font-medium mt-7 bg-linear-to-r ${titleGradient} bg-clip-text text-transparent`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`text-center text-sm sm:text-base  leading-relaxed max-w-lg mx-auto mt-5 ${subtitleColor}`}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 xl:gap-14 md:pb-16">
          {treatments.map((t, idx) => (
            <div
              key={idx}
              id={slugifyAnchor(t.title)}
              className={`scroll-mt-32 transition-all duration-300 ${
                idx % 2 === 1 ? "md:translate-y-40" : ""
              }`}
            >
              <TreatmentCard
                title={t.title}
                description={t.description}
                imageSrc={t.image}
                mirrored={idx % 2 === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
