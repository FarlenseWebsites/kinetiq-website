"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { cn } from "../../lib/utils"
import BookConsultationButton from "../ui/bookConsulationButton"
import {
  aboutLinks,
  contactLinks,
  physiotherapyLinks,
  sessionLinks,
  treatmentLinks,
} from "../../lib/navigation"

import KinetiQLogo from "../../../public/KinetiQLogo.png"

// --- Mega Menu Data ---
const physiotherapyMegaMenu = [
  {
    title: "Physiotherapy Services",
    items: [
      { label: "Orthopaedic Physiotherapy", href: physiotherapyLinks.orthopaedic },
      { label: "Sports Physiotherapy", href: physiotherapyLinks.sports },
      { label: "Neurological Physiotherapy", href: physiotherapyLinks.neurological },
      { label: "Paediatric Physiotherapy", href: physiotherapyLinks.paediatric },
      { label: "Geriatric Physiotherapy", href: physiotherapyLinks.geriatric },
      { label: "Cardiopulmonary Physiotherapy", href: physiotherapyLinks.cardiopulmonary },
      { label: "Post-Surgical Rehabilitation", href: physiotherapyLinks.postSurgical },
    ],
  },
  {
    title: "Women’s Health & Recovery",
    items: [
      { label: "Women’s Health Physiotherapy", href: physiotherapyLinks.womensHealth },
      { label: "Prenatal Physiotherapy", href: physiotherapyLinks.prenatal },
      { label: "Postnatal Physiotherapy", href: physiotherapyLinks.postnatal },
      { label: "Pelvic Floor Rehabilitation", href: physiotherapyLinks.pelvicFloor },
    ],
  },
  {
    title: "Nerve & Radiating Pain Conditions",
    items: [
      { label: "Sciatic Nerve Pain", href: physiotherapyLinks.sciatic },
      { label: "Cervical Radiculopathy", href: physiotherapyLinks.cervical },
      { label: "Lumbar Radiculopathy", href: physiotherapyLinks.lumbar },
      { label: "Neuropathic Pain", href: physiotherapyLinks.neuropathic },
    ],
  },
  {
    title: "Lifestyle & Postural Conditions",
    items: [
      { label: "Postural Imbalance", href: physiotherapyLinks.posturalImbalance },
      { label: "Muscle Tightness & Imbalances", href: physiotherapyLinks.muscleImbalances },
      { label: "Repetitive Strain Injuries", href: physiotherapyLinks.repetitiveStrain },
      { label: "Ergonomic & Workplace Dysfunction", href: physiotherapyLinks.ergonomicWorkplace },
    ],
  },
]

const treatmentMegaMenu = [
  {
    title: "Core Assessment & Corrective Care",
    titleColor: "#88849F",
    items: [
      { label: "Postural Correction Programs", href: treatmentLinks.posturalCorrectionPrograms },
      { label: "Ergonomic Assessment\n& Workplace Therapy", href: treatmentLinks.ergonomicAssessment },
      { label: "Mobility & Corrective Exercise Therapy", href: treatmentLinks.mobilityCorrectiveExercise },
      { label: "Breathing & Respiratory Therapy", href: treatmentLinks.breathingRespiratory },
      { label: "EMG Biofeedback", href: treatmentLinks.emgBiofeedback },
    ],
  },
  {
    title: "Manual Therapy",
    titleColor: "#88849F",
    items: [
      { label: "Joint Mobilization", href: treatmentLinks.jointMobilization },
      { label: "Myofascial Release", href: treatmentLinks.myofascialRelease },
      { label: "Trigger Point Therapy", href: treatmentLinks.triggerPointTherapy },
      { label: "Lymphatic Drainage Therapy", href: treatmentLinks.lymphaticDrainage },
    ],
  },
  {
    title: "Pain & Injury Areas",
    titleColor: "#88849F",
    items: [
      { label: "ANF Therapy", href: treatmentLinks.anfTherapy },
      { label: "Electrotherapy", href: treatmentLinks.electrotherapy },
      { label: "Class IV Laser Therapy", href: treatmentLinks.classIVLaser },
      { label: "Shockwave Therapy", href: treatmentLinks.shockwaveTherapy },
      { label: "Dry Needling", href: treatmentLinks.dryNeedling },
    ],
  },
  {
    title: "Recovery & Performance Therapies",
    titleColor: "#88849F",
    items: [
      { label: "Sports Recovery Therapy", href: treatmentLinks.sportsRecovery },
      { label: "Kinesio Taping", href: treatmentLinks.kinesioTaping },
      { label: "Cupping Therapy", href: treatmentLinks.cuppingTherapy },
      { label: "Vibration Plate Therapy", href: treatmentLinks.vibrationPlate },
      { label: "BlazePod Training", href: treatmentLinks.blazepodTraining },
      { label: "Boba Pro Training", href: treatmentLinks.bobaProTraining },
    ],
  },
  {
    title: "Women's Health & Prenatal Care",
    titleColor: "#88849F",
    items: [
      { label: "Women's Health Physiotherapy", href: treatmentLinks.womensHealthPhysio },
      { label: "Prenatal Physiotherapy", href: treatmentLinks.prenatalPhysio },
      { label: "Postnatal Physiotherapy", href: treatmentLinks.postnatalPhysio },
      { label: "Pelvic Floor Rehabilitation", href: treatmentLinks.pelvicFloorRehab },
    ],
  },
]

const sessionsMenu = [
  { label: "In Centre Treatment", href: sessionLinks.inCentre },
  { label: "Home Visits", href: sessionLinks.homeVisits },
  { label: "Online Physiotherapy", href: sessionLinks.online },
  { label: "Corporate", href: sessionLinks.corporate },
]

const aboutMenu = [
  { label: "About KinetiQ", href: aboutLinks.hero },
  { label: "Clinical Excellence", href: aboutLinks.intro },
  { label: "The KinetiQ Foundation", href: aboutLinks.values },
  { label: "KinetiQ Community", href: aboutLinks.events },
]

const contactMenu = [
  { label: "Visit KinetiQ", href: contactLinks.centres },
  { label: "Make an Enquiry", href: contactLinks.form },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Added isMega property to determine layout behavior dynamically
  const navItems = [
    { label: "Specialties", href: "/physiotherapy", menuType: "physio", isMega: true },
    { label: "Sessions", href: "/kinetiqSessions", menuType: "sessions", isMega: false },
    { label: "Treatment", href: "/treatments", menuType: "treatment", isMega: true },
    { label: "About", href: "/about", menuType: "about", isMega: false },
    { label: "Contact", href: "/contact", menuType: "contact", isMega: false },
  ]

  return (
    <header
      className={cn(`
        fixed top-0 left-0 right-0 z-50
        w-full
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
        py-[clamp(0.75rem,1.8svh,1.25rem)]
        bg-opacity-90 backdrop-blur-md
        transition-all duration-300
        
      `)}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex items-center justify-between
          gap-4
          relative
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={KinetiQLogo}
            alt="KinetiQ Logo"
            priority
            className="h-auto w-[clamp(7rem,18vw,12rem)]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 min-w-0">
          {navItems.map((item) => (
            <div
              key={item.label}
              // If it's a mega menu, use 'static' so the absolute child targets the main navbar width.
              // If it's a small menu, use 'relative' so it drops straight down from the text.
              className={cn(
                "group flex items-center h-full",
                item.isMega ? "static" : "relative"
              )}
            >
              <Link
                href={item.href}
                className="
                  inline-block
                  py-4
                  text-sm
                  xl:text-[18px]
                  font-medium
                  whitespace-nowrap
                  text-[#373355]
                  hover:text-[#68638E]
                  transition-colors duration-300
                "
              >
                {item.label}
              </Link>

              {/* ------------------------------------------------ */}
              {/* LARGE MEGA MENUS (Centered to max-w-7xl Wrapper) */}
              {/* ------------------------------------------------ */}

              {/* Physiotherapy Mega Menu */}
              {item.menuType === "physio" && (
                <div
                  className="
                    absolute top-full left-0 right-0
                    pt-6
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300 ease-in-out
                    z-50 cursor-default
                  "
                >
                  <div className="mx-auto w-full max-w-275 bg-white rounded-2xl shadow-xl border border-slate-100 p-8 cursor-auto">
                    <div className="grid grid-cols-4 gap-8">
                      {physiotherapyMegaMenu.map((group, colIdx) => (
                        <div key={colIdx}>
                          <h3 className="text-[#88849F] text-[1.15rem] font-medium mb-6 leading-tight">
                            {group.title}
                          </h3>
                          <ul className="space-y-4">
                            {group.items.map((subItem: { label: string; href: string }, itemIdx) => (
                              <li key={itemIdx}>
                                <Link
                                  href={subItem.href}
                                  className="text-[#9A97A9] hover:text-[#68638E] text-[15px] transition-colors block"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Treatment Mega Menu */}
              {item.menuType === "treatment" && (
                <div
                  className="
                    absolute top-full left-0 right-0
                    pt-6
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300 ease-in-out
                    z-50 cursor-default
                  "
                >
                  <div className="mx-auto w-full max-w-275 bg-white rounded-2xl shadow-xl border border-slate-100 p-8 cursor-auto">
                    <div className="grid grid-cols-5 gap-8">
                      {treatmentMegaMenu.map((group, idx) => (
                        <div key={idx}>
                          <h3 className="text-[1.15rem] font-medium mb-6 leading-tight" style={{ color: group.titleColor }}>
                            {group.title}
                          </h3>
                          <ul className="space-y-4">
                            {group.items.map((subItem: { label: string; href: string }, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  href={subItem.href}
                                  className="text-[#9A97A9] hover:text-[#986c55] text-[15px] transition-colors whitespace-pre-line block"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ------------------------------------------------ */}
              {/* SMALL DROPDOWNS (Left-aligned straight down)     */}
              {/* ------------------------------------------------ */}

              {/* Sessions Simple Dropdown */}
              {item.menuType === "sessions" && (
                <div
                  className="
                    absolute top-full left-0
                    pt-6
                    min-w-55
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300 ease-in-out
                    z-50 cursor-default
                  "
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 cursor-auto">
                    <ul className="space-y-4">
                      {sessionsMenu.map((subItem: { label: string; href: string }, idx) => (
                        <li key={idx}>
                          <Link
                            href={subItem.href}
                            className="block text-[#9A97A9] hover:text-[#986c55] text-[15px] transition-colors whitespace-nowrap"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* About Us Simple Dropdown */}
              {item.menuType === "about" && (
                <div
                  className="
                    absolute top-full left-0
                    pt-6
                    min-w-55
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300 ease-in-out
                    z-50 cursor-default
                  "
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 cursor-auto">
                    <ul className="space-y-4">
                      {aboutMenu.map((subItem: { label: string; href: string }, idx) => (
                        <li key={idx}>
                          <Link
                            href={subItem.href}
                            className="block text-[#9A97A9] hover:text-[#986c55] text-[15px] transition-colors whitespace-nowrap"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Contact Us Simple Dropdown */}
              {item.menuType === "contact" && (
                <div
                  className="
                    absolute top-full left-0
                    pt-6
                    min-w-50
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300 ease-in-out
                    z-50 cursor-default
                  "
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 cursor-auto">
                    <ul className="space-y-4">
                      {contactMenu.map((subItem: { label: string; href: string }, idx) => (
                        <li key={idx}>
                          <Link
                            href={subItem.href}
                            className="block text-[#9A97A9] hover:text-[#986c55] text-[15px] transition-colors whitespace-nowrap"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* CTA Button */}
          <BookConsultationButton
            className="
              hidden lg:inline-flex
              bg-[#ff914d] text-white border-none
              hover:bg-[#68638E] hover:text-white
              active:bg-[#373355]
            "
          />

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle Menu"
            className="
              lg:hidden p-2 flex items-center justify-center
              text-[#373355] hover:text-[#ff914d]
              transition-colors duration-300
            "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          `
          lg:hidden
          absolute top-full left-0 right-0
          overflow-hidden
          bg-white/95 backdrop-blur-md
          border-t border-slate-200 shadow-xl
          transition-all duration-300 ease-in-out
        `,
          isMobileMenuOpen
            ? "max-h-125 opacity-100 py-6"
            : "max-h-0 opacity-0 py-0 pointer-events-none"
        )}
      >
        <div className="px-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                py-3 text-sm font-medium
                text-[#373355] hover:text-[#986c55]
                transition-colors duration-300
              "
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 mt-1 border-t border-slate-100">
            <BookConsultationButton
              className="
                w-full justify-center text-white
                bg-[#ff914d] border-none
                hover:bg-[#68638E] hover:text-white
                active:bg-[#373355]
              "
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  )
}