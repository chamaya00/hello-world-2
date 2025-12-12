import Link from "next/link";
import PostCard from "@/components/PostCard";
import ProjectCard from "@/components/ProjectCard";
import { posts } from "@/data/posts";
import { getFeaturedProjects } from "@/data/projects";

export default function Home() {
  const recentPosts = posts.slice(0, 2);
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          Hello, I&apos;m{" "}
          <span className="text-[var(--accent-color)]">Your Name</span>
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed text-[var(--text-secondary)] md:text-2xl">
          I&apos;m a software developer passionate about building beautiful,
          functional, and accessible web experiences. Welcome to my corner of
          the internet.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/about"
            className="font-sans-medium rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-80"
          >
            Learn more about me
          </Link>
          <Link
            href="/posts"
            className="font-sans-medium rounded-full border border-[var(--border-color)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
          >
            Read my posts
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="mb-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Recent Posts</h2>
          <Link
            href="/posts"
            className="font-sans-medium text-sm text-[var(--accent-color)] hover:underline"
          >
            View all posts →
          </Link>
        </div>
        <div>
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="font-sans-medium text-sm text-[var(--accent-color)] hover:underline"
          >
            View all projects →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
