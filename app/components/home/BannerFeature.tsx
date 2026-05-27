"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

// 1. Extract images into a clean array
const banners = [
    { id: 1, src: "/rehabbanner.png", alt: "Rehab banner" },
    { id: 2, src: "/posturebanner.png", alt: "Posture banner" },
    { id: 3, src: "/fitnessbanner.png", alt: "Fitness banner" },
]

export default function RehabFeature() {
    // 2. Native React State for the active slide
    const [currentIndex, setCurrentIndex] = useState(0)

    // 3. Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
        }, 4000)
        return () => clearInterval(timer) // Cleanup on unmount
    }, [])

    const nextSlide = () => setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1))

    return (
        <section className="w-full">
            {/* Changed from aspect-[5/3] to aspect-[21/9] for a wider, uncropped banner look */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#f4f4f4]">

                {/* Slides - Mapped from array */}
                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                    >
                        {/* Upgraded to Next.js Image for built-in optimization */}
                        <Image
                            src={banner.src}
                            alt={banner.alt}
                            fill
                            className="object-contain object-center"
                            priority={index === 0} // Only preload the very first image to boost page speed
                        />
                    </div>
                ))}

                {/* Dot indicators - Mapped from array to perfectly match slide count */}
                <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-3">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Previous button */}
                <button
                    type="button"
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 z-30 -translate-y-1/2 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/40 focus:outline-none transition-colors"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </button>

                {/* Next button */}
                <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 z-30 -translate-y-1/2 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/40 focus:outline-none transition-colors"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </section>
    )
}