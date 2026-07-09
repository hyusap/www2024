import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/blog';

function toISO(value: string | undefined, fallback: string) {
  if (!value) return fallback;
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? fallback : date.toISOString();
}

export async function GET() {
  const baseUrl = 'https://ayush.digital';
  const currentDate = new Date().toISOString();

  const posts = (await getBlogPosts()).filter((post) => !post.draft);

  const urls = [
    { loc: baseUrl, lastmod: currentDate, changefreq: 'weekly', priority: '1.0' },
    { loc: `${baseUrl}/blog`, lastmod: currentDate, changefreq: 'weekly', priority: '0.8' },
    ...posts.map((post) => ({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: toISO(post.updated ?? post.date, currentDate),
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ];

  const body = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
