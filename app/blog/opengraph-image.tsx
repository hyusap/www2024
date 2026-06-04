import { ImageResponse } from "next/og";
import { loadCakraFont, loadFigtreeFont, BlogOGImage } from "@/lib/og";

export const runtime = "nodejs";
export const alt = "Ayush Paul — Writings";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const cakra = loadCakraFont();
  const figtree = loadFigtreeFont();

  return new ImageResponse(
    <BlogOGImage
      title="Writings"
      description="Longer-form thoughts on AI, design, and engineering"
    />,
    {
      ...size,
      fonts: [
        { name: "Cakra", data: cakra, style: "normal", weight: 700 },
        { name: "Figtree", data: figtree, style: "normal", weight: 600 },
      ],
    }
  );
}
