import type { Metadata } from "next"
import ContactHero from "../components/contact/ContactHero"
import ContactCentres from "../components/contact/ContactCentres"
import ContactForm from "../components/contact/ContactForm"
import CTA from "../components/home/CTA"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with KinetiQ Physiotherapy. Visit our two centres in Gurugram or fill out our contact form to speak with our team.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactCentres />
      <ContactForm />
      <CTA />
    </>
  )
}
