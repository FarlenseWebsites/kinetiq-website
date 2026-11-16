// Clinic details shown in the "Visit us" block on every service page.
// TODO: confirm timings with the client (schema.ts currently says Mon–Sat 08:00–20:00).
export const CLINICS = [
  {
    name: "Golf Course Road, DLF Phase 1",
    address: "2nd Floor, F 11 16/17, Golf Course Road, DLF Phase 1, Sector 27, Gurugram, Haryana 122002",
    timings: "Mon–Sat, 8:00 AM – 8:00 PM",
    map: "https://maps.app.goo.gl/5YfV2m4mPzLAPwAu6",
  },
  {
    name: "AIPL Joy Central Mall, Sector 65",
    address: "AIPL Joy Central Mall, Sector 65, Gurugram, Haryana 122101",
    timings: "Mon–Sat, 8:00 AM – 8:00 PM",
    map: "https://maps.app.goo.gl/h64af5zFeiSgMWk4A",
  },
] as const

export const WHATSAPP_URL = "https://wa.me/919319606763"
export const BOOK_URL = "/book/"
