import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TaskExplorer } from "@/components/task-explorer";

export const metadata: Metadata = {
  title: "Portofolio Akademik",
  description: "Arsip tugas sekolah yang dapat dicari dan difilter berdasarkan kelas dan mata pelajaran.",
};

export default function TasksPage() {
  return (
    <div className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            kicker="Portofolio Akademik"
            title="Arsip tugas sekolah"
            description="Setiap tugas dapat dibuka langsung sebagai PDF di halaman detail."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <TaskExplorer />
        </Reveal>
      </div>
    </div>
  );
}
