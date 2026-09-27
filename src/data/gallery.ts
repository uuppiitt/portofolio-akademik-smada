import type { GalleryItem } from "@/types";

/**
 * Data gabungan pengalaman organisasi, dokumentasi event, dan hasil karya.
 *
 * CARA MENAMBAH ITEM BARU:
 * 1. Salin salah satu object di bawah ini.
 * 2. Ganti "id" dengan teks unik.
 * 3. Ganti "imageUrl" dengan path foto kamu di folder public/images/gallery/.
 * 4. Pilih "category" salah satu dari: "Organisasi", "Kepanitiaan",
 *    "Dokumentasi Event", "Karya Desain", "Video & Multimedia".
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "CO Sekbid 9 NEXIVATOR 49",
    category: "Organisasi",
    description:
      "Memimpin Seksi Bidang 9 Teknologi Informasi & Komunikasi (2025 — 2026).",
    imageUrl: "/images/gallery/osis.jpg",
    year: "2025-2026",
  },
  {
    id: "gal-2",
    title: "CO Smada Esport Clash 2025",
    category: "Organisasi",
    description:
      "",
    imageUrl: "/images/gallery/mpk.jpg",
    year: "2025",
  },
  {
    id: "gal-3",
    title: "Sie Acara LIGA SMADA",
    category: "Organisasi",
    description:
      "",
    imageUrl: "/images/gallery/pensi.jpg",
    year: "2026",
  },
  {
    id: "gal-4",
    title: "Sie PDD Wisuda Angkatan 46",
    category: "Kepanitiaan",
    description:
      "",
    imageUrl: "/images/gallery/classmeeting.jpg",
    year: "2025",
  },
  {
    id: "gal-5",
    title: "MD Wisuda Angkatan 47",
    category: "Kepanitiaan",
    description: "",
    imageUrl: "/images/gallery/ldks.jpg",
    year: "2026",
  },
  {
    id: "gal-6",
    title: "Visual Jockey 1st Aniversary E.M.M",
    category: "Kepanitiaan",
    description: "",
    imageUrl: "/images/gallery/wisuda.jpg",
    year: "2026",
  },
  {
    id: "gal-7",
    title: "Visual Jockey Crown Of Culture Baladewa Dance School",
    category: "Kepanitiaan",
    description: "",
    imageUrl: "/images/gallery/logo-osis.jpg",
    year: "2026",
  },
  {
    id: "gal-8",
    title: "Wakil Ketua Tim Pinandhita Production",
    category: "Organisasi",
    description: "",
    imageUrl: "/images/gallery/poster-pensi.jpg",
    year: "2025-2026",
  },
  {
    id: "gal-9",
    title: "Feed Instagram Sekolah",
    category: "Karya Desain",
    description: "Sistem desain grid dan template konten untuk akun Instagram resmi sekolah.",
    imageUrl: "/images/gallery/feed-instagram.jpg",
    year: "2024",
  },
];
