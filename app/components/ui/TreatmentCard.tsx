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
const NORMAL_PATH = `
  M 0 100
  H 435
  A 200 200 0 0 1 635 300
  A 200 200 0 0 1 435 500
  H 0
  Z
`;

// Mirrored D-shape: semicircular bump left, flat right
// Center (265, 300), radius 200
const MIRRORED_PATH = `
  M 700 100
  H 265
  A 200 200 0 0 0 65 300
  A 200 200 0 0 0 265 500
  H 700
  Z
`;

export default function TreatmentCard({
  title,
  description,
  imageSrc,
  mirrored = false,
}: TreatmentCardProps) {
  return (
    <div className="relative w-full aspect-700/500">
      {/* Card Shape */}
      <svg
        viewBox="0 0 700 500"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d={mirrored ? MIRRORED_PATH : NORMAL_PATH}
          fill="#F4F4F4"
          stroke={ORANGE}
          strokeWidth="8"
        />
      </svg>

      {/* Image Circle */}
      <div
        className="absolute overflow-hidden rounded-full"
        style={{
          width: "42%",
          aspectRatio: "1",
          top: "0%",
          ...(mirrored ? { left: "0%" } : { right: "0%" }),
          border: `8px solid ${ORANGE}`,
        }}
      >
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div
        className="absolute flex flex-col justify-center"
        style={{
          ...(mirrored ? { right: "10%" } : { left: "10%" }),
          top: "28%",
          width: "42%",
        }}
      >
        <h3
          className="font-semibold text-[#373355] leading-tight"
          style={{ fontSize: "clamp(13px, 1.35vw, 20px)", marginBottom: "8px" }}
        >
          {title}
        </h3>
        <p
          className="text-[#373355]"
          style={{
            fontSize: "clamp(10px, 0.82vw, 13px)",
            lineHeight: 1.5,
            opacity: 0.85,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
