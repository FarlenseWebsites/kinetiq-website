"use client"

import { useState } from "react"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const partnershipTypes = [
  "Individual Patient",
  "Corporate Partnership",
  "Sports Team",
  "Healthcare Provider",
  "Insurance Partnership",
  "Other",
]

const inputClass =
  "w-full border border-[#E0DFF0] rounded-md px-3 py-2 text-sm text-[#373355] placeholder-[#C8C6D8] bg-[#FAFAFC] focus:outline-none focus:border-[#68628E] transition-colors"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    partnershipType: "",
    contact: "",
    description: "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <section className="relative bg-[#f4f4f4] py-10 md:py-16 px-4 sm:px-6 md:px-8 overflow-hidden">

      {/* Top-right orange dot cluster */}
      <div className="pointer-events-none absolute right-6 sm:right-10 md:right-16 top-10 sm:top-14 flex flex-col gap-[6px] z-0">
        <div className="flex gap-[6px]">
          <div className="w-[11px] h-[11px] sm:w-[14px] sm:h-[14px] rounded-full bg-[#FF914D]" />
          <div className="w-[11px] h-[11px] sm:w-[14px] sm:h-[14px] rounded-full bg-[#FF914D]" />
        </div>
        <div className="w-[11px] h-[11px] sm:w-[14px] sm:h-[14px] rounded-full bg-[#FF914D] self-end" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Badge */}
        <ButtonWithTwoDots label="Get in Touch" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-16 md:mt-20 w-full">

          {/* THE SMART GRID:
            - Mobile: 1 Column
            - Tablet (sm): 2 Columns
            - Desktop (lg): 3 Columns 
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-6 lg:gap-y-5">

            {/* Name */}
            <div className="flex flex-col gap-1 lg:col-start-1 lg:row-start-1">
              <label htmlFor="name" className="text-xs text-[#9A97A9]">Name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} className={inputClass} />
            </div>

            {/* Organisation */}
            <div className="flex flex-col gap-1 lg:col-start-2 lg:row-start-1">
              <label htmlFor="org" className="text-xs text-[#9A97A9]">Organisation Name</label>
              <input id="org" name="organisation" type="text" value={form.organisation} onChange={handleChange} className={inputClass} />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 lg:col-start-1 lg:row-start-2">
              <label htmlFor="email" className="text-xs text-[#9A97A9]">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} />
            </div>

            {/* Partnership Type */}
            <div className="flex flex-col gap-1 lg:col-start-2 lg:row-start-2">
              <label htmlFor="pt" className="text-xs text-[#9A97A9]">Partnership Type</label>
              <select id="pt" name="partnershipType" value={form.partnershipType} onChange={handleChange} className={inputClass}>
                <option value="">Select partnership type ▾</option>
                {partnershipTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-1 lg:col-start-1 lg:row-start-3">
              <label htmlFor="contact" className="text-xs text-[#9A97A9]">Contact</label>
              <input id="contact" name="contact" type="tel" value={form.contact} onChange={handleChange} className={inputClass} />
            </div>

            {/* Brief Description 
                - On mobile/tablet: spans 2 columns at the bottom (sm:col-span-2)
                - On desktop: jumps to the top right and spans 2 rows down (lg:col-start-3 lg:row-start-1 lg:row-span-2)
            */}
            <div className="flex flex-col gap-1 sm:col-span-2 lg:col-start-3 lg:row-start-1 lg:row-span-2">
              <label htmlFor="desc" className="text-xs text-[#9A97A9]">Brief Description About You</label>
              <textarea
                id="desc"
                name="description"
                value={form.description}
                onChange={handleChange}
                className={`${inputClass} resize-none flex-1 min-h-[120px] lg:h-full`}
              />
            </div>
            
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <button
              type="submit"
              className="bg-[#FF914D] text-white px-8 py-2.5 rounded-md text-sm font-medium hover:bg-[#68628E] active:bg-[#373355] transition-colors duration-300 w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
          
        </form>
      </div>

      {/* Bottom-left orange dot cluster */}
      <div className="pointer-events-none absolute left-6 sm:left-10 md:left-16 bottom-10 sm:bottom-14 flex flex-col gap-[6px] z-0">
        <div className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] rounded-full bg-[#FF914D]" />
        <div className="flex gap-[6px]">
          <div className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] rounded-full bg-[#FF914D]" />
          <div className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] rounded-full bg-[#FF914D]" />
        </div>
      </div>
    </section>
  )
}