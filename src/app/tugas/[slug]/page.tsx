import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, GraduationCap, User } from "lucide-react";
import { PdfViewer } from "@/components/pdf-viewer";
import { TaskCard } from "@/components/task-card";
import { Reveal } from "@/components/reveal";
import { formatDate } from "@/lib/utils";
import { getRelatedTasks, getTaskBySlug } from "@/lib/tasks";
import { tasks } from "@/data/tasks";

export function generateStaticParams() {
  return tasks.map((task) => ({ slug: task.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const task = getTaskBySlug(params.slug);
  if (!task) return {};
  return {
    title: task.title,
    description: task.description,
  };
}

export default function TaskDetailPage({ params }: { params: { slug: string } }) {
  const task = getTaskBySlug(params.slug);
  if (!task) notFound();

  const related = getRelatedTasks(task);

  return (
    <div className="section-pad">
      <div className="container-page max-w-4xl">
        <Reveal>
          <Link
            href="/tugas"
            className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-navy-900 dark:text-mist-100/60 dark:hover:text-gold-400"
          >
            <ArrowLeft size={15} />
            Kembali ke daftar tugas
          </Link>

          <p className="mt-6 text-sm text-gold-600 dark:text-gold-400">{task.subject}</p>
          <h1 className="mt-2 font-display text-3xl text-navy-900 dark:text-mist-50 md:text-4xl">
            {task.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500 dark:text-mist-100/60">
            <span className="flex items-center gap-1.5">
              <GraduationCap size={15} />
              Kelas {task.grade}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={15} />
              {task.teacher}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={15} />
              {formatDate(task.date)}
            </span>
          </div>

          <p className="mt-6 max-w-prose text-ink-700 dark:text-mist-100/80">
            {task.longDescription ?? task.description}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <PdfViewer pdfUrl={task.pdfUrl} title={task.title} />
        </Reveal>

        {related.length > 0 && (
          <Reveal delay={0.15} className="mt-16">
            <h2 className="font-display text-xl text-navy-900 dark:text-mist-50">
              Tugas lain di {task.subject}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <TaskCard key={item.slug} task={item} />
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
