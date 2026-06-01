"use client";
import TreatmentCard from "../ui/TreatmentCard";
import ButtonWithTwoDots from "../ui/buttonWithTwodots";

interface Treatment {
  title: string;
  description: string;
  image: string;
}

interface TreatmentSectionProps {
  label: string;
  title: string;
  subtitle?: string;
  treatments: Treatment[];
  variant?: "purple" | "orange";
}

export default function TreatmentSection({
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
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <ButtonWithTwoDots label={label} />
          <h2
            className={`text-center text-2xl sm:text-3xl font-medium mt-7 bg-linear-to-r ${titleGradient} bg-clip-text text-transparent`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`text-center text-sm sm:text-base italic leading-relaxed max-w-lg mx-auto mt-5 ${subtitleColor}`}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {treatments.map((t, idx) => (
            <TreatmentCard
              key={idx}
              title={t.title}
              description={t.description}
              imageSrc={t.image}
              mirrored={idx % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
