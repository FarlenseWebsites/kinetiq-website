import type { Metadata } from "next"
import NewHome from "../components/new-home/NewHome"

// Draft of the redesigned homepage. Lives at /new-home/ so the live homepage ("/") is untouched.
// It is noindex and NOT listed in app/lib/site.ts (sitemap), so Google won't treat it as a
// duplicate of the homepage. When it's approved, move <NewHome /> into app/page.tsx.
export const metadata: Metadata = {
  title: "New Homepage (Preview)",
  robots: { index: false, follow: false },
}

export default function NewHomePage() {
  return <NewHome />
}
