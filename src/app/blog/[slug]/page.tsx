import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost } from "@/content/blog-posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog" };
  return {
    title: `${post.title} | AXTO Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, type: "article", publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link href="/blog" className="text-sm text-gray-500 hover:underline">
        ← All articles
      </Link>
      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-gray-500">
        <span className="rounded-full border border-gray-300 px-2 py-0.5 dark:border-gray-600">{post.tag}</span>
        <time dateTime={post.date}>{post.date}</time>
        <span>{post.minutes} min read</span>
      </div>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>
      <p className="mt-3 text-base text-gray-600 dark:text-gray-300">{post.description}</p>
      <article className="mt-8 space-y-5 leading-relaxed">
        {post.body.map((para, i) =>
          para.startsWith("## ") ? (
            <h2 key={i} className="mt-8 text-xl font-semibold">
              {para.slice(3)}
            </h2>
          ) : (
            <p key={i}>{para}</p>
          )
        )}
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Organization", name: "AXTO" },
          }),
        }}
      />
      <div className="mt-14 border-t border-gray-200 pt-8 dark:border-gray-700">
        <p className="text-sm font-semibold text-gray-500">More from the blog</p>
        <ul className="mt-3 space-y-2 text-sm">
          {others.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
