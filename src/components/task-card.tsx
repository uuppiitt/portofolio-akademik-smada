import Link from "next/link";
import { FileText } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Task } from "@/types";

export function TaskCard({ task }: { task: Task }) {
  return (
    <Link
      href={`/tugas/${task.slug}`}
      className="card-surface group flex flex-col rounded-2xl p-6 transition-colors hover:border-gold-500/60"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-mist-100 px-2.5 py-1 text-xs text-navy-800 dark:bg-navy-800 dark:text-mist-100/80">
          Kelas {task.grade}
        </span>
        <FileText size={16} className="text-ink-300 dark:text-mist-100/40" />
      </div>
      <p className="mt-4 text-xs text-gold-600 dark:text-gold-400">{task.subject}</p>
      <h3 className="mt-1 font-display text-lg leading-snug text-navy-900 dark:text-mist-50">
        {task.title}
      </h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm text-ink-500 dark:text-mist-100/60">
        {task.description}
      </p>
      <p className="mt-4 text-xs text-ink-300 dark:text-mist-100/40">{formatDate(task.date)}</p>
    </Link>
  );
}
