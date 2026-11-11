import type { Metadata } from "next";
import CalendarEmbed from "@/components/calendar-embed";

export const metadata: Metadata = {
  title: "Schedule time with Ayush Paul",
  description: "Book a time to meet with Ayush Paul.",
  alternates: {
    canonical: "https://ayush.digital/cal",
  },
};

export default function CalendarPage() {
  return <CalendarEmbed calLink="ayushpaul" namespace="profile" />;
}
