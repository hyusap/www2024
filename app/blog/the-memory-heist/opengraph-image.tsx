import { ImageResponse } from "next/og";
import { loadCakraFont, BlogOGImage } from "@/lib/og";

export const runtime = "nodejs";
export const alt = "The Memory Heist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const cakra = loadCakraFont();

  return new ImageResponse(
    <BlogOGImage
      title="The Memory Heist"
      description="How I tricked Claude into leaking your deepest, darkest secrets"
      date="2026-06-01"
    />,
    {
      ...size,
      fonts: [{ name: "Cakra", data: cakra, style: "normal", weight: 700 }],
    }
  );
}
