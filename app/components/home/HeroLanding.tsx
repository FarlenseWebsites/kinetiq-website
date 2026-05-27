
"use client"


import { motion, useReducedMotion } from "framer-motion"

import BookConsultationButton from "../ui/bookConsulationButton"

import HeroBackground from "../ui/HeroBackground"

import OrangeCircles7 from "../ui/7circles"



const revealContainer = {
	hidden: {},
	show: {
 		transition: { staggerChildren: 0.12, delayChildren: 0.4 },
 	},
}


const revealItem = {
 	hidden: { y: 80, opacity: 0 },
 	show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}


export default function HeroLanding() {
 	const shouldReduceMotion = useReducedMotion()

 	return (
 		<section className="relative isolate min-h-[80vh] md:min-h-[80vh] lg:h-[100svh] overflow-hidden bg-[#F4F4F4]">
 			{/* Background */}
 			<HeroBackground />
 			{/* Darken background slightly for reliable contrast */}
 			<div aria-hidden className="absolute inset-0 z-5 pointer-events-none" />

 			{/* Content Layer */}
 			<div className="relative z-10 flex justify-center px-5 sm:px-6 lg:px-8">

 				<motion.div
 					variants={revealContainer}
 					initial={shouldReduceMotion ? undefined : "hidden"}
 					animate={shouldReduceMotion ? undefined : "show"}
 					className="mx-auto flex w-full max-w-5xl flex-col items-center  text-center text-white pt-28 sm:pt-32 md:pt-30 lg:pt-35 pb-40 sm:pb-40"
 				>

 					{/* Heading */}
 					<div className="overflow-hidden">
 						<motion.h2 variants={revealItem} className="font-bold  leading-tight tracking-tight" style={{ fontSize: "clamp(1.75rem, 5vw + 0.5rem, 4.5rem)" }}>
 							Pain is not permanent,
 						</motion.h2>
 					</div>

 					<div className="mt-2 overflow-hidden sm:mt-3">
 						<motion.h1 variants={revealItem} className="font-bold leading-tight tracking-tight" style={{ fontSize: "clamp(1.75rem, 5vw + 0.5rem, 4.5rem)" }}>
 							It&apos;s a message.
 						</motion.h1>
 					</div>

 					{/* Subtitle */}
 					<div className="mt-6 overflow-hidden sm:mt-8">
 						<motion.p variants={revealItem} className="max-w-2xl px-2 font-light leading-relaxed text-slate-100" style={{ fontSize: "clamp(0.813rem, 1.5vw + 0.25rem, 1.125rem)" }}>
 							We combine movement science, hands-on physiotherapy and
 							<br className="hidden sm:block" />
 							personalized care to treat the root cause, not just the symptoms.
 						</motion.p>
 					</div>

 					{/* CTA */}
 					<motion.div variants={revealItem} className="mt-8 flex flex-col items-center gap-3 sm:mt-10">
 						<BookConsultationButton className="shadow-xl" />
 						<p className="text-[clamp(0.625rem,1.1vw,0.75rem)] italic tracking-wide text-slate-300">Recovery and Fitness Backed by Science</p>
 					</motion.div>

 				</motion.div>
 			</div>

 			{/* Bottom Decoration */}
 			<motion.div initial={shouldReduceMotion ? undefined : { y: 120, opacity: 0 }} animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }} className="absolute inset-x-0 bottom-10 md:bottom-0 lg:bottom-0  z-20 pointer-events-none">
 				<OrangeCircles7 />
 			</motion.div>
 		</section>
 	)
}

