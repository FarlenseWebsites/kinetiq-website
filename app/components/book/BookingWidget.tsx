"use client"

import Script from "next/script"

export default function BookingWidget() {
  return (
    <div id="hop-booking-widget" className="w-full min-h-130">
      <Script
        src="https://dashboard.hopwellness.ai/widgets/embed.js?widgetId=6a169af5374f1e87b98190f7&origin=https://dashboard.hopwellness.ai/&target=%23hop-booking-widget"
        strategy="afterInteractive"
      />
    </div>
  )
}
