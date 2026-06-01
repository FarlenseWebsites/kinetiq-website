"use client";
import Image from "next/image";

type Variant = "purple" | "orange";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  mirrored?: boolean;
  variant?: Variant;
  showCircle?: boolean;
}

const ACCENT: Record<Variant, string> = {
  purple: "#8681A5",
  orange: "#FF914D",
};

export default function ServiceCard({
  title,
  description,
  imageSrc,
  mirrored = false,
  variant = "purple",
  showCircle = false,
}: ServiceCardProps) {
  const accent = ACCENT[variant];

  return (
    <div
      className="relative w-full aspect-[702/554]"
      style={{ containerType: "inline-size" }}
    >
      {/* SVG background — fills + blob border, behind the photo */}
      <svg
        viewBox="0 0 702 554"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        style={mirrored ? { transform: "scaleX(-1)" } : undefined}
      >
        <path
          d="M3 109 H275.5 C373.531 109 453 188.469 453 286.5 V404
             C453 486.392 387.392 552 305 552 H3 Z"
          fill="#F4F4F4"
          stroke={accent}
          strokeWidth="6"
        />
        <rect x="0" y="0" width="143" height="109" fill={accent} />
      </svg>

      {/* Photo */}
      <div
        className="absolute overflow-hidden group"
        style={
          !mirrored
            ? {
                left: `${(143 / 702) * 100}%`,
                top: `${(7 / 554) * 100}%`,
                right: `${(7 / 702) * 100}%`,
                height: `${(274 / 554) * 100}%`,
                borderRadius: "0 0 4.41cqw 0",
              }
            : {
                left: `${(7 / 702) * 100}%`,
                top: `${(7 / 554) * 100}%`,
                right: `${(143 / 702) * 100}%`,
                height: `${(274 / 554) * 100}%`,
                borderRadius: "0 0 0 4.41cqw",
              }
        }
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* SVG foreground — only the image frame strokes, above the photo */}
      <svg
        viewBox="0 0 702 554"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        style={mirrored ? { transform: "scaleX(-1)" } : undefined}
      >
        {/* Image frame — top edge */}
        <line x1="143" y1="3" x2="698" y2="3" stroke={accent} strokeWidth="6" />
        {/* Image frame — right edge + rounded bottom-right corner */}
        <path
          d="M698 3 V253 C698 270.121 684.121 284 667 284"
          fill="none"
          stroke={accent}
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Image frame — bottom edge, in the open gap between blob and right corner */}
        <line x1="453" y1="284" x2="667" y2="284" stroke={accent} strokeWidth="6" />
      </svg>

      {/* Decorative beige circle — sits below the accent block, inside the blob fill */}
      {showCircle && (
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(36px, 13cqw, 78px)",
            height: "clamp(36px, 13cqw, 78px)",
            backgroundColor: "#DDD0BE",
            top: "20%",
            ...(mirrored ? { right: "2.5%" } : { left: "2.5%" }),
          }}
        />
      )}

      {/* Text content */}
      <div
        className="absolute flex flex-col justify-start overflow-hidden"
        style={
          !mirrored
            ? {
                left: `${(45 / 702) * 100}%`,
                top: `${(308 / 554) * 100}%`,
                width: `${(370 / 702) * 100}%`,
                bottom: `${(30 / 554) * 100}%`,
              }
            : {
                right: `${(45 / 702) * 100}%`,
                top: `${(308 / 554) * 100}%`,
                width: `${(370 / 702) * 100}%`,
                bottom: `${(30 / 554) * 100}%`,
              }
        }
      >
        <h3
          className="font-medium text-[#373355] leading-[110%] tracking-[-0.03em] mb-[2%]"
          style={{ fontSize: "clamp(14px, 4.6cqw, 26px)" }}
        >
          {title}
        </h3>
        <p
          className="text-[#373355] leading-[1.45]"
          style={{ fontSize: "clamp(11px, 2.3cqw, 15px)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
