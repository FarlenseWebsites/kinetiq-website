"use client"

import React, { useState } from 'react';

interface FeatureCardProps {
  title?: string;
  description?: string;
  activeDots?: number;
  className?: string;
}

// Each entry is [leftColIdx | null, rightColIdx]
const dotRows: [number | null, number][] = [
  [4, 0],
  [5, 1],
  [3, 2],
];

// Fill order: row 0 left→right, then each row fills right→left (col2 first, then col1)
const dotOrder = [4, 0, 1, 5, 2, 3];

const dotClass =
  "w-3.75 h-3.75 sm:w-4.25 sm:h-4.25 md:w-4.75 md:h-4.75 lg:w-6 lg:h-6 xl:w-7 xl:h-7 rounded-full";

const FeatureCard: React.FC<FeatureCardProps> = ({
  title = "Working Professionals",
  description = "Ergonomic pain, fatigue, poor posture, lifestyle stiffness",
  activeDots = 0,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const dotStyle = (idx: number, colIdx: number): React.CSSProperties => {
    const isActive = dotOrder.indexOf(idx) < activeDots;
    return {
      backgroundColor: isActive && isHovered ? '#373355' : '#ff914d',
      transition: 'background-color 0.3s ease',
      transitionDelay: isHovered && isActive ? `${colIdx * 120}ms` : '0ms',
    };
  };

  return (
    <div
      className={`group relative w-full max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto my-3 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rectangle */}
      <div
        className="relative z-10 flex flex-col justify-center
          min-h-30 sm:min-h-33.75 md:min-h-37.5 lg:min-h-45 xl:min-h-52
          bg-[#f4f4f4]
          border-2 border-[#ff914d] group-hover:border-[#373355]
          rounded-l-[10px] transition-colors duration-300
          pl-4 sm:pl-5 lg:pl-8 py-4 lg:py-6
          w-[calc(100%-60px)] sm:w-[calc(100%-67.5px)] md:w-[calc(100%-75px)] lg:w-[calc(100%-90px)] xl:w-[calc(100%-104px)]
          pr-15 sm:pr-[67.5px] md:pr-18.75 lg:pr-22.5 xl:pr-26"
      >
        <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#373355] leading-tight mb-1 sm:mb-1.5 lg:mb-2 break-words">
          {title}
        </h2>
        <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base text-[#68628e] leading-snug break-words">
          {description}
        </p>
      </div>

      {/* Circle */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20
          w-30 h-30 sm:w-33.75 sm:h-33.75 md:w-37.5 md:h-37.5 lg:w-45 lg:h-45 xl:w-52 xl:h-52 rounded-full
          bg-[#f4f4f4]
          border-2 border-[#ff914d] group-hover:border-[#373355]
          flex items-center justify-center
          transition-colors duration-300"
      >
        <div className="flex flex-col">
          {dotRows.map(([leftIdx, rightIdx], rowIdx) => (
            <div key={rowIdx} className="flex">
              {/* Left dot or transparent spacer */}
              <div
                className={dotClass}
                style={
                  leftIdx !== null
                    ? dotStyle(leftIdx, 0)
                    : { backgroundColor: 'transparent' }
                }
              />
              {/* Right dot */}
              <div
                className={dotClass}
                style={dotStyle(rightIdx, 1)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
