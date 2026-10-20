import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GalleryGrid } from "@/components/gallery-grid";
import { WorkMosaic } from "@/components/work-mosaic";
import { galleryItems } from "@/data/gallery";

const workCategories = ["Karya Desain", "Video & Multimedia"];
const experienceItems = galleryItems.filter((i) => !workCategories.includes(i.category));
const workItems = galleryItems.filter((i) => workCategories.includes(i.category));

export const metadata: Metadata = {
  title: "Pengalaman & Karya",
  description:
    "Dokumentasi organisasi, kepanitiaan, event sekolah, dan hasil karya desain maupun multimedia.",
};

export default function ExperienceAndWorkPage() {
  return (
    <div className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            kicker="Pengalaman & Karya"
            title="Perjalanan organisasi dan hasil karya"
            description="Kumpulan dokumentasi keterlibatan di organisasi, kepanitiaan, dan event sekolah, diikuti hasil karya yang pernah saya kerjakan."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <GalleryGrid items={experienceItems} />
        </Reveal>

        {workItems.length > 0 && (
          <div className="mt-20 md:mt-28">
            <Reveal>
              <SectionHeading
                kicker="Karya"
                title="Hasil karya"
                description="Desain dan multimedia yang pernah saya buat."
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <WorkMosaic items={workItems} />
            </Reveal>
          </div>
        )}
      </div>
    </div>
  );
}
