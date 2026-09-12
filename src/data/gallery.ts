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
    title: "Ketua OSIS SMA Negeri 1 Harapan Bangsa",
    category: "Organisasi",
    description:
      "Memimpin 8 bidang kerja OSIS dan mengoordinasikan program kerja tahunan bersama pembina dan perwakilan kelas (2025 — Sekarang).",
    imageUrl: "/images/gallery/osis.jpg",
    year: "2025",
  },
  {
    id: "gal-2",
    title: "Anggota MPK",
    category: "Organisasi",
    description:
      "Mengawasi jalannya program OSIS dan menjadi jembatan aspirasi siswa ke pihak sekolah (2024 — 2025).",
    imageUrl: "/images/gallery/mpk.jpg",
    year: "2024",
  },
  {
    id: "gal-3",
    title: "Ketua Divisi Dokumentasi — Pentas Seni Angkasa",
    category: "Kepanitiaan",
    description:
      "Mengelola tim dokumentasi 6 orang untuk meliput seluruh rangkaian acara, dari gladi bersih hingga hari-H.",
    imageUrl: "/images/gallery/pensi.jpg",
    year: "2025",
  },
  {
    id: "gal-4",
    title: "Koordinator Acara — Class Meeting",
    category: "Kepanitiaan",
    description:
      "Merancang rundown lomba antar kelas dan mengoordinasikan 15 volunteer selama tiga hari acara.",
    imageUrl: "/images/gallery/classmeeting.jpg",
    year: "2024",
  },
  {
    id: "gal-5",
    title: "Fasilitator Latihan Dasar Kepemimpinan (LDKS)",
    category: "Dokumentasi Event",
    description: "Mendampingi 40 peserta LDKS dalam sesi simulasi organisasi dan manajemen konflik.",
    imageUrl: "/images/gallery/ldks.jpg",
    year: "2025",
  },
  {
    id: "gal-6",
    title: "Dokumentasi Wisuda Angkatan 2025",
    category: "Dokumentasi Event",
    description: "Kumpulan foto dan video acara pelepasan siswa kelas XII tahun ajaran 2024/2025.",
    imageUrl: "/images/gallery/wisuda.jpg",
    year: "2025",
  },
  {
    id: "gal-7",
    title: "Logo Ulang Tahun OSIS ke-15",
    category: "Karya Desain",
    description: "Identitas visual untuk perayaan 15 tahun OSIS, dipakai di seluruh materi publikasi.",
    imageUrl: "/images/gallery/logo-osis.jpg",
    year: "2025",
  },
  {
    id: "gal-8",
    title: "Poster Pentas Seni Angkasa",
    category: "Karya Desain",
    description: "Poster utama dan seri poster media sosial untuk acara pentas seni tahunan.",
    imageUrl: "/images/gallery/poster-pensi.jpg",
    year: "2025",
  },
  {
    id: "gal-9",
    title: "Feed Instagram Sekolah",
    category: "Karya Desain",
    description: "Sistem desain grid dan template konten untuk akun Instagram resmi sekolah.",
    imageUrl: "/images/gallery/feed-instagram.jpg",
    year: "2024",
  },
  {
    id: "gal-10",
    title: "Situs Pendaftaran LDKS",
    category: "Karya Desain",
    description: "Halaman pendaftaran sederhana dengan formulir dan info kegiatan LDKS 2025.",
    imageUrl: "/images/gallery/website-ldks.jpg",
    link: "https://github.com/ranggaaditya/ldks-landing",
    year: "2025",
  },
  {
    id: "gal-11",
    title: "Highlight Reel Class Meeting",
    category: "Video & Multimedia",
    description: "Video rekap tiga hari class meeting, dipublikasikan di kanal YouTube sekolah.",
    imageUrl: "/images/gallery/video-classmeeting.jpg",
    year: "2024",
  },
  {
    id: "gal-12",
    title: "Kru Multimedia Sekolah",
    category: "Video & Multimedia",
    description:
      "Bertanggung jawab atas desain publikasi sekolah, dokumentasi upacara, dan pengelolaan akun Instagram sekolah.",
    imageUrl: "/images/gallery/multimedia.jpg",
    year: "2023",
  },
];
