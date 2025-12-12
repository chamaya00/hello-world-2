import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Posts - Your Name",
  description: "Read my latest thoughts on web development, design, and technology.",
};

export default function PostsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Posts</h1>
        <p className="text-xl text-[var(--text-secondary)]">
          Thoughts, stories, and ideas about web development, design, and the
          craft of building software.
        </p>
      </header>

      <div>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
