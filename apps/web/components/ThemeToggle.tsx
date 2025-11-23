"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to prevent hydration mismatch
  }

  return (
    <div className="flex items-center gap-1 border border-[var(--card-border)] rounded-full p-1 bg-[var(--card-bg)]">
      <button
        onClick={() => setTheme("light")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "light"
            ? "bg-[var(--background)] text-[var(--primary)] shadow-sm"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
        aria-label="Light Mode"
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "system"
            ? "bg-[var(--background)] text-[var(--primary)] shadow-sm"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
        aria-label="System Mode"
      >
        <Monitor className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "dark"
            ? "bg-[var(--background)] text-[var(--primary)] shadow-sm"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
        aria-label="Dark Mode"
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
}
