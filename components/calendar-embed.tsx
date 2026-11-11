"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const calendarColors = {
  "cal-bg": "#35102e",
  "cal-bg-muted": "#2f0a28",
  "cal-bg-subtle": "#451d40",
  "cal-bg-emphasis": "#57294f",
  "cal-border": "#724266",
  "cal-border-subtle": "#57294f",
  "cal-border-muted": "#451d40",
  "cal-border-emphasis": "#a788af",
  "cal-text-emphasis": "#f2fdff",
  "cal-text": "#eee5ed",
  "cal-text-subtle": "#cbb7c7",
  "cal-text-muted": "#a88ca2",
  "cal-brand": "#dbcbd8",
  "cal-brand-emphasis": "#f2eaf0",
  "cal-brand-text": "#2f0a28",
};

export default function CalendarEmbed({
  calLink,
  namespace,
}: {
  calLink: string;
  namespace: string;
}) {
  useEffect(() => {
    let cancelled = false;

    async function configureEmbed() {
      const cal = await getCalApi({ namespace });
      if (cancelled) return;

      cal("ui", {
        theme: "dark",
        layout: "month_view",
        hideEventTypeDetails: false,
        cssVarsPerTheme: {
          light: calendarColors,
          dark: calendarColors,
        },
      });
    }

    void configureEmbed();
    return () => {
      cancelled = true;
    };
  }, [namespace]);

  return (
    <main className="bg-dark fixed inset-0 overflow-auto">
      <Cal
        key={calLink}
        namespace={namespace}
        calLink={calLink}
        config={{ theme: "dark", layout: "month_view" }}
        style={{ width: "100%", height: "100%", overflow: "auto" }}
      />
    </main>
  );
}
