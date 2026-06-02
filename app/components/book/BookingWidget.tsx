"use client"

import { useEffect, useRef } from "react"

export default function BookingWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    if (scriptLoadedRef.current || !containerRef.current) {
      return
    }

    scriptLoadedRef.current = true

    const script = document.createElement("script")
    script.src =
      "https://dashboard.hopwellness.ai/widgets/embed.js?widgetId=6a169af5374f1e87b98190f7&origin=https://dashboard.hopwellness.ai/&target=%23hop-booking-widget"
    script.async = true
    containerRef.current.appendChild(script)
  }, [])

  return (
    <div
      ref={containerRef}
      id="hop-booking-widget"
      className="w-full min-h-130"
    >
    </div>
  )
}
