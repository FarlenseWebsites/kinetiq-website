import type { Metadata } from "next"
import BookingWidget from "../components/book/BookingWidget"

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Book a physiotherapy consultation with KinetiQ.",
}

export default function BookPage() {
  return (
    <section className="min-h-screen px-4 pt-20 bg-[#ffffff]">
      <BookingWidget />
    </section>
  )
}
