"use client";

import Image from "next/image";

interface TreatmentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  mirrored?: boolean;
}

const ORANGE = "#FF914D";

// D-shape: flat left, semicircular bump right
// Center (435, 300), radius 200 — two quarter-arcs form a perfect semicircle
// strokeWidth = 8, so inset = 4
// D-shape: flat left, semicircular bump right
// Center (435, 300), radius 200 — two quarter-arcs form a perfect semicircle
// strokeWidth = 8, so inset = 4
const NORMAL_PATH = `
  M 4 104
  H 435
  A 196 196 0 0 1 631 300
  A 196 196 0 0 1 435 496
  H 4
  Z
`;

const MIRRORED_PATH = `
  M 696 104
  H 265
  A 196 196 0 0 0 69 300
  A 196 196 0 0 0 265 496
  H 696
  Z
`;

export default function TreatmentCard({
  title,
  description,
  imageSrc,
  mirrored = false,
}: TreatmentCardProps) {
  return (
    <div className="relative w-full @container transition-all duration-300">
      {/* Background Shape */}
      <div
        className={`absolute bottom-0 w-[90%] bg-[#F4F4F4] border-[6px] transition-all duration-300 ${
          mirrored
            ? "right-0 rounded-l-full"
            : "left-0 rounded-r-full"
        }`}
        style={{
          top: "14.8cqw",
          borderColor: ORANGE,
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 w-full">
        {/* Floating Image */}
        <div
          className={`relative overflow-hidden rounded-full transition-all duration-300 ${
            mirrored ? "float-left" : "float-right"
          }`}
          style={{
            width: "48%",
            aspectRatio: "1",
            marginTop: "0%",
            shapeOutside: "circle(50%)",
            shapeMargin: "clamp(10px, 3cqw, 24px)",
            border: `clamp(3px, 1.4cqw, 6px) solid ${ORANGE}`,
            ...(mirrored
              ? { marginLeft: "2%", marginRight: "0%" }
              : { marginRight: "2%", marginLeft: "0%" }),
          }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div
          className="transition-all duration-300"
          style={{
            textAlign: mirrored ? "right" : "left",
            paddingTop: "20cqw",
            paddingBottom: "14cqw",
            paddingLeft: mirrored ? "14cqw" : "6cqw",
            paddingRight: mirrored ? "6cqw" : "14cqw",
          }}
        >
          <h3
            className="font-medium text-[#373355] leading-tight"
            style={{
              fontSize: "clamp(16px, 4.5cqw, 24px)",
              marginBottom: "8px",
            }}
          >
            {title}
          </h3>

          <p
            className="text-[#373355]"
            style={{
              fontSize: "clamp(12px, 3.2cqw, 16px)",
              lineHeight: 1.5,
              opacity: 0.85,
            }}
          >
            {description}
          </p>
        </div>

        <div className="clear-both" />
      </div>
    </div>
  );
}
