"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { GalleryCard } from "./gallery-card";
import type { GalleryItem } from "@/types";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(() => {
    const set = new Set(items.map((item) => item.category));
    return ["Semua", ...Array.from(set)];
  }, [items]);

  const [active, setActive] = useState<string>("Semua");

  const filtered = active === "Semua" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              active === category
                ? "border-navy-900 bg-navy-900 text-mist-50 dark:border-gold-400 dark:bg-gold-400 dark:text-navy-950"
                : "border-ink-900/10 text-ink-500 hover:border-navy-900 hover:text-navy-900 dark:border-mist-100/15 dark:text-mist-100/70 dark:hover:border-gold-400 dark:hover:text-gold-400"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-ink-500 dark:text-mist-100/60">
          Belum ada item pada kategori ini.
        </p>
      )}
    </div>
  );
}
