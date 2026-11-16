import type { Metadata } from "next"
import JsonLd from "../seo/JsonLd"
import ServicePage from "./ServicePage"
import { buildServicePageSchema } from "../../lib/schema"
import type { ServicePageData } from "../../lib/service-pages/types"

// Helpers so each app/<slug>/page.tsx stays 5 lines long.

export function serviceMetadata(d: ServicePageData): Metadata {
  return {
    title: { absolute: d.metaTitle }, // skip the "| KinetiQ Physiotherapy" template
    description: d.metaDescription,
    alternates: { canonical: d.path },
    openGraph: {
      title: d.metaTitle,
      description: d.metaDescription,
      url: d.path,
      siteName: "KinetiQ Physiotherapy",
      images: [d.hero.image],
      locale: "en_IN",
      type: "website",
    },
  }
}

export function ServiceRoute({ data }: { data: ServicePageData }) {
  const faqs = data.sections.flatMap((s) => (s.kind === "faq" ? s.items : []))
  return (
    <>
      <JsonLd
        data={buildServicePageSchema({
          path: data.path,
          metaTitle: data.metaTitle,
          metaDescription: data.metaDescription,
          breadcrumb: data.breadcrumb,
          serviceName: data.serviceName,
          heroImage: data.hero.image,
          faqs,
        })}
      />
      <ServicePage data={data} />
    </>
  )
}
