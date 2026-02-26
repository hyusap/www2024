import type { Metadata } from "next";
import Link from "next/link";

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
    <main className="min-h-screen bg-primary text-dark">
      {/* Hero */}
      <section className="container mx-auto px-8 pb-8 pt-16 lg:px-16 lg:pt-24">
        <h1 className="font-display text-8xl lg:text-[10rem] xl:text-[12rem]">
          AdHatter.
        </h1>
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-lg text-xl leading-snug text-dark/70 lg:text-2xl">
            Your brand, on a hat, hung in a real San Francisco bedroom. Seen
            every day. For $10.
          </p>
          <a
            href={STRIPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 self-start rounded-2xl border-4 border-dark bg-dark px-7 py-4 text-lg font-semibold text-light transition-all duration-300 hover:scale-105 active:scale-95 sm:self-auto"
          >
            Buy a slot — $10
          </a>
        </div>
      </section>

      {/* Stats strip */}
      <section className="mt-8 border-y-4 border-dark bg-dark text-light">
        <div className="container mx-auto grid grid-cols-2 divide-x-2 divide-light/10 px-0 sm:grid-cols-4">
          {[
            { stat: "2", label: "guaranteed viewers" },
            { stat: "100%", label: "viewability" },
            { stat: "0", label: "bots" },
            { stat: "$10", label: "one-time, no renewal" },
          ].map(({ stat, label }) => (
            <div
              key={label}
              className="px-8 py-8 text-center"
            >
              <div className="text-4xl font-bold lg:text-5xl">{stat}</div>
              <div className="mt-1 text-sm text-light/50">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pitch */}
      <section className="border-b-4 border-dark bg-secondary">
        <div className="container mx-auto px-8 py-16 lg:px-16 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
            <p className="text-3xl font-bold leading-snug text-light lg:text-4xl">
              The most honest advertising product ever created.
            </p>
            <div className="space-y-4 text-lg leading-relaxed text-light/70 lg:text-xl">
              <p>
                No impressions dashboard. No click-through rates. No retargeting
                pixel. No algorithm. Your hat goes on the wall. It stays on the
                wall.
              </p>
              <p>
                Two completely human, highly-engaged viewers will see your brand
                every single day — until the lease expires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="container mx-auto px-8 py-16 lg:px-16 lg:py-20">
        <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-dark/40">
          Your audience
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href="https://ayush.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border-4 border-dark bg-lightPurple p-6 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-dark/40 group-hover:text-dark/70">
              Consumer #1
            </div>
            <div className="mt-2 text-2xl font-bold">Ayush Paul</div>
            <div className="mt-0.5 text-sm underline underline-offset-2 text-dark/50">
              ayush.digital
            </div>
            <p className="mt-4 text-sm leading-relaxed text-dark/60">
              EECS @ Berkeley. Loves to sleep.
            </p>
          </a>

          <a
            href="https://www.parksoojae.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border-4 border-dark bg-lightBlue p-6 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-dark/40 group-hover:text-dark/70">
              Consumer #2
            </div>
            <div className="mt-2 text-2xl font-bold">Chris Park</div>
            <div className="mt-0.5 text-sm underline underline-offset-2 text-dark/50">
              parksoojae.com
            </div>
            <p className="mt-4 text-sm leading-relaxed text-dark/60">
              CS @ Berkeley. Rots on his bed.
            </p>
          </a>

          <div className="rounded-2xl border-4 border-dark border-dashed bg-primary/40 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-dark/40">
              Bonus impressions
            </div>
            <div className="mt-2 text-2xl font-bold">Their Guests</div>
            <div className="mt-0.5 text-sm text-dark/40">various</div>
            <p className="mt-4 text-sm leading-relaxed text-dark/60">
              Friends. Visitors. Anyone who enters. Word-of-mouth potential at
              no additional cost.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y-4 border-dark bg-dark">
        <div className="container mx-auto px-8 py-16 lg:px-16 lg:py-20">
          <p className="mb-10 text-sm font-semibold uppercase tracking-widest text-light/40">
            How it works
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                n: "01",
                title: "Purchase",
                body: "$10. One-time. No subscriptions, no dashboards, no renewal emails.",
              },
              {
                n: "02",
                title: "Ship your hat",
                body: "We give you the address. Send us your branded hat. Any style accepted.",
              },
              {
                n: "03",
                title: "We hang it",
                body: "It goes on the wall. It stays on the wall. Until the lease runs out.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="border-t-4 border-light/20 pt-6">
                <div className="mb-3 text-4xl font-bold text-light/20 lg:text-5xl">
                  {n}
                </div>
                <h3 className="mb-2 text-xl font-bold text-light">{title}</h3>
                <p className="text-light/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-8 py-20 text-center lg:px-16 lg:py-28">
        <h2 className="mb-2 text-4xl font-bold lg:text-5xl">
          Hang your brand in San Francisco.
        </h2>
        <p className="mb-8 text-lg text-dark/50">
          $10. One hat. On the wall until the lease runs out.
        </p>
        <a
          href={STRIPE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-2xl border-4 border-dark bg-dark px-10 py-5 text-2xl font-semibold text-light transition-all duration-300 hover:scale-105 active:scale-95 lg:text-3xl"
        >
          Buy a slot — $10
        </a>
        <p className="mt-5 text-sm text-dark/40">
          Shipping address provided after purchase.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-dark bg-dark py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-8 text-sm text-light/40 sm:flex-row lg:px-16">
          <Link href="/" className="transition-colors hover:text-light/70">
            ayush.digital
          </Link>
          <span>website entirely made by claude</span>
        </div>
      </footer>
    </main>
  );
}
