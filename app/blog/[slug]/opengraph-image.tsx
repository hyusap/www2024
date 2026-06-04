import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { loadCakraFont, loadFigtreeFont, BlogOGImage } from "@/lib/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const cakra = loadCakraFont();
  const figtree = loadFigtreeFont();

  return new ImageResponse(
    <BlogOGImage
      title={post.title}
      description={post.description}
      date={post.date}
      tags={post.tags}
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
