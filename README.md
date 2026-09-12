# Portofolio Akademik Pribadi

Website portofolio akademik pribadi untuk siswa SMA — berisi profil, pengalaman organisasi, karya desain/multimedia, arsip tugas sekolah (bisa dinilai langsung oleh guru lewat PDF), sertifikat, dan formulir kontak.

Dibangun dengan **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, dan **Framer Motion**.

## Struktur Halaman

| Halaman | Alamat | Isi |
|---|---|---|
| Beranda | `/` | Hero, tentang saya, skill, cuplikan tugas, cuplikan pengalaman & karya, galeri sertifikat |
| Pengalaman & Karya | `/pengalaman` | Semua foto organisasi, event, dan hasil karya — bisa difilter kategori |
| Portofolio Akademik | `/tugas` | Arsip tugas sekolah — pencarian, filter kelas & mata pelajaran, pagination |
| Detail Tugas | `/tugas/[slug]` | Preview PDF tugas dari Google Drive |
| Kontak | `/kontak` | Info kontak + formulir |

## Fitur Utama

- Mode terang & gelap
- Latar belakang dengan gradient bergerak halus (tidak flat)
- Foto profil di Beranda dikelilingi ikon yang berputar
- Galeri Pengalaman & Karya dengan filter kategori dan hover effect
- **Portofolio Akademik**: arsip tugas dengan pencarian, filter kelas & mata pelajaran, dan pagination
- Halaman detail tugas dengan **preview PDF langsung dari Google Drive** (tanpa perlu unduh)
- Galeri sertifikat dengan lightbox (tampil di Beranda)
- Formulir kontak
- SEO metadata, Open Graph, sitemap, dan robots.txt otomatis
- Responsif penuh untuk HP, tablet, dan desktop

## Struktur Folder

```
portofolio-akademik/
├── public/
│   └── images/              # Foto profil, galeri, sertifikat (lihat README di dalamnya)
├── src/
│   ├── app/                 # Routing Next.js (App Router)
│   │   ├── layout.tsx        # Layout utama (font, tema, navbar, footer, background)
│   │   ├── page.tsx          # Halaman Beranda (hero + tentang + skill + cuplikan + sertifikat)
│   │   ├── pengalaman/        # Halaman Pengalaman & Karya (gabungan)
│   │   ├── tugas/             # Portofolio Akademik
│   │   │   ├── page.tsx        # Daftar tugas (search, filter, pagination)
│   │   │   └── [slug]/page.tsx # Detail tugas + preview PDF
│   │   ├── kontak/             # Halaman kontak
│   │   ├── sitemap.ts          # Sitemap otomatis
│   │   └── robots.ts           # robots.txt otomatis
│   ├── components/            # Semua komponen reusable (Navbar, Hero, Card, dsb.)
│   ├── data/                  # Sumber data (profil, tugas, gallery, sertifikat)
│   ├── lib/                   # Fungsi bantu (filter, pagination, format tanggal)
│   └── types/                 # Definisi TypeScript
├── panduan-tambah-tugas.md    # Cara menambah tugas baru
├── panduan-deploy-vercel.md   # Cara deploy ke Vercel
└── package.json
```

## Menjalankan di Komputer Sendiri

Pastikan [Node.js](https://nodejs.org) versi 18 ke atas sudah terpasang.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

## Mengubah Data (Bagian yang Bisa Diganti)

Semua konten diambil dari file di `src/data/`, jadi kamu **tidak perlu menyentuh kode komponen** untuk mengubah isi:

| File | Isi yang diatur |
|---|---|
| `src/data/profile.ts` | Nama, status kelas, tagline, foto profil, biodata, minat, skill, email, WhatsApp, Instagram, GitHub |
| `src/data/gallery.ts` | Semua kartu di halaman Pengalaman & Karya (organisasi, kepanitiaan, event, karya desain, video) |
| `src/data/tasks.ts` | Arsip tugas sekolah (lihat `panduan-tambah-tugas.md`) |
| `src/data/certificates.ts` | Sertifikat yang tampil di Beranda |

## Menambah Tugas Baru

Lihat **`panduan-tambah-tugas.md`** — mencakup cara mengunggah PDF ke Google Drive dan mendapatkan link embed yang benar.

## Deploy ke Vercel

Lihat **`panduan-deploy-vercel.md`** untuk langkah lengkap dari GitHub hingga situs live.

## Kustomisasi Warna & Font

- Palet warna diatur di `tailwind.config.ts` (warna `navy`, `mist`, `gold`, `ink`).
- Font judul menggunakan **Newsreader** (serif) dan font isi menggunakan **Manrope** (sans-serif), diatur di `src/app/layout.tsx`.

## Lisensi

Bebas digunakan dan dimodifikasi untuk keperluan portofolio pribadi.
