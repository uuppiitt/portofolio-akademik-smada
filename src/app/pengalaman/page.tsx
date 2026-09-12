import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GalleryGrid } from "@/components/gallery-grid";
import { galleryItems } from "@/data/gallery";

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
            description="Kumpulan dokumentasi keterlibatan di OSIS, MPK, kepanitiaan, event sekolah, serta hasil desain dan multimedia yang pernah dikerjakan."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <GalleryGrid items={galleryItems} />
        </Reveal>
      </div>
    </div>
  );
}
