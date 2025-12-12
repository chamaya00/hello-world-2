import Link from "next/link";
import { Post } from "@/data/posts";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group border-b border-[var(--border-color)] py-8 last:border-b-0">
      <Link href={`/posts/${post.slug}`} className="block">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-sans-medium text-sm text-[var(--text-secondary)]">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h2 className="text-2xl font-bold leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-color)]">
            {post.title}
          </h2>

          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            {post.excerpt}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans-medium rounded-full bg-[var(--hover-bg)] px-3 py-1 text-xs text-[var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
