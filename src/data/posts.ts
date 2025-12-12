export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "building-modern-web-applications",
    title: "Building Modern Web Applications with Next.js",
    excerpt: "Discover how Next.js has revolutionized the way we build web applications, combining the best of server-side rendering and static site generation.",
    content: `
      <p>Next.js has emerged as one of the most powerful frameworks for building modern web applications. Its unique approach to combining server-side rendering (SSR) with static site generation (SSG) gives developers unprecedented flexibility.</p>

      <h2>Why Next.js?</h2>
      <p>The framework offers several compelling features that make it stand out from other React-based solutions. First, the file-based routing system eliminates the need for complex router configurations. Second, the built-in API routes allow you to create full-stack applications without setting up a separate backend.</p>

      <blockquote>The best code is the code you don't have to write. Next.js embodies this philosophy by providing sensible defaults and powerful abstractions.</blockquote>

      <h2>Getting Started</h2>
      <p>Setting up a Next.js project is straightforward. With a single command, you can scaffold a complete application with TypeScript support, ESLint configuration, and Tailwind CSS integration.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Automatic code splitting for optimal performance</li>
        <li>Built-in image optimization</li>
        <li>Incremental Static Regeneration (ISR)</li>
        <li>API routes for backend functionality</li>
      </ul>

      <p>As web development continues to evolve, Next.js remains at the forefront, constantly adapting to new requirements and developer needs.</p>
    `,
    date: "Dec 10, 2024",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    slug: "the-art-of-clean-code",
    title: "The Art of Writing Clean Code",
    excerpt: "Clean code is not just about making your code work—it's about making it readable, maintainable, and a joy to work with.",
    content: `
      <p>Writing clean code is an art form that separates good developers from great ones. It's not just about making your code work—it's about crafting something that others (including your future self) can easily understand and maintain.</p>

      <h2>Principles of Clean Code</h2>
      <p>The foundation of clean code rests on several key principles that have stood the test of time. These principles guide us in making decisions that lead to better software.</p>

      <h3>Meaningful Names</h3>
      <p>Variable and function names should reveal intent. A well-chosen name can eliminate the need for comments and make code self-documenting.</p>

      <h3>Small Functions</h3>
      <p>Functions should do one thing and do it well. When a function grows too large, it's time to extract smaller, more focused functions.</p>

      <blockquote>Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler</blockquote>

      <h2>Refactoring</h2>
      <p>Regular refactoring is essential to maintaining clean code. As requirements change, code must evolve. Without continuous improvement, even the cleanest codebase will eventually become technical debt.</p>

      <p>Remember: clean code is a journey, not a destination. Every day presents opportunities to improve your craft.</p>
    `,
    date: "Dec 5, 2024",
    readTime: "4 min read",
    tags: ["Programming", "Best Practices", "Software Engineering"]
  },
  {
    slug: "designing-for-accessibility",
    title: "Designing for Accessibility: A Developer's Guide",
    excerpt: "Accessibility isn't an afterthought—it's a fundamental aspect of good web development that benefits all users.",
    content: `
      <p>Web accessibility ensures that websites and applications are usable by everyone, regardless of their abilities. It's not just about compliance—it's about creating inclusive digital experiences.</p>

      <h2>Understanding WCAG</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a framework for making web content more accessible. Understanding these guidelines is the first step toward building inclusive applications.</p>

      <h3>The Four Principles</h3>
      <ul>
        <li><strong>Perceivable:</strong> Information must be presentable in ways users can perceive</li>
        <li><strong>Operable:</strong> Interface components must be operable by all users</li>
        <li><strong>Understandable:</strong> Information and operation must be understandable</li>
        <li><strong>Robust:</strong> Content must be robust enough for various assistive technologies</li>
      </ul>

      <h2>Practical Implementation</h2>
      <p>Implementing accessibility doesn't have to be overwhelming. Start with semantic HTML, proper heading hierarchy, and meaningful alt text for images. These basics go a long way.</p>

      <blockquote>The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect. — Tim Berners-Lee</blockquote>

      <p>By prioritizing accessibility, we create better experiences for everyone—not just users with disabilities.</p>
    `,
    date: "Nov 28, 2024",
    readTime: "6 min read",
    tags: ["Accessibility", "UX", "Web Development"]
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}
