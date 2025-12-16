"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems: { href: string; label: string }[] = [
  { href: "/", label: "Overview" },
  { href: "/motivation", label: "Motivation" },
  { href: "/related-work", label: "Related Work" },
  { href: "/method", label: "Method" },
  { href: "/diffusion-kd", label: "Diffusion KD" },
  { href: "/datasets", label: "Datasets" },
  { href: "/experiments", label: "Experiments" },
  { href: "/ablation", label: "Ablation" },
  { href: "/contributions", label: "Contributions" },
  { href: "/timeline", label: "Timeline" },
  { href: "/feasibility", label: "Feasibility" },
  { href: "/references", label: "References" },
];

type Theme = "light" | "dark";

export function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initial: Theme =
      stored === "light" || stored === "dark"
        ? stored
        : systemPrefersDark
          ? "dark"
          : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", next);
    }
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <header className="border-b border-subtle bg-elevated/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex flex-col">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            DiffMedDINOv3
          </Link>
          <p className="text-xs text-muted">
            Diffusion-distilled multi-task multi-modal foundation model for
            medical image segmentation
          </p>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-3 text-xs font-medium sm:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    active
                      ? "bg-zinc-900 text-zinc-50"
                      : "text-muted hover:bg-zinc-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-subtle bg-elevated text-xs shadow-sm transition-colors hover:bg-zinc-100"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
      <div className="border-t border-subtle bg-surface/90 px-2 py-2 text-xs text-muted sm:hidden">
        <nav className="mx-auto flex max-w-6xl flex-wrap gap-2">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1 transition-colors ${
                  active
                    ? "bg-zinc-900 text-zinc-50"
                    : "bg-elevated text-muted hover:bg-zinc-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}


