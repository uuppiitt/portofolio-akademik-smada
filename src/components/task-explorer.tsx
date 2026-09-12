"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { TaskCard } from "./task-card";
import { getAllSubjects, getFilteredTasks, paginate } from "@/lib/tasks";
import type { Grade } from "@/types";

const grades: (Grade | "Semua")[] = ["Semua", "X", "XI", "XII"];

export function TaskExplorer() {
  const [query, setQuery] = useState("");
  const [grade, setGrade] = useState<Grade | "Semua">("Semua");
  const [subject, setSubject] = useState<string>("Semua");
  const [page, setPage] = useState(1);

  const subjects = useMemo(() => ["Semua", ...getAllSubjects()], []);

  const filtered = useMemo(
    () => getFilteredTasks({ q: query, grade, subject }),
    [query, grade, subject]
  );

  const { items, totalPages, currentPage } = paginate(filtered, page);

  function updateAndResetPage(fn: () => void) {
    fn();
    setPage(1);
  }

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-sm">
          <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-300 dark:text-mist-100/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => updateAndResetPage(() => setQuery(e.target.value))}
            placeholder="Cari judul atau deskripsi tugas..."
            className="w-full rounded-full border border-ink-900/10 bg-white py-2.5 pl-10 pr-4 text-sm text-ink-700 outline-none focus:border-gold-500 dark:border-mist-100/15 dark:bg-navy-900 dark:text-mist-100"
          />
        </div>

        <select
          value={subject}
          onChange={(e) => updateAndResetPage(() => setSubject(e.target.value))}
          className="w-full rounded-full border border-ink-900/10 bg-white px-4 py-2.5 text-sm text-ink-700 outline-none focus:border-gold-500 dark:border-mist-100/15 dark:bg-navy-900 dark:text-mist-100 md:w-56"
        >
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s === "Semua" ? "Semua Mata Pelajaran" : s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {grades.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => updateAndResetPage(() => setGrade(g))}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              grade === g
                ? "border-navy-900 bg-navy-900 text-mist-50 dark:border-gold-400 dark:bg-gold-400 dark:text-navy-950"
                : "border-ink-900/10 text-ink-500 hover:border-navy-900 hover:text-navy-900 dark:border-mist-100/15 dark:text-mist-100/70 dark:hover:border-gold-400 dark:hover:text-gold-400"
            )}
          >
            {g === "Semua" ? "Semua Kelas" : `Kelas ${g}`}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-ink-500 dark:text-mist-100/60">
        Menampilkan {items.length} dari {filtered.length} tugas
      </p>

      {items.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((task) => (
            <TaskCard key={task.slug} task={task} />
          ))}
        </div>
      ) : (
        <div className="mt-14 text-center text-sm text-ink-500 dark:text-mist-100/60">
          Tidak ada tugas yang cocok dengan pencarian atau filter ini.
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors",
                p === currentPage
                  ? "bg-navy-900 text-mist-50 dark:bg-gold-400 dark:text-navy-950"
                  : "text-ink-500 hover:bg-mist-100 dark:text-mist-100/70 dark:hover:bg-navy-800"
              )}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
