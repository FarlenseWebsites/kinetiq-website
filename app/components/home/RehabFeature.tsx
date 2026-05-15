"use client"

export default function RehabFeature() {
    return (
        <section className="w-full ">
            <div id="rehab-carousel" className="relative w-full" data-carousel="slide" data-carousel-interval="4000">

                {/* Slides */}
                <div className="relative w-full aspect-8/5 overflow-hidden">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img
                            src="/rehabbanner.png"
                            alt="Rehab banner"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="/posturebanner.png"
                            alt="Posture banner"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="/fitnessbanner.png"
                            alt="Fitness banner"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-3">
                    <button type="button" className="w-3 h-3 rounded-full bg-white/60 hover:bg-white transition-colors" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0" />
                    <button type="button" className="w-3 h-3 rounded-full bg-white/60 hover:bg-white transition-colors" aria-label="Slide 2" data-carousel-slide-to="1" />
                    <button type="button" className="w-3 h-3 rounded-full bg-white/60 hover:bg-white transition-colors" aria-label="Slide 3" data-carousel-slide-to="2" />
                </div>

                {/* Previous button */}
                <button
                    type="button"
                    className="absolute left-3 top-1/2 z-30 -translate-y-1/2 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/40 focus:outline-none transition-colors"
                    data-carousel-prev
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </button>

                {/* Next button */}
                <button
                    type="button"
                    className="absolute right-3 top-1/2 z-30 -translate-y-1/2 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/40 focus:outline-none transition-colors"
                    data-carousel-next
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
