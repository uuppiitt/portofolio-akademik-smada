# Panduan Lengkap Semua File Kode

Dokumen ini menjelaskan **setiap file** di proyek kamu: isinya apa, dan apakah perlu/aman untuk diedit.

> 🟢 = Sering kamu edit &nbsp;|&nbsp; 🟡 = Kadang perlu diedit &nbsp;|&nbsp; 🔴 = Jangan diedit kecuali paham React/Next.js

---

## 1. File Konfigurasi (Root Folder)

| File | Fungsi | Edit? |
|---|---|---|
| `package.json` | Daftar semua library yang dipakai (Next.js, Tailwind, dst) dan perintah (`npm run dev`, dll) | 🔴 |
| `next.config.mjs` | Pengaturan Next.js, termasuk domain gambar yang diizinkan | 🔴 |
| `tailwind.config.ts` | **Palet warna** (`navy`, `mist`, `gold`, `ink`) dan font | 🟡 Ganti warna di sini |
| `tsconfig.json` | Pengaturan TypeScript | 🔴 |
| `postcss.config.mjs` | Pengaturan pemrosesan CSS untuk Tailwind | 🔴 |
| `.gitignore` | Daftar file/folder yang tidak diupload ke GitHub (node_modules, dll) | 🔴 |
| `README.md` | Dokumentasi proyek | 🟡 |
| `panduan-tambah-tugas.md` | Panduan menambah tugas | 🟡 |
| `panduan-deploy-vercel.md` | Panduan deploy | 🟡 |

---

## 2. Data — Ini yang PALING SERING kamu edit 🟢

Semua isi/konten website ada di sini. Kamu **tidak perlu tahu coding** untuk mengedit file-file ini, cukup ikuti pola yang sudah ada.

| File | Isi | Contoh yang bisa diubah |
|---|---|---|
| `src/data/profile.ts` | Data pribadi kamu | Nama, status kelas, tagline, foto profil, biodata, minat, skill, email, WhatsApp, Instagram, GitHub |
| `src/data/gallery.ts` | Kartu di halaman "Pengalaman & Karya" | Tambah/ubah/hapus pengalaman organisasi, event, atau karya desain |
| `src/data/tasks.ts` | Arsip tugas sekolah | Tambah tugas baru (judul, mapel, kelas, guru, tanggal, link PDF) — lihat `panduan-tambah-tugas.md` |
| `src/data/certificates.ts` | Sertifikat di Beranda | Tambah/ubah sertifikat |

**Contoh struktur satu item di `profile.ts`:**
```ts
export const profile = {
  name: "Nama Kamu",
  status: "Siswa Kelas XII · Nama Sekolah",
  tagline: "Kalimat singkat tentang diri kamu",
  photoUrl: "/images/profile.jpg",
  email: "email@kamu.com",
  whatsapp: "https://wa.me/62812xxxxxxx",
  instagram: "https://instagram.com/username",
  github: "https://github.com/username",
  // ...dst
};
```

---

## 3. Struktur Halaman (`src/app/`) — Rangka website

| File/Folder | Halaman | Edit? |
|---|---|---|
| `src/app/layout.tsx` | Kerangka utama semua halaman (font, judul tab browser, navbar, footer) | 🟡 Ganti judul situs/SEO di sini |
| `src/app/globals.css` | Gaya global (warna dasar, animasi background) | 🟡 |
| `src/app/page.tsx` | **Halaman Beranda** — hero, tentang, skill, cuplikan tugas, cuplikan karya, sertifikat | 🟡 Untuk atur urutan/isi section |
| `src/app/pengalaman/page.tsx` | Halaman "Pengalaman & Karya" | 🟡 |
| `src/app/tugas/page.tsx` | Halaman daftar tugas (Portofolio Akademik) | 🔴 Jarang perlu diubah |
| `src/app/tugas/[slug]/page.tsx` | Halaman detail satu tugas + PDF | 🔴 |
| `src/app/kontak/page.tsx` | Halaman Kontak | 🟡 |
| `src/app/not-found.tsx` | Halaman 404 (jika alamat salah) | 🔴 |
| `src/app/sitemap.ts` | Sitemap otomatis untuk Google | 🔴 |
| `src/app/robots.ts` | Aturan untuk mesin pencari | 🔴 |

---

## 4. Komponen (`src/components/`) — Blok bangunan UI

Ini "potongan" tampilan yang dipakai berulang di berbagai halaman. **Biasanya tidak perlu diedit** kecuali kamu mau ubah tampilan/desain (bukan isi konten).

| File | Fungsi |
|---|---|
| `navbar.tsx` | Menu navigasi atas (termasuk daftar link menu) |
| `footer.tsx` | Bagian bawah setiap halaman |
| `hero.tsx` | Bagian hero di Beranda (foto + ikon berputar) |
| `theme-provider.tsx` / `theme-toggle.tsx` | Logika mode gelap/terang |
| `animated-background.tsx` | Background bergerak (blob warna) |
| `loading-screen.tsx` | Layar loading saat pertama buka situs |
| `back-to-top.tsx` | Tombol kembali ke atas |
| `reveal.tsx` | Animasi muncul saat scroll |
| `section-heading.tsx` | Judul + deskripsi tiap section |
| `gallery-card.tsx` / `gallery-grid.tsx` | Kartu & grid untuk halaman Pengalaman & Karya |
| `task-card.tsx` / `task-explorer.tsx` | Kartu & sistem pencarian/filter untuk Portofolio Akademik |
| `pdf-viewer.tsx` | Penampil PDF Google Drive di halaman detail tugas |
| `certificate-gallery.tsx` | Galeri sertifikat + lightbox |
| `contact-form.tsx` | Formulir di halaman Kontak |

---

## 5. Fungsi Bantu (`src/lib/`) dan Tipe Data (`src/types/`)

| File | Fungsi | Edit? |
|---|---|---|
| `src/lib/utils.ts` | Fungsi kecil (gabung class CSS, format tanggal) | 🔴 |
| `src/lib/tasks.ts` | Logika pencarian, filter, dan pagination tugas | 🔴 |
| `src/types/index.ts` | Definisi struktur data (Task, GalleryItem, dst) — **harus cocok** dengan data yang kamu isi di `src/data/` | 🔴 Jangan diubah kecuali menambah field baru |

---

## Bagian Mana yang Aman Kamu Ubah Sendiri?

✅ **Aman diubah tanpa risiko merusak situs:**
- Semua isi di `src/data/*.ts` (asal formatnya diikuti persis seperti contoh yang sudah ada)
- Warna di `tailwind.config.ts`
- Foto di folder `public/images/`

⚠️ **Hati-hati, bisa bikin situs error kalau salah ketik:**
- File di `src/app/` dan `src/components/` — ini kode React/TypeScript, satu tanda kurung atau tanda kutip hilang bisa bikin build gagal

💡 **Tips:** kalau mau ubah sesuatu di file 🔴/🟡, tanya saya dulu bagian mana yang perlu diubah dan bagaimana caranya — saya bisa kasih kode persisnya biar tidak salah.

---

# Panduan Menambahkan Foto

## Struktur Folder Gambar

```
public/
└── images/
    ├── profile.jpg              ← Foto profil kamu (dipakai di Beranda)
    ├── gallery/                 ← Foto Pengalaman & Karya
    │   ├── osis.jpg
    │   ├── mpk.jpg
    │   ├── pensi.jpg
    │   └── ...dst
    └── certificates/            ← Foto/scan sertifikat
        ├── cert-poster.jpg
        └── ...dst
```

## Langkah Menambahkan/Mengganti Foto

1. **Siapkan foto** — kompres dulu di [squoosh.app](https://squoosh.app) supaya ukurannya kecil (idealnya di bawah 500KB per foto) agar situs tetap cepat.
2. **Beri nama file** sesuai yang diminta:
   - Foto profil → `profile.jpg`, taruh di `public/images/`
   - Foto pengalaman/karya → taruh di `public/images/gallery/`, nama bebas (misal `foto-osis-2026.jpg`)
   - Foto sertifikat → taruh di `public/images/certificates/`, nama bebas
3. **Taruh file gambar ke folder yang sesuai** — bisa lewat:
   - **VS Code**: klik kanan folder `gallery` di panel Explorer → "Reveal in File Explorer" → copy-paste file gambar ke situ, ATAU langsung drag file gambar dari File Explorer ke folder tersebut di panel VS Code
   - **GitHub Desktop/web**: setelah file ditaruh di folder lokal, tinggal commit & push seperti biasa
4. **Hubungkan foto ke data** — buka file data yang sesuai dan sesuaikan `imageUrl`/`photoUrl`-nya dengan nama file yang kamu taruh. Contoh di `src/data/gallery.ts`:
   ```ts
   {
     id: "gal-1",
     title: "Ketua OSIS SMA Negeri 1 Harapan Bangsa",
     category: "Organisasi",
     description: "...",
     imageUrl: "/images/gallery/foto-osis-2026.jpg",  // ← sesuaikan nama file di sini
     year: "2025",
   },
   ```
   Perhatikan: path **selalu diawali `/images/...`** (bukan `public/images/...` — kata "public" tidak ditulis karena Next.js otomatis menganggap folder `public` sebagai folder dasar untuk file statis).
5. **Simpan, cek di `npm run dev`**, lalu commit & push seperti biasa.

## Menambah Foto Baru (Item Baru, Bukan Ganti yang Lama)

Kalau mau nambah pengalaman/karya baru (bukan cuma ganti foto lama), tambahkan objek baru di `src/data/gallery.ts` — sama seperti menambah tugas baru, cukup salin salah satu blok yang sudah ada lalu ganti isinya:

```ts
{
  id: "gal-13",                                    // id unik, urutan angka lanjut dari terakhir
  title: "Judul Kegiatan/Karya Baru",
  category: "Karya Desain",                        // pilih salah satu kategori yang tersedia
  description: "Deskripsi singkat.",
  imageUrl: "/images/gallery/nama-file-baru.jpg",
  year: "2026",
},
```

Ukuran foto yang disarankan:
- Foto profil: rasio 4:5 (potret), minimal 800×1000px
- Foto gallery & sertifikat: rasio 4:3, minimal 1200×900px
