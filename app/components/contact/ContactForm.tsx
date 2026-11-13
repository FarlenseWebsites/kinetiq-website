"use client"

import Image from "next/image"
import { useState } from "react"
import { FiUser, FiMail, FiPhone } from "react-icons/fi"
import { BsBuilding, BsFileText } from "react-icons/bs"
import { TbTargetArrow } from "react-icons/tb"
import emailjs from "@emailjs/browser"

// NOTE: NEXT_PUBLIC_* values are baked in at BUILD time.
// They must be set in .env.local (local) AND in Cloudflare build variables (production).
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ""
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ""
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""

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
  // Exact reason for a failure, shown under the button so it can be fixed without opening DevTools
  const [errorMsg, setErrorMsg] = useState("")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()

    // Keys missing at build time → show which one in the browser console
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("[ContactForm] EmailJS env vars missing at build time:", {
        NEXT_PUBLIC_EMAILJS_SERVICE_ID: !!EMAILJS_SERVICE_ID,
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: !!EMAILJS_TEMPLATE_ID,
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: !!EMAILJS_PUBLIC_KEY,
      })
      setErrorMsg("Form setup error: EmailJS keys are missing in this build. Add them to .env.local / Cloudflare build variables and rebuild.")
      setStatus("error")
      return
    }

    setErrorMsg("")
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
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus("success")
      setForm({ name: "", organisation: "", email: "", enquiryType: "", contact: "", description: "" })
    } catch (err) {
      // EmailJS returns { status, text } — exact reason shows in the browser console
      const e = err as { status?: number; text?: string }
      console.error("[ContactForm] EmailJS send failed:", e?.status, e?.text ?? err)
      const reasons: Record<number, string> = {
        400: "Service ID or Template ID is wrong.",
        403: "This domain is not allowed in EmailJS (Account → Security).",
        412: "The email service in EmailJS is disconnected — reconnect it.",
        426: "EmailJS monthly limit is used up.",
        429: "Too many requests — wait a minute and try again.",
      }
      setErrorMsg(
        `Could not send (${e?.status ?? "network"}). ${
          (e?.status && reasons[e.status]) || e?.text || "Please call or WhatsApp us instead."
        }`
      )
      setStatus("error")
    }
  }

  return (
    <section id="contact-form" className="w-full bg-[#F5EFE4] overflow-hidden lg:aspect-21/9 scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-full">

        {/* LEFT — image */}
        <div className="relative w-full h-100 lg:h-full overflow-hidden">
          <Image
            src="/contactform.avif"
            alt="Physiotherapy session"
            fill
            className="object-cover object-left"
            priority
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent 75%, #F5EFE4 100%)",
            }}
          />
        </div>

        {/* RIGHT — form */}
        <div className="flex flex-col justify-center max-w-5xl items-center gap-5 px-8 lg:px-12 py-5 lg:py-6">
          <div className="">
             <h1 className="text-[#373355] font-medium text-[clamp(1.45rem,4vw,2.5rem)] mt-8 leading-tight">
                We&apos;d love to hear from you
              </h1>
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
                required
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
                required
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
                    Enquiry Type
                  </option>
                  <option value="general">General Enquiry</option>
                  <option value="appointment">Book Appointment</option>
                  <option value="corporate">Corporate Wellness</option>
                  <option value="careers">Careers</option>
                  <option value="partnerships">Business Enquiry</option>
                  <option value="others">Others</option>
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
              required
            />

            {/* Textarea */}
            <div className="flex items-start gap-3 bg-[#f4f4f4] border border-[#E07B45] rounded-xl px-4 py-3 shadow-md">
              <BsFileText className="text-[#E07B45] text-lg mt-1 shrink-0" />
              <textarea
                name="description"
                placeholder="Brief Description or Leave Note"
                rows={2}
                value={form.description}
                onChange={handleChange}
                className="flex-1 bg-transparent text-[#373355] text-sm leading-6 outline-none border-0 resize-none placeholder:text-[#68628e] w-full pt-0.5"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="flex items-center justify-between bg-[#68628e] hover:bg-[#3d3a7a] disabled:opacity-70 disabled:cursor-not-allowed transition-colors text-white font-semibold text-base rounded-full px-8 py-4 w-full"
            >
              <span className="flex-1 text-center">
                {status === "sending" ? "Sending…" : status === "success" ? "Message Sent ✓" : status === "error" ? "Failed — Try Again" : "Submit"}
              </span>
            </button>
            {status === "success" && (
              <div
                role="status"
                className="flex items-start gap-3 rounded-2xl border border-green-300 bg-green-50 px-5 py-4 text-left"
              >
                <span aria-hidden className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-green-800">Thank you! Your message has been sent.</p>
                  <p className="mt-1 text-sm text-green-700">
                    Our team will get back to you shortly. For anything urgent, call or WhatsApp us on +91 93196 06763.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm font-semibold text-green-800 underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}
            {status === "error" && errorMsg && (
              <p role="alert" className="text-center text-sm text-red-600">
                {errorMsg}
              </p>
            )}
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
  required?: boolean
}

function InputField({ icon, placeholder, name, value, onChange, type = "text", fullWidth, required }: InputFieldProps) {
  return (
    <div className={`flex items-center gap-3 bg-[#f4f4f4] border border-[#E07B45] rounded-xl px-4 py-2 w-full shadow-md ${fullWidth ? "col-span-full" : ""}`}>
      <span className="text-lg shrink-0">{icon}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="flex-1 bg-transparent text-[#373355] text-sm outline-none border-0 focus:outline-none placeholder:text-[#68628e] w-full min-w-0"
      />
    </div>
  )
}
