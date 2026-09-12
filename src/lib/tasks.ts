import { tasks } from "@/data/tasks";
import type { Grade, Task } from "@/types";

export const PAGE_SIZE = 6;

export interface TaskQuery {
  q?: string;
  grade?: Grade | "Semua";
  subject?: string | "Semua";
  page?: number;
}

export function getAllSubjects(): string[] {
  const subjects = new Set(tasks.map((task) => task.subject));
  return Array.from(subjects).sort((a, b) => a.localeCompare(b, "id"));
}

export function getFilteredTasks({ q, grade, subject }: TaskQuery): Task[] {
  const query = (q ?? "").trim().toLowerCase();

  return tasks
    .filter((task) => {
      const matchesQuery =
        query.length === 0 ||
        task.title.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query) ||
        task.subject.toLowerCase().includes(query);

      const matchesGrade = !grade || grade === "Semua" || task.grade === grade;
      const matchesSubject = !subject || subject === "Semua" || task.subject === subject;

      return matchesQuery && matchesGrade && matchesSubject;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function paginate<T>(items: T[], page: number, pageSize = PAGE_SIZE) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
    totalItems: items.length,
  };
}

export function getTaskBySlug(slug: string): Task | undefined {
  return tasks.find((task) => task.slug === slug);
}

export function getRelatedTasks(task: Task, limit = 3): Task[] {
  return tasks
    .filter((item) => item.slug !== task.slug && item.subject === task.subject)
    .slice(0, limit);
}
