"use client";

import { useEffect } from "react";

export default function BookingWidget() {
  useEffect(() => {
    const widgetId = "6a169af5374f1e87b98190f7";
    const globalWindow = window as Window & {
      __HOP_WIDGET_EMBED__?: {
        widgets?: Record<string, { initialized?: boolean }>;
      };
    };

    const widgets = globalWindow.__HOP_WIDGET_EMBED__?.widgets;
    if (widgets && widgets[widgetId]) {
      delete widgets[widgetId];
    }

    const existingScript = document.querySelector(
      `script[data-hop-widget-id="${widgetId}"]`
    );
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");

    script.src =
      "https://dashboard.hopwellness.ai/widgets/embed.js?widgetId=6a169af5374f1e87b98190f7&origin=https://dashboard.hopwellness.ai/&target=%23hop-booking-widget";

    script.async = true;
    script.dataset.hopWidgetId = widgetId;

    document.body.appendChild(script);

    return () => {
      script.remove();

      const cleanupWidgets = globalWindow.__HOP_WIDGET_EMBED__?.widgets;
      if (cleanupWidgets && cleanupWidgets[widgetId]) {
        delete cleanupWidgets[widgetId];
      }

      const container = document.getElementById("hop-booking-widget");
      if (container) {
        container.replaceChildren();
      }
    };
  }, []);

  return (
    <div
      id="hop-booking-widget"
      className="w-full min-h-175"
    />
  );
}