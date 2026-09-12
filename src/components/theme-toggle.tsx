"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/10 text-ink-700 transition-colors hover:border-gold-500 hover:text-gold-600 dark:border-mist-100/15 dark:text-mist-100 dark:hover:text-gold-400"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
