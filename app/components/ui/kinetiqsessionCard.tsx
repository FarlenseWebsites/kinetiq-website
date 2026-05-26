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
    <div className="grid grid-cols-2 gap-4 overflow-hidden w-full ">
      
      {/* LEFT PANEL */}
       <div
      className="overflow-hidden bg-[#9692B0]"
      
    >
      {/* ── Photo area ── */}
      <div className="relative w-full aspect-[9/6]">
        
        {/* Clipped Image */}
        <img
          src={ "/spaceimg.png"}
          alt={title}
          className="h-full w-full object-cover"
          style={{
            clipPath: "ellipse(50% 68% at 60% 18%)",
          }}
        />
          
        
      </div>

      {/* ── Text area ── */}
      <div className="px-5  pb-7  bg-[#9692B0]">
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
            fontStyle: "italic",
          }}
        >
          {description}
        </p>
      </div>
    </div>


      {/* RIGHT PANEL */}
      <div className="grid grid-rows-2 gap-4 bg-[#f4f4f4] ">
        
        {/* TOP IMAGE */}
        <div className="relative overflow-hidden bg-gray-300">
          {images[1] && (
            <Image
              src={images[1]}
              alt={title}
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* BOTTOM IMAGE */}
        <div className="relative overflow-hidden bg-gray-300">
          {images[2] && (
            <Image
              src={images[2]}
              alt={title}
              fill
              className="object-cover"
            />
          )}
        </div>

      </div>
    </div>
    
  );
}