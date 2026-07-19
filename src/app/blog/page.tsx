import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Reading, Learning & Family | AXTO",
  description:
    "Original articles from the AXTO team on raising readers: read-aloud practice, bilingual reading, healthy screen time, and building a family reading habit.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold sm:text-4xl">The AXTO Blog</h1>
      <p className="mt-3 max-w-2xl text-sm text-gray-500">
        Practical, honest writing for parents, teachers, and young readers — from the team building
        Adventures eXplore Together.
      </p>
      <div className="mt-10 space-y-8">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md dark:border-gray-700"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <span className="rounded-full border border-gray-300 px-2 py-0.5 dark:border-gray-600">{p.tag}</span>
              <time dateTime={p.date}>{p.date}</time>
              <span>{p.minutes} min read</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold">
              <Link href={`/blog/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
            <Link
              href={`/blog/${p.slug}`}
              className="mt-4 inline-block text-sm font-medium underline-offset-4 hover:underline"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
