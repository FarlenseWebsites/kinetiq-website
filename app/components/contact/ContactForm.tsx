"use client"

import Image from "next/image"
import { useState } from "react"
import { FiUser, FiMail, FiPhone } from "react-icons/fi"
import { BsBuilding, BsFileText } from "react-icons/bs"
import { TbTargetArrow } from "react-icons/tb"
import emailjs from "@emailjs/browser"

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    enquiryType: "",
    contact: "",
    description: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          organisation: form.organisation,
          from_email: form.email,
          enquiry_type: form.enquiryType,
          contact: form.contact,
          message: form.description,
          to_email: "info@kinetiqphysiotherapy.com",
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus("success")
      setForm({ name: "", organisation: "", email: "", enquiryType: "", contact: "", description: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact-form" className="w-full bg-[#Fee2d2] overflow-hidden lg:aspect-21/9 scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-full">

        {/* LEFT — image */}
        <div className="relative w-full h-64 lg:h-full overflow-hidden">
          <Image
            src="/contactform1.png"
            alt="Physiotherapy session"
            fill
            className="object-cover object-left"
            priority
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent 65%, #Fee2d2 100%)",
            }}
          />
        </div>

        {/* RIGHT — form */}
        <div className="flex flex-col justify-center max-w-5xl items-center gap-5 px-8 lg:px-12 py-10 lg:py-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl text-center font-medium text-[#373355]">
              We&apos;d love to hear from you
            </h2>
            <p className="mt-2 text-[#373355] text-center text-sm sm:text-base cursor-pointer">
              Fill in your details and we&apos;ll get back to you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InputField
                icon={<FiUser className="text-[#E07B45]" />}
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <InputField
                icon={<BsBuilding className="text-[#E07B45]" />}
                placeholder="Organisation Name"
                name="organisation"
                value={form.organisation}
                onChange={handleChange}
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InputField
                icon={<FiMail className="text-[#E07B45]" />}
                placeholder="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
              {/* Enquiry dropdown */}
              <div className="flex items-center gap-3 bg-[#f4f4f4] border border-[#E07B45] rounded-xl px-4 py-3 shadow-md">
                <TbTargetArrow className="text-[#E07B45] text-lg shrink-0" />
                <select
                  name="enquiryType"
                  value={form.enquiryType}
                  onChange={handleChange}
                  className="flex-1 bg-transparent text-[#68628e] text-sm outline-none border-0 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    I am Enquiring Type
                  </option>
                  <option value="general">General Enquiry</option>
                  <option value="appointment">Book Appointment</option>
                  <option value="corporate">Corporate Wellness</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 3 — full width */}
            <InputField
              icon={<FiPhone className="text-[#E07B45]" />}
              placeholder="Contact No."
              name="contact"
              type="tel"
              value={form.contact}
              onChange={handleChange}
              fullWidth
            />

            {/* Textarea */}
            <div className="flex gap-3 bg-[#f4f4f4] border border-[#E07B45] rounded-xl px-4 py-3 shadow-md">
              <BsFileText className="text-[#E07B45] text-lg mt-0.5 shrink-0" />
              <textarea
                name="description"
                placeholder="Brief Description or Leave Note"
                rows={2}
                value={form.description}
                onChange={handleChange}
                className="flex-1 bg-transparent text-[#373355] text-sm outline-none border-0 resize-none placeholder:text-[#68628e] w-full"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="flex items-center justify-between bg-[#68628e] hover:bg-[#3d3a7a] disabled:opacity-70 disabled:cursor-not-allowed transition-colors text-white font-semibold text-base rounded-full px-8 py-4 w-full"
            >
              <span className="flex-1 text-center">
                {status === "sending" ? "Sending…" : status === "success" ? "Message Sent!" : status === "error" ? "Failed — Try Again" : "Submit"}
              </span>
              <span className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

type InputFieldProps = {
  icon: React.ReactNode
  placeholder: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  fullWidth?: boolean
}

function InputField({ icon, placeholder, name, value, onChange, type = "text", fullWidth }: InputFieldProps) {
  return (
    <div className={`flex items-center gap-3 bg-[#f4f4f4] border border-[#E07B45] rounded-xl px-4 py-2 w-full shadow-md ${fullWidth ? "col-span-full" : ""}`}>
      <span className="text-lg shrink-0">{icon}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 bg-transparent text-[#373355] text-sm outline-none border-0 focus:outline-none placeholder:text-[#68628e] w-full min-w-0"
      />
    </div>
  )
}
