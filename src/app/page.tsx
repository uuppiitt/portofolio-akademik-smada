import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GalleryCard } from "@/components/gallery-card";
import { CertificateGallery } from "@/components/certificate-gallery";
import { tasks } from "@/data/tasks";
import { galleryItems } from "@/data/gallery";
import { certificates } from "@/data/certificates";
import { profile, skillGroups } from "@/data/profile";

const stats = [
  { label: "Tugas Terarsip", value: `${tasks.length}+` },
  { label: "Dokumentasi & Karya", value: `${galleryItems.length}+` },
  { label: "Sertifikat", value: `${certificates.length}+` },
  { label: "Mata Pelajaran", value: `${new Set(tasks.map((t) => t.subject)).size}` },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Tentang Saya */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <SectionHeading kicker="Tentang Saya" title="Mengenal lebih dekat" description={profile.about} />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card-surface h-full rounded-2xl p-7">
                <h3 className="font-display text-xl text-navy-900 dark:text-mist-50">Biodata Singkat</h3>
                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-ink-900/5 pb-3 dark:border-mist-100/10">
                    <dt className="text-ink-500 dark:text-mist-100/60">Nama Lengkap</dt>
                    <dd className="text-ink-700 dark:text-mist-100">{profile.name}</dd>
                  </div>
                  <div className="flex justify-between border-b border-ink-900/5 pb-3 dark:border-mist-100/10">
                    <dt className="text-ink-500 dark:text-mist-100/60">Status</dt>
                    <dd className="text-ink-700 dark:text-mist-100">{profile.status}</dd>
                  </div>
                  <div className="flex justify-between pb-1">
                    <dt className="text-ink-500 dark:text-mist-100/60">Domisili</dt>
                    <dd className="text-ink-700 dark:text-mist-100">{profile.location}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-surface h-full rounded-2xl p-7">
                <h3 className="font-display text-xl text-navy-900 dark:text-mist-50">Minat & Passion</h3>
                <ul className="mt-5 space-y-3">
                  {profile.interests.map((interest) => (
                    <li key={interest} className="flex items-start gap-3 text-sm text-ink-500 dark:text-mist-100/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.category} delay={i * 0.1}>
                <div className="card-surface h-full rounded-2xl p-6">
                  <p className="text-xs text-gold-600 dark:text-gold-400">{group.category}</p>
                  <ul className="mt-4 space-y-2.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="text-sm text-ink-700 dark:text-mist-100/80">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pengalaman & Karya preview */}
      <section className="section-pad bg-white/70 backdrop-blur-sm dark:bg-navy-900/60">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              kicker="Pengalaman & Karya"
              title="Organisasi, event, dan hasil karya"
              description="Sebagian kecil dari dokumentasi organisasi, kepanitiaan, dan karya desain maupun multimedia yang pernah dikerjakan."
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-8 grid gap-6 sm:grid-cols-3">
            {galleryItems.slice(0, 3).map((galleryItem) => (
              <GalleryCard key={galleryItem.id} item={galleryItem} />
            ))}
          </Reveal>
          <Reveal delay={0.2} className="mt-8">
            <Link
              href="/pengalaman"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 dark:text-gold-400"
            >
              Lihat semua pengalaman & karya
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Sertifikat */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              kicker="Sertifikat"
              title="Penghargaan dan pelatihan"
              description="Klik salah satu sertifikat untuk melihatnya dalam ukuran penuh."
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <CertificateGallery certificates={certificates} />
          </Reveal>
        </div>
      </section>

      {/* Statistik ringkas */}
      <section className="border-t border-ink-900/5 bg-white/70 py-12 backdrop-blur-sm dark:border-mist-100/10 dark:bg-navy-900/60">
        <div className="container-page grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-navy-900 dark:text-gold-400">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-500 dark:text-mist-100/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
