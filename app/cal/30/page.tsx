import type { Metadata } from "next";
import CalendarEmbed from "@/components/calendar-embed";

export const metadata: Metadata = {
  title: "Book a 30-minute meeting with Ayush Paul",
  description: "Schedule a 30-minute meeting with Ayush Paul.",
  alternates: {
    canonical: "https://ayush.digital/cal/30",
  },
};

export default function ThirtyMinuteCalendarPage() {
  return <CalendarEmbed calLink="ayushpaul/30min" namespace="30min" />;
}
