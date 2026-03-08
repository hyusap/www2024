import type { Metadata } from "next";
import Link from "next/link";
import AdHatterScene from "./scene";

export const metadata: Metadata = {
  title: "AdHatter — Premium Hat-Based Advertising in San Francisco",
  description:
    "Advertise your brand to two of San Francisco's most discerning consumers. Your logo, permanently displayed on a hat hung in a real human bedroom. $10. 100% viewability. Zero bots.",
  openGraph: {
    title: "AdHatter — Premium Hat-Based Advertising",
    description:
      "Your logo on a hat, hung in a real bedroom in San Francisco. $10. 100% viewability. Zero bots. Unmatched brand recall.",
    url: "https://ayush.digital/adhatter",
  },
};

const STRIPE_URL = "https://buy.stripe.com/8x2bIU8Qfgb9fRcfsX3Ru00";

export default function AdHatter() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#10131a] text-[#f4f1e8]">
      <AdHatterScene />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30" />

      <header className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between md:left-8 md:right-8">
        <Link
          href="/"
          className="rounded-full border border-white/30 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#f4f1e8] backdrop-blur-sm transition hover:bg-black/50"
        >
          Back
        </Link>
        <a
          href={STRIPE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#f4f1e8]/50 bg-[#d7813f]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#fdf6eb] backdrop-blur-sm transition hover:bg-[#d7813f]"
        >
          Claim a hat slot
        </a>
      </header>

      <h1 className="absolute bottom-4 left-4 z-10 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#eee5d7] backdrop-blur-sm md:bottom-8 md:left-8">
        AdHatter Live Feed
      </h1>
    </main>
  );
}
