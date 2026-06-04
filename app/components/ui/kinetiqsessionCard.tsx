import Image from "next/image";

type TreatmentCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function TreatmentCard({
  title,
  description,
  image,
}: TreatmentCardProps) {
  return (
    <div className=" overflow-hidden w-full bg-[#9692B0]">
      {/* ── Photo area ── */}
      <div className="relative w-full aspect-[4/3]">
        {/* Clipped Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-fit"
          style={{ clipPath: "ellipse(50% 78% at 45% 18%)", transform: "scaleX(-1)" }}
        />
      </div>


        {/* ── Text area ── */}
        <div className="px-5  pb-7 z-10 -mt-2  bg-[#9692B0]">
        <h3
          className="mb-2 font-medium leading-tight text-white"
          style={{
            fontSize: "clamp(24px, 2.5vw, 40px)",
          }}
        >
          {title}
        </h3>

        <p
          className="leading-relaxed text-white"
          style={{
            fontSize: "clamp(13px, 1.2vw, 16px)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}