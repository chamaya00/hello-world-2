import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-6 text-2xl font-bold text-[var(--text-secondary)]">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-lg text-[var(--text-secondary)]">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="font-sans-medium rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-80"
      >
        Go back home
      </Link>
    </div>
  );
}
