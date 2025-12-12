import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPostBySlug } from "@/data/posts";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Your Name`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {/* Back link */}
      <Link
        href="/posts"
        className="font-sans-medium mb-8 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)]"
      >
        ← Back to posts
      </Link>

      {/* Article header */}
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 font-sans-medium text-sm text-[var(--text-secondary)]">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          {post.title}
        </h1>

        <p className="text-xl leading-relaxed text-[var(--text-secondary)]">
          {post.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans-medium rounded-full bg-[var(--hover-bg)] px-3 py-1 text-sm text-[var(--text-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article content */}
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Article footer */}
      <footer className="mt-16 border-t border-[var(--border-color)] pt-8">
        <p className="font-sans-medium text-sm text-[var(--text-secondary)]">
          Thanks for reading! If you have any thoughts or feedback, feel free to{" "}
          <Link
            href="/about"
            className="text-[var(--accent-color)] hover:underline"
          >
            reach out
          </Link>
          .
        </p>
      </footer>
    </article>
  );
}
