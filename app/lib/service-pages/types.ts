// Shared shape for the SEO service pages (muscle strain, sports, female physio …).
// Each page is just data — ServicePage.tsx renders it.
//
// Inline links: write [link text](/path/) inside any text string.

export type CardItem = {
  title: string
  body?: string
  bullets?: string[]
}

export type Section =
  | {
      kind: "cards"
      id: string
      label: string
      heading: string
      intro?: string
      items: CardItem[]
      cols?: 2 | 3 | 4
      note?: string
    }
  | {
      kind: "steps"
      id: string
      label: string
      heading: string
      intro?: string
      items: CardItem[]
    }
  | {
      kind: "team"
      id: string
      label: string
      heading: string
      intro?: string
      members: { name: string; detail: string }[]
    }
  | {
      kind: "reviews"
      id: string
      label: string
      heading: string
      intro?: string
      reviews: { text: string; name: string }[]
    }
  | {
      kind: "clinics"
      id: string
      label: string
      heading: string
      intro?: string
    }
  | {
      kind: "faq"
      id: string
      label: string
      heading: string
      items: { q: string; a: string }[]
    }

export type ServicePageData = {
  path: string // e.g. "/best-sports-physiotherapist-in-gurgaon/"
  metaTitle: string
  metaDescription: string
  breadcrumb: string // last crumb, e.g. "Sports Physiotherapist"
  serviceName: string // used in the Service schema
  hero: {
    label: string
    title: string
    intro: string
    image: string
    imageAlt: string
  }
  sections: Section[]
  cta: {
    heading: string
    body: string
    bullets?: string[]
    footer?: string
  }
}
