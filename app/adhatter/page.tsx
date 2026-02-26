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
    <main className="relative min-h-screen bg-primary text-dark">
      {/* Hero */}
      <section className="container mx-auto flex min-h-[max(85vh,500px)] flex-col justify-center px-8 py-16 lg:px-16">
        <h1 className="font-display text-8xl lg:text-[10rem] xl:text-[12rem]">
          AdHatter.
        </h1>
        <p className="mt-4 max-w-2xl text-2xl lg:text-4xl">
          Advertise your brand to two of San Francisco&apos;s most discerning
          consumers. Your logo, permanently displayed on a hat hung in a real
          human bedroom. $10.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={STRIPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl border-4 border-dark bg-dark px-8 py-4 text-xl font-medium text-light transition-all duration-300 hover:scale-105 active:scale-95 lg:text-2xl"
          >
            Buy a Slot — $10
          </a>
          <span className="text-lg text-dark/50">one-time fee</span>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-8 pb-16 lg:px-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-2xl border-4 border-dark bg-lightPurple p-4 transition-all duration-300 hover:scale-105 active:scale-95 lg:p-5">
            <div className="text-5xl font-bold lg:text-6xl">2</div>
            <div className="mt-1 text-sm font-medium lg:text-base">
              guaranteed viewers
            </div>
          </div>
          <div className="rounded-2xl border-4 border-dark bg-lightBlue p-4 transition-all duration-300 hover:scale-105 active:scale-95 lg:p-5">
            <div className="text-5xl font-bold lg:text-6xl">100%</div>
            <div className="mt-1 text-sm font-medium lg:text-base">
              viewability
            </div>
          </div>
          <div className="rounded-2xl border-4 border-dark bg-lightNavy p-4 transition-all duration-300 hover:scale-105 active:scale-95 lg:p-5">
            <div className="text-5xl font-bold lg:text-6xl">0</div>
            <div className="mt-1 text-sm font-medium lg:text-base">bots</div>
          </div>
          <div className="rounded-2xl border-4 border-dark bg-lightPurple p-4 transition-all duration-300 hover:scale-105 active:scale-95 lg:p-5">
            <div className="text-5xl font-bold lg:text-6xl">$10</div>
            <div className="mt-1 text-sm font-medium lg:text-base">
              per hat, forever
            </div>
          </div>
        </div>
      </section>

      {/* The Pitch */}
      <section className="border-y-4 border-dark bg-secondary text-light">
        <div className="container mx-auto px-8 py-16 lg:px-16 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              The most honest ad product ever made.
            </h2>
            <p className="text-xl leading-relaxed text-light/80 lg:text-2xl">
              Your branded hat will be hung on the wall of a lived-in San
              Francisco bedroom — seen every single day by two completely human,
              highly-engaged viewers. No impressions dashboard. No click-through
              rates. Just your brand, hanging there, inescapably, until the
              lease expires.
            </p>
          </div>
        </div>
      </section>

      {/* The Audience */}
      <section className="container mx-auto px-8 py-16 lg:px-16 lg:py-24">
        <h2 className="mb-8 text-3xl font-bold lg:text-4xl">Your audience</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://ayush.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border-4 border-dark bg-lightPurple p-5 transition-all duration-300 hover:scale-105 active:scale-95 lg:p-6"
          >
            <div className="mb-1 text-sm font-medium text-dark/50">
              Consumer #1
            </div>
            <div className="text-2xl font-bold lg:text-3xl">Ayush Paul</div>
            <div className="mt-1 text-dark/60 underline">ayush.digital</div>
            <p className="mt-3 text-sm leading-relaxed text-dark/60 lg:text-base">
              CS & EECS at UC Berkeley. Builder. AI researcher. Spends an
              unreasonable amount of time in this bedroom.
            </p>
          </a>

          <a
            href="https://www.parksoojae.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border-4 border-dark bg-lightBlue p-5 transition-all duration-300 hover:scale-105 active:scale-95 lg:p-6"
          >
            <div className="mb-1 text-sm font-medium text-dark/50">
              Consumer #2
            </div>
            <div className="text-2xl font-bold lg:text-3xl">Chris Park</div>
            <div className="mt-1 text-dark/60 underline">parksoojae.com</div>
            <p className="mt-3 text-sm leading-relaxed text-dark/60 lg:text-base">
              Discerning San Francisco resident. Also lives in this bedroom.
              Your brand will not go unnoticed.
            </p>
          </a>

          <div className="rounded-2xl border-4 border-dark bg-lightNavy p-5 transition-all duration-300 hover:scale-105 active:scale-95 lg:p-6">
            <div className="mb-1 text-sm font-medium text-dark/50">
              Bonus impressions
            </div>
            <div className="text-2xl font-bold lg:text-3xl">Their Guests</div>
            <div className="mt-1 text-dark/60">various</div>
            <p className="mt-3 text-sm leading-relaxed text-dark/60 lg:text-base">
              Friends, visitors, and anyone who enters the room. Organic
              word-of-mouth at no extra cost. Prime real estate.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y-4 border-dark bg-light">
        <div className="container mx-auto px-8 py-16 lg:px-16 lg:py-24">
          <h2 className="mb-10 text-3xl font-bold lg:text-4xl">How it works</h2>
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
            <div className="rounded-2xl border-4 border-dark bg-lightPurple p-5 lg:p-6">
              <div className="mb-2 text-4xl font-bold text-dark/30 lg:text-5xl">
                01
              </div>
              <h3 className="mb-2 text-xl font-bold">Purchase</h3>
              <p className="text-dark/60">
                $10. One-time. No subscriptions. No retargeting pixel required.
              </p>
            </div>
            <div className="rounded-2xl border-4 border-dark bg-lightBlue p-5 lg:p-6">
              <div className="mb-2 text-4xl font-bold text-dark/30 lg:text-5xl">
                02
              </div>
              <h3 className="mb-2 text-xl font-bold">Ship your hat</h3>
              <p className="text-dark/60">
                We&apos;ll give you the address. Send us your branded hat. Any
                style works.
              </p>
            </div>
            <div className="rounded-2xl border-4 border-dark bg-lightNavy p-5 lg:p-6">
              <div className="mb-2 text-4xl font-bold text-dark/30 lg:text-5xl">
                03
              </div>
              <h3 className="mb-2 text-xl font-bold">We hang it</h3>
              <p className="text-dark/60">
                It goes on the wall. It stays on the wall. Your brand lives
                rent-free in a San Francisco bedroom until the lease expires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-8 py-20 text-center lg:px-16 lg:py-28">
        <h2 className="mb-3 text-4xl font-bold lg:text-5xl">
          Hang your brand in San Francisco.
        </h2>
        <p className="mb-8 text-xl text-dark/60">
          $10. One hat. On the wall until the lease runs out.
        </p>
        <a
          href={STRIPE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-2xl border-4 border-dark bg-dark px-10 py-5 text-2xl font-medium text-light transition-all duration-300 hover:scale-105 active:scale-95 lg:text-3xl"
        >
          Buy a Slot — $10
        </a>
        <p className="mt-6 text-sm text-dark/40">
          Shipping address provided after purchase. All hat types accepted.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-dark bg-dark py-6 text-center text-sm text-light/50">
        <Link href="/" className="transition-colors hover:text-light/80">
          ayush.digital
        </Link>
      </footer>
    </main>
  );
}
