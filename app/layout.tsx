import type { Metadata } from "next";
import localFont from "next/font/local";
import { Figtree } from "next/font/google";
import "./globals.css";

const cakra = localFont({
  src: "./Cakra-Normal.woff2",
  display: "swap",
  variable: "--font-cakra",
});
const figtree = Figtree({ subsets: ["latin"] });

const metadataBase =
  process.env.VERCEL_ENV === "production" || !process.env.VERCEL_URL
    ? new URL("https://ayush.digital")
    : new URL(`https://${process.env.VERCEL_URL}`);

export const metadata: Metadata = {
  title: "Ayush Paul - Engineer, Designer, and AI Researcher at Berkeley",
  description:
    "Computer Science and Electrical Engineering student at UC Berkeley. Building at the intersection of human and machine cognition. Experience in AI, full-stack development, and robotics.",
  keywords: [
    "Ayush Paul",
    "UC Berkeley",
    "Computer Science",
    "AI Developer",
    "Full Stack Engineer",
    "Machine Learning",
    "Robotics",
    "Berkeley EECS",
  ],
  authors: [{ name: "Ayush Paul" }],
  creator: "Ayush Paul",
  publisher: "Ayush Paul",
  metadataBase,
  alternates: {
    canonical: "https://ayush.digital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayush.digital",
    title: "Ayush Paul - Engineer, Designer, and AI Researcher at Berkeley",
    description:
      "Computer Science and Electrical Engineering student at UC Berkeley. Building at the intersection of human and machine cognition.",
    siteName: "Ayush Paul",
    images: [
      {
        url: "https://ayush.digital/images/og.png",
        width: 1200,
        height: 630,
        alt: "Ayush Paul - Engineer, Designer, and AI Researcher at Berkeley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Paul - Engineer, Designer, and AI Researcher at Berkeley",
    description:
      "Computer Science and Electrical Engineering student at UC Berkeley. Building at the intersection of human and machine cognition.",
    images: ["https://ayush.digital/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#A788AF" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Ayush Paul",
                  url: "https://ayush.digital",
                  image: "https://ayush.digital/images/og.png",
                  jobTitle: "Computer Science Student",
                  description:
                    "Computer Science and Electrical Engineering student at UC Berkeley. Building at the intersection of human and machine cognition.",
                  worksFor: {
                    "@type": "Organization",
                    name: "Plastic Labs",
                  },
                  alumniOf: {
                    "@type": "Organization",
                    name: "University of California, Berkeley",
                  },
                  knowsAbout: [
                    "Computer Science",
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Full Stack Development",
                    "Robotics",
                    "Electrical Engineering",
                  ],
                  sameAs: [
                    "https://github.com/hyusap",
                    "https://www.linkedin.com/in/ayush-paul-nc/",
                    "https://x.com/hyusapx",
                  ],
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      contactType: "inquiries",
                      email: "hi@ayush.digital",
                      url: "https://ayush.digital/#connect",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Ayush Paul",
                  url: "https://ayush.digital",
                  inLanguage: "en-US",
                  publisher: {
                    "@type": "Person",
                    name: "Ayush Paul",
                  },
                },
              ],
            }),
          }}
        />
        {/* Self-hosted Plausible: static, neutrally-named script + proxied
            event endpoint so adblock filter lists have no token to match.
            Must be a plain parser-inserted <script> (not next/script) because
            the tracker reads config via document.currentScript. */}
        <script
          defer
          data-domain="ayush.digital"
          data-api="/s/e"
          src="/s/p.js"
        />
      </head>
      <body className={`${figtree.className} ${cakra.variable}`}>
        {children}
      </body>
    </html>
  );
}
