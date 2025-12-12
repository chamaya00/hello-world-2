"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Posts" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--background)]">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-sans-medium text-xl font-bold tracking-tight text-[var(--foreground)] hover:opacity-80"
        >
          Your Name
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans-medium rounded-full px-4 py-2 text-sm transition-colors ${
                isActive(link.href)
                  ? "bg-[var(--foreground)] text-[var(--background)]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--hover-bg)] hover:text-[var(--foreground)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
