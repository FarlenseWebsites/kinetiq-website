import Image from "next/image";

type TreatmentCardProps = {
  title: string;
  description: string;
  images?: string[];
};

export default function TreatmentCard({
  title,
  description,
  images = [],
}: TreatmentCardProps) {
  return (
    <div className=" overflow-hidden w-full bg-[#9692B0]">
      {/* ── Photo area ── */}
      <div className="relative w-full aspect-[4/3]">
        {/* Clipped Image */}
        <Image
          src={images[0]}
          alt={title}
          fill
          className="object-cover"
          style={{ clipPath: "ellipse(50% 78% at 60% 18%)" }}
        />
      </div>


        {/* ── Text area ── */}
        <div className="px-5  pb-7 z-10 -mt-2  bg-[#9692B0]">
        <h3
          className="mb-2 font-bold leading-tight"
          style={{
            fontSize: "clamp(24px, 2.3vw, 38px)",
          }}
        >
          {title}
        </h3>

        <p
          className="leading-relaxed "
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