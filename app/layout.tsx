import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FlowbiteInit from "./components/layout/FlowbiteInit";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KinetiQ Physiotherapy",
    template: "%s | KinetiQ Physiotherapy",
  },
  description:
    "Where you meet Rehab and Fitness Needs. We combine movement science, hands-on physiotherapy and personalized care.",
  keywords: [
    "Physiotherapy",
    "Rehab",
    "Fitness",
    "Sports Injury",
    "Movement Science",
    "KinetiQ",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#F8F8FA] text-[#2F295C] antialiased">
        <FlowbiteInit />
        
        {/* subtle background grid */}
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04] bg-[linear-gradient(to_right,#2F295C_1px,transparent_1px),linear-gradient(to_bottom,#2F295C_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="flex min-h-screen flex-col">
          
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1 flex flex-col">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Global Floating WhatsApp Button */}
          <Link href="#" className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 hover:shadow-[#25D366]/40 transition-all duration-300">
            <FaWhatsapp size={32} />
          </Link>
        </div>
      </body>
    </html>
  );
}