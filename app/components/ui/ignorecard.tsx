"use client";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
}: ServiceCardProps) {
  return (
    <div className="relative w-full max-w-[702px] aspect-[702/554]">
      {/* SVG Background */}
      <svg
        viewBox="0 0 702 554"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Main white shape */}
        <path
          d="M306 551C387.186 551 453 485.186 453 404V283.5C453 185.469 373.531 106 275.5 106H3V551H306Z"
          fill="#F4F4F4"
          stroke="#8681A5"
          strokeWidth="6"
        />
        {/* Purple top-left block */}
        <rect x="0" y="0" width="143" height="109" fill="#8681A5" />
        {/* Image area border */}
        <path
          d="M139 4V284H667C684.121 284 698 270.121 698 253V4H139Z"
          fill="none"
          stroke="#8681A5"
          strokeWidth="8"
        />
        {/* Seam cover: left vertical */}
        <rect x="135" y="108" width="9" height="180" fill="#F4F4F4" />
        {/* Seam cover: bottom horizontal */}
        <rect x="135" y="279" width="320" height="10" fill="#F4F4F4" />
      </svg>

      {/* Image — all positions use % so they scale with the card */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: `${(139 / 702) * 100}%`,
          top: `${(4 / 554) * 100}%`,
          right: `${(4 / 702) * 100}%`,
          height: `${(280 / 554) * 100}%`,
          borderRadius: `0 0 ${(35 / 702) * 100}% 0`,
        }}
      >
        <Image src={imageSrc} alt={title} fill className="object-cover object-top rounded-br-[25px]" />
      </div>

      {/* Content — clamped font sizes scale with the card width */}
      <div
        className="absolute flex flex-col justify-start overflow-hidden"
        style={{
          left: `${(45 / 702) * 100}%`,
          top: `${(305 / 554) * 100}%`,
          width: `${(370 / 702) * 100}%`,
          bottom: `${(30 / 554) * 100}%`,
        }}
      >
        <h3
          className="font-medium text-[#373355] leading-[110%] tracking-[-0.03em] mb-[2%]"
          style={{ fontSize: "clamp(13px, 2.2cqw, 32px)" }}
        >
          {title}
        </h3>
        <p
          className="text-[#373355] leading-[1.45]"
          style={{ fontSize: "clamp(9px, 1.0cqw, 16px)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}