import type { Metadata } from "next";
import localFont from "next/font/local";
import { Figtree } from "next/font/google";
import "./globals.css";
import PlausibleProvider from "next-plausible";

const cakra = localFont({
  src: "./Cakra-Normal.woff2",
  display: "swap",
  variable: "--font-cakra",
});
const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Paul",
  description: "Welcome to my corner of the internet!",
  openGraph: {
    images: {
      url: "https://www.ayush.digital/images/og.png",
    },
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
        <PlausibleProvider
          domain="ayush.digital"
          customDomain="https://a.ayush.digital"
          trackOutboundLinks
          taggedEvents
          enabled
        />
      </head>
      <body className={`${figtree.className} ${cakra.variable}`}>
        {children}
      </body>
    </html>
  );
}
