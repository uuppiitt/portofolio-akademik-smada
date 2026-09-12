import type { Task } from "@/types";

/**
 * Data tugas sekolah.
 *
 * CARA MENAMBAH TUGAS BARU:
 * 1. Salin salah satu object di bawah ini.
 * 2. Ganti "slug" dengan teks unik tanpa spasi (huruf kecil, pakai tanda "-").
 * 3. Isi seluruh field sesuai tugas kamu.
 * 4. Untuk "pdfUrl", unggah PDF ke Google Drive, klik "Bagikan" -> "Siapa saja
 *    yang memiliki tautan", salin FILE_ID dari URL, lalu gunakan format:
 *    https://drive.google.com/file/d/FILE_ID/preview
 *
 * Lihat panduan-tambah-tugas.md untuk penjelasan lebih lengkap.
 */
export const tasks: Task[] = [
  {
    slug: "analisis-cerpen-perahu-kertas",
    title: "Analisis Unsur Intrinsik Cerpen \"Perahu Kertas\"",
    subject: "Bahasa Indonesia",
    grade: "XI",
    teacher: "Ibu Siti Nurhaliza, S.Pd.",
    date: "2026-08-10",
    description: "Analisis tema, alur, penokohan, dan sudut pandang pada cerpen yang ditentukan.",
    longDescription:
      "Tugas ini membahas unsur intrinsik cerpen \"Perahu Kertas\" secara menyeluruh, mencakup tema utama, struktur alur, karakterisasi tokoh, latar, sudut pandang, dan amanat cerita. Analisis disusun dalam format esai lima paragraf dengan kutipan pendukung dari teks.",
    pdfUrl: "https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/preview",
  },
  {
    slug: "laporan-praktikum-hukum-newton",
    title: "Laporan Praktikum Hukum Newton II",
    subject: "Fisika",
    grade: "X",
    teacher: "Bapak Ahmad Fauzi, S.Pd.",
    date: "2026-07-22",
    description: "Laporan hasil praktikum gaya dan percepatan menggunakan trolly dan beban gantung.",
    longDescription:
      "Laporan berisi tujuan praktikum, alat dan bahan, langkah kerja, tabel data hasil pengukuran, grafik hubungan gaya dan percepatan, serta pembahasan dan kesimpulan yang menghubungkan hasil dengan Hukum Newton II.",
    pdfUrl: "https://drive.google.com/file/d/2b3c4d5e6f7g8h9i0j1k/preview",
  },
  {
    slug: "essay-argumentative-climate-change",
    title: "Argumentative Essay: Climate Change Action",
    subject: "Bahasa Inggris",
    grade: "XII",
    teacher: "Mrs. Amanda Wijaya, M.Pd.",
    date: "2026-08-01",
    description: "A five-paragraph argumentative essay on individual responsibility toward climate change.",
    longDescription:
      "This essay presents a clear thesis on individual responsibility in addressing climate change, supported by three body paragraphs with evidence from credible sources, and a conclusion that reinforces the call to action.",
    pdfUrl: "https://drive.google.com/file/d/3c4d5e6f7g8h9i0j1k2l/preview",
  },
  {
    slug: "algoritma-pencarian-biner",
    title: "Implementasi Algoritma Pencarian Biner",
    subject: "Informatika",
    grade: "XI",
    teacher: "Bapak Deni Kurniawan, S.Kom.",
    date: "2026-08-15",
    description: "Dokumentasi kode dan flowchart algoritma binary search dalam bahasa Python.",
    longDescription:
      "Tugas mencakup flowchart algoritma, kode program Python yang telah diuji dengan lima kasus data, serta analisis kompleksitas waktu O(log n) dibandingkan pencarian linear.",
    pdfUrl: "https://drive.google.com/file/d/4d5e6f7g8h9i0j1k2l3m/preview",
  },
  {
    slug: "reaksi-redoks-elektrolisis",
    title: "Reaksi Redoks pada Sel Elektrolisis",
    subject: "Kimia",
    grade: "XII",
    teacher: "Ibu Ratna Dewi, S.Pd.",
    date: "2026-07-30",
    description: "Pembahasan reaksi oksidasi-reduksi yang terjadi pada proses elektrolisis larutan.",
    pdfUrl: "https://drive.google.com/file/d/5e6f7g8h9i0j1k2l3m4n/preview",
  },
  {
    slug: "peta-persebaran-sumber-daya-alam",
    title: "Peta Persebaran Sumber Daya Alam Indonesia",
    subject: "Geografi",
    grade: "XI",
    teacher: "Bapak Yusuf Hidayat, S.Pd.",
    date: "2026-08-05",
    description: "Peta tematik beserta narasi persebaran sumber daya alam utama di Indonesia.",
    pdfUrl: "https://drive.google.com/file/d/6f7g8h9i0j1k2l3m4n5o/preview",
  },
  {
    slug: "makalah-akhlak-terhadap-sesama",
    title: "Makalah Akhlak Terhadap Sesama Manusia",
    subject: "PAI",
    grade: "X",
    teacher: "Bapak Muhammad Iqbal, S.Ag.",
    date: "2026-07-18",
    description: "Kajian tentang adab dan akhlak dalam bergaul dengan sesama menurut ajaran Islam.",
    pdfUrl: "https://drive.google.com/file/d/7g8h9i0j1k2l3m4n5o6p/preview",
  },
  {
    slug: "turunan-fungsi-trigonometri",
    title: "Kumpulan Soal Turunan Fungsi Trigonometri",
    subject: "Matematika",
    grade: "XII",
    teacher: "Ibu Wulan Sari, S.Pd.",
    date: "2026-08-12",
    description: "Pembahasan 15 soal turunan fungsi trigonometri lengkap dengan langkah penyelesaian.",
    pdfUrl: "https://drive.google.com/file/d/8h9i0j1k2l3m4n5o6p7q/preview",
  },
  {
    slug: "studi-kasus-pasar-monopoli",
    title: "Studi Kasus: Struktur Pasar Monopoli",
    subject: "Ekonomi",
    grade: "X",
    teacher: "Ibu Dian Permata, S.E.",
    date: "2026-06-28",
    description: "Analisis studi kasus perusahaan yang beroperasi dalam struktur pasar monopoli.",
    pdfUrl: "https://drive.google.com/file/d/9i0j1k2l3m4n5o6p7q8r/preview",
  },
  {
    slug: "storyboard-video-edukasi",
    title: "Storyboard Video Edukasi Daur Ulang",
    subject: "Informatika",
    grade: "X",
    teacher: "Bapak Deni Kurniawan, S.Kom.",
    date: "2026-06-15",
    description: "Storyboard 12 panel untuk video edukasi tentang daur ulang sampah plastik.",
    pdfUrl: "https://drive.google.com/file/d/0j1k2l3m4n5o6p7q8r9s/preview",
  },
  {
    slug: "resensi-novel-laskar-pelangi",
    title: "Resensi Novel Laskar Pelangi",
    subject: "Bahasa Indonesia",
    grade: "X",
    teacher: "Ibu Siti Nurhaliza, S.Pd.",
    date: "2026-05-20",
    description: "Resensi lengkap mencakup sinopsis, kelebihan, kekurangan, dan nilai moral novel.",
    pdfUrl: "https://drive.google.com/file/d/1k2l3m4n5o6p7q8r9s0t/preview",
  },
  {
    slug: "eksperimen-hukum-kekekalan-energi",
    title: "Laporan Eksperimen Hukum Kekekalan Energi",
    subject: "Fisika",
    grade: "XI",
    teacher: "Bapak Ahmad Fauzi, S.Pd.",
    date: "2026-06-02",
    description: "Laporan eksperimen ayunan bandul untuk membuktikan hukum kekekalan energi mekanik.",
    pdfUrl: "https://drive.google.com/file/d/2l3m4n5o6p7q8r9s0t1u/preview",
  },
];
