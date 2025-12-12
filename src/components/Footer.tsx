import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "#", label: "Twitter" },
    { href: "#", label: "GitHub" },
    { href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--background)]">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="font-sans-medium text-sm text-[var(--text-secondary)]">
            © {currentYear} Your Name. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans-medium text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
