import { BLOG_POSTS } from '@/content/blog-posts';

// RSS 2.0 feed at /feed.xml — auto-discovery of new posts by aggregators and
// search engines (kept fresh by the autonomous writer).
export const dynamic = 'force-static';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const items = [...BLOG_POSTS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 50)
    .map((p) => {
      const link = `https://axto.us/blog/${p.slug}`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${esc(p.tag)}</category>
      <description>${esc(p.description)}</description>
    </item>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AXTO — Reading &amp; Learning</title>
    <link>https://axto.us</link>
    <atom:link href="https://axto.us/feed.xml" rel="self" type="application/rss+xml" />
    <description>Original posts for parents, teachers and young readers on reading, literacy and learning.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'content-type': 'application/rss+xml; charset=utf-8', 'cache-control': 'public, max-age=3600' } });
}
