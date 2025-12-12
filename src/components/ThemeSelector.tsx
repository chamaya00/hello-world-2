"use client";

import { useTheme, type ThemeOption } from "@/contexts/ThemeContext";
import { useState } from "react";

const themes: {
  id: ThemeOption;
  name: string;
  description: string;
  colors: { bg: string; fg: string; accent: string };
}[] = [
  {
    id: "classic",
    name: "Classic Medium",
    description: "Clean serif typography",
    colors: { bg: "#ffffff", fg: "#242424", accent: "#1a8917" },
  },
  {
    id: "modern",
    name: "Modern Minimal",
    description: "Bold sans-serif, high contrast",
    colors: { bg: "#0a0a0a", fg: "#fafafa", accent: "#3b82f6" },
  },
  {
    id: "warm",
    name: "Warm & Cozy",
    description: "Soft colors, rounded aesthetic",
    colors: { bg: "#fdf6e3", fg: "#3e2723", accent: "#ff6f00" },
  },
];

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--foreground)]"
        aria-label="Select theme"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        <span className="hidden sm:inline">
          {themes.find((t) => t.id === theme)?.name}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-lg border border-[var(--border-color)] bg-[var(--background)] p-4 shadow-xl">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--text-secondary)]">
              Choose Your Style
            </h3>
            <div className="space-y-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full rounded-lg border p-3 text-left transition-all ${
                    theme === t.id
                      ? "border-[var(--accent-color)] bg-[var(--hover-bg)] shadow-md"
                      : "border-[var(--border-color)] hover:border-[var(--foreground)] hover:bg-[var(--hover-bg)]"
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-bold text-[var(--foreground)]">
                      {t.name}
                    </span>
                    {theme === t.id && (
                      <svg
                        className="h-5 w-5 text-[var(--accent-color)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="mb-2 text-xs text-[var(--text-secondary)]">
                    {t.description}
                  </p>
                  <div className="flex gap-2">
                    <div
                      className="h-6 w-6 rounded border border-[var(--border-color)]"
                      style={{ backgroundColor: t.colors.bg }}
                      title="Background"
                    />
                    <div
                      className="h-6 w-6 rounded border border-[var(--border-color)]"
                      style={{ backgroundColor: t.colors.fg }}
                      title="Foreground"
                    />
                    <div
                      className="h-6 w-6 rounded border border-[var(--border-color)]"
                      style={{ backgroundColor: t.colors.accent }}
                      title="Accent"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
