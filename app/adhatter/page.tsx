import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AdHatter — Prime Advertising Real Estate in San Francisco",
  description:
    "Advertise your brand to two of San Francisco's most discerning consumers. Your logo, permanently displayed on a hat hung in a real human bedroom. 100% viewability. Zero bots.",
  openGraph: {
    title: "AdHatter — Prime Advertising Real Estate",
    description:
      "100% viewability. Zero bots. Unmatched brand recall. Your logo on a hat, hung in a real bedroom in San Francisco.",
    url: "https://ayush.digital/adhatter",
  },
};

const STRIPE_URL = "https://buy.stripe.com/8x2bIU8Qfgb9fRcfsX3Ru00";

export default function AdHatter() {
  return (
    <main className="min-h-screen bg-dark text-light">
      {/* Header */}
      <header className="container mx-auto px-8 py-12 lg:px-16 lg:py-16">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-primary">
          Premium Out-of-Home Advertising
        </p>
        <h1 className="font-display text-8xl text-accent lg:text-[10rem] xl:text-[12rem]">
          AdHatter.
        </h1>
        <p className="mt-4 max-w-xl text-2xl leading-snug text-light/80 lg:text-3xl">
          Advertise your brand to two of San Francisco&apos;s most discerning
          consumers.
        </p>
      </header>

      {/* Stats */}
      <section className="container mx-auto px-8 lg:px-16" aria-label="Key metrics">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-2xl border-4 border-primary/30 bg-secondary/40 p-5">
            <div className="font-display text-6xl text-accent lg:text-7xl">2</div>
            <div className="mt-1 text-sm font-medium uppercase tracking-widest text-primary">
              Guaranteed Viewers
            </div>
          </div>
          <div className="rounded-2xl border-4 border-primary/30 bg-secondary/40 p-5">
            <div className="font-display text-6xl text-accent lg:text-7xl">100%</div>
            <div className="mt-1 text-sm font-medium uppercase tracking-widest text-primary">
              Viewability
            </div>
          </div>
          <div className="rounded-2xl border-4 border-primary/30 bg-secondary/40 p-5">
            <div className="font-display text-6xl text-accent lg:text-7xl">0</div>
            <div className="mt-1 text-sm font-medium uppercase tracking-widest text-primary">
              Bots
            </div>
          </div>
          <div className="rounded-2xl border-4 border-primary/30 bg-secondary/40 p-5">
            <div className="font-display text-6xl text-accent lg:text-7xl">∞</div>
            <div className="mt-1 text-sm font-medium uppercase tracking-widest text-primary">
              Brand Recall
            </div>
          </div>
        </div>
      </section>

      {/* The Pitch */}
      <section className="container mx-auto px-8 py-16 lg:px-16 lg:py-24">
        <div className="max-w-3xl">
          <h2 className="mb-6 font-display text-5xl text-light lg:text-6xl">
            Your logo. A real bedroom. A real hat.
          </h2>
          <p className="text-xl leading-relaxed text-light/70 lg:text-2xl">
            Your branded hat will be permanently displayed on the wall of a lived-in
            San Francisco bedroom — seen every single day by two highly-engaged,
            completely human viewers. No impressions. No click-through rates. No
            dashboards. Just your brand, hanging there, inescapably.
          </p>
          <p className="mt-4 text-xl leading-relaxed text-light/70 lg:text-2xl">
            This is the most honest advertising product ever created.
          </p>
        </div>
      </section>

      {/* The Audience */}
      <section
        className="container mx-auto px-8 pb-16 lg:px-16"
        aria-label="Our audience"
      >
        <h2 className="mb-8 text-sm uppercase tracking-[0.3em] text-primary">
          Your Audience
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Ayush Paul */}
          <a
            href="https://ayush.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border-4 border-primary/30 bg-secondary/40 p-6 transition-all hover:border-accent hover:bg-secondary/60"
          >
            <div className="mb-3 text-xs uppercase tracking-widest text-primary group-hover:text-accent">
              Consumer #1
            </div>
            <div className="font-display text-4xl text-light lg:text-5xl">
              Ayush Paul
            </div>
            <div className="mt-2 text-light/60">ayush.digital</div>
            <div className="mt-4 text-sm leading-relaxed text-light/50">
              CS & EECS student at UC Berkeley. Builder. AI researcher. Spends an
              unreasonable amount of time in this bedroom.
            </div>
          </a>

          {/* Chris Park */}
          <a
            href="https://www.parksoojae.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border-4 border-primary/30 bg-secondary/40 p-6 transition-all hover:border-accent hover:bg-secondary/60"
          >
            <div className="mb-3 text-xs uppercase tracking-widest text-primary group-hover:text-accent">
              Consumer #2
            </div>
            <div className="font-display text-4xl text-light lg:text-5xl">
              Chris Park
            </div>
            <div className="mt-2 text-light/60">parksoojae.com</div>
            <div className="mt-4 text-sm leading-relaxed text-light/50">
              Discerning San Francisco resident. Frequent bedroom visitor. Your
              brand will not go unnoticed.
            </div>
          </a>

          {/* Guests */}
          <div className="rounded-2xl border-4 border-primary/30 bg-primary/10 p-6">
            <div className="mb-3 text-xs uppercase tracking-widest text-primary">
              Bonus Reach
            </div>
            <div className="font-display text-4xl text-light lg:text-5xl">
              Their Guests
            </div>
            <div className="mt-2 text-light/60">Various</div>
            <div className="mt-4 text-sm leading-relaxed text-light/50">
              Word-of-mouth potential. Organic impressions at no additional cost.
              Prime real estate reaches all who enter.
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-primary/20 bg-secondary/20">
        <div className="container mx-auto px-8 py-16 lg:px-16 lg:py-24">
          <h2 className="mb-10 text-sm uppercase tracking-[0.3em] text-primary">
            How It Works
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="mb-3 font-display text-5xl text-accent">01</div>
              <h3 className="mb-2 text-xl font-semibold text-light">Purchase</h3>
              <p className="text-light/60">
                Secure your placement. One-time fee. No subscription. No retargeting
                pixel required.
              </p>
            </div>
            <div>
              <div className="mb-3 font-display text-5xl text-accent">02</div>
              <h3 className="mb-2 text-xl font-semibold text-light">Ship Your Hat</h3>
              <p className="text-light/60">
                Upon purchase, the shipping address will be provided. Send us your
                branded hat. We accept all hat styles.
              </p>
            </div>
            <div>
              <div className="mb-3 font-display text-5xl text-accent">03</div>
              <h3 className="mb-2 text-xl font-semibold text-light">
                Permanent Display
              </h3>
              <p className="text-light/60">
                We hang it. It stays. Your brand lives rent-free in a San Francisco
                bedroom, indefinitely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-8 py-20 text-center lg:px-16 lg:py-28">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
          Limited Inventory
        </p>
        <h2 className="mb-8 font-display text-6xl text-light lg:text-7xl xl:text-8xl">
          One hat.
          <br />
          One shot.
        </h2>
        <a
          href={STRIPE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-2xl bg-accent px-10 py-5 font-display text-3xl text-dark transition-all hover:scale-105 hover:bg-yellow-300 active:scale-95 lg:text-4xl"
        >
          Buy the Slot
        </a>
        <p className="mt-6 text-sm text-light/40">
          Shipping address provided after purchase. All hat types accepted.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 text-center text-sm text-light/30">
        <Link href="/" className="hover:text-light/60 transition-colors">
          ← ayush.digital
        </Link>
      </footer>
    </main>
  );
}
