import { serviceMetadata, ServiceRoute } from "../components/service-page/serviceRoute"
import { femalePage } from "../lib/service-pages/female"

export const metadata = serviceMetadata(femalePage)

export default function Page() {
  return <ServiceRoute data={femalePage} />
}
