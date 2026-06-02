export const metadata = {
  title: "Book a Consultation",
  description: "Book a physiotherapy consultation with KinetiQ.",
}

import BookingWidget from "../components/book/BookingWidget"

export default function BookPage() {
  return (
    <section className="flex flex-col pt-20  items-center justify-center min-h-[100vh] px-4 py-16 text-center bg-[#ffffff]">
      
      <BookingWidget />

    </section>
  )
}
