import Link from "next/link";

export const metadata = {
  title: "About - Your Name",
  description: "Learn more about me, my background, and what I do.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Me</h1>
      </header>

      <div className="article-content">
        <p>
          Hello! I&apos;m a passionate software developer with a love for creating
          beautiful, functional, and accessible web experiences. I believe in the
          power of technology to solve real problems and make people&apos;s lives
          better.
        </p>

        <h2>Background</h2>
        <p>
          My journey into software development started with curiosity about how
          websites work. That curiosity evolved into a career focused on building
          modern web applications using cutting-edge technologies. I&apos;m constantly
          learning and exploring new tools and frameworks to stay at the forefront
          of web development.
        </p>

        <h2>What I Do</h2>
        <p>
          I specialize in full-stack web development, with a particular focus on:
        </p>
        <ul>
          <li>Building responsive, accessible user interfaces with React and Next.js</li>
          <li>Creating robust backend services and APIs</li>
          <li>Designing intuitive user experiences</li>
          <li>Writing clean, maintainable code</li>
        </ul>

        <h2>Beyond Code</h2>
        <p>
          When I&apos;m not coding, you&apos;ll find me reading, exploring new places, or
          experimenting with photography. I believe that diverse interests make for
          better creativity and problem-solving in my work.
        </p>

        <h2>Let&apos;s Connect</h2>
        <p>
          I&apos;m always open to interesting conversations and opportunities. Whether
          you want to discuss a project, share ideas, or just say hello, feel free
          to reach out through any of the channels below.
        </p>
      </div>

      {/* Contact Section */}
      <section className="mt-12 rounded-lg border border-[var(--border-color)] p-8">
        <h3 className="mb-6 text-xl font-bold">Get in Touch</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:hello@example.com"
            className="font-sans-medium flex items-center gap-3 rounded-lg border border-[var(--border-color)] p-4 text-[var(--text-secondary)] transition-all hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
          >
            <span className="text-xl">✉️</span>
            <div>
              <div className="text-sm font-medium">Email</div>
              <div className="text-xs">hello@example.com</div>
            </div>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans-medium flex items-center gap-3 rounded-lg border border-[var(--border-color)] p-4 text-[var(--text-secondary)] transition-all hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
          >
            <span className="text-xl">🐦</span>
            <div>
              <div className="text-sm font-medium">Twitter</div>
              <div className="text-xs">@yourusername</div>
            </div>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans-medium flex items-center gap-3 rounded-lg border border-[var(--border-color)] p-4 text-[var(--text-secondary)] transition-all hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
          >
            <span className="text-xl">💼</span>
            <div>
              <div className="text-sm font-medium">LinkedIn</div>
              <div className="text-xs">linkedin.com/in/yourname</div>
            </div>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans-medium flex items-center gap-3 rounded-lg border border-[var(--border-color)] p-4 text-[var(--text-secondary)] transition-all hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
          >
            <span className="text-xl">🐙</span>
            <div>
              <div className="text-sm font-medium">GitHub</div>
              <div className="text-xs">github.com/yourusername</div>
            </div>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 text-center">
        <p className="mb-6 text-[var(--text-secondary)]">
          Interested in working together or just want to chat?
        </p>
        <Link
          href="mailto:hello@example.com"
          className="font-sans-medium inline-block rounded-full bg-[var(--foreground)] px-8 py-3 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-80"
        >
          Send me an email
        </Link>
      </section>
    </div>
  );
}
