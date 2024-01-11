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

export const metadata: Metadata = {
  title: "Ayush Paul",
  description: "Welcome to my corner of the internet!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.className} ${cakra.variable}`}>
        {children}
      </body>
    </html>
  );
}
