# Panduan Menambah Tugas Baru

Semua tugas sekolah disimpan di satu file: **`src/data/tasks.ts`**. Kamu tidak perlu mengubah kode halaman sama sekali — cukup tambahkan data baru di file ini.

## Langkah 1 — Unggah PDF ke Google Drive

1. Buka [Google Drive](https://drive.google.com), unggah file PDF tugas kamu.
2. Klik kanan file → **Bagikan** → **Bagikan**.
3. Ubah akses menjadi **"Siapa saja yang memiliki tautan"** dengan peran **Pelihat (Viewer)**.
4. Klik **Salin tautan**. Tautan akan terlihat seperti ini:
   ```
   https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0J/view?usp=sharing
   ```
5. Ambil bagian **FILE_ID** (teks di antara `/d/` dan `/view`), lalu susun ulang menjadi format embed:
   ```
   https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0J/preview
   ```

> Format `/preview` inilah yang dipakai website agar PDF bisa dibaca langsung di halaman, tanpa diunduh.

## Langkah 2 — Tambahkan Data Tugas

Buka `src/data/tasks.ts`, lalu tambahkan objek baru ke dalam array `tasks`, mengikuti contoh berikut:

```ts
{
  slug: "analisis-cerpen-perahu-kertas",
  title: "Analisis Unsur Intrinsik Cerpen \"Perahu Kertas\"",
  subject: "Bahasa Indonesia",
  grade: "XI",
  teacher: "Ibu Siti Nurhaliza, S.Pd.",
  date: "2026-08-10",
  description: "Analisis tema, alur, penokohan, dan sudut pandang pada cerpen yang ditentukan.",
  longDescription: "Penjelasan lebih panjang tentang isi tugas (opsional).",
  pdfUrl: "https://drive.google.com/file/d/FILE_ID/preview",
},
```

### Penjelasan Setiap Kolom

| Kolom | Wajib? | Keterangan |
|---|---|---|
| `slug` | Ya | Teks unik untuk URL, huruf kecil, spasi diganti tanda `-`. Contoh: `laporan-praktikum-fisika`. Tidak boleh sama dengan tugas lain. |
| `title` | Ya | Judul tugas yang tampil di card dan halaman detail. |
| `subject` | Ya | Nama mata pelajaran, contoh: `Matematika`, `Kimia`, `Informatika`. |
| `grade` | Ya | Salah satu dari `"X"`, `"XI"`, atau `"XII"`. |
| `teacher` | Ya | Nama guru mata pelajaran. |
| `date` | Ya | Tanggal pengumpulan, format `YYYY-MM-DD`. |
| `description` | Ya | Deskripsi singkat (1 kalimat), tampil di card. |
| `longDescription` | Tidak | Deskripsi lebih detail, tampil di halaman detail. Jika kosong, `description` akan dipakai. |
| `pdfUrl` | Ya | Link embed Google Drive dari Langkah 1. |

## Langkah 3 — Simpan dan Cek

Simpan file, lalu jalankan `npm run dev` (jika belum berjalan). Tugas baru akan otomatis muncul di halaman **Portofolio Akademik** (`/tugas`), termasuk di hasil pencarian, filter kelas, dan filter mata pelajaran — tidak perlu konfigurasi tambahan.

## Menambah Mata Pelajaran Baru

Kamu tidak perlu mendaftarkan mata pelajaran secara terpisah. Filter mata pelajaran di halaman `/tugas` otomatis dibuat berdasarkan nilai `subject` yang ada di `tasks.ts`. Cukup ketik nama mata pelajaran baru pada tugas yang bersangkutan.

## Tips

- Gunakan nama file PDF dan `slug` yang deskriptif supaya mudah dicari di kemudian hari.
- Jika sebuah tugas direvisi, cukup ganti `pdfUrl` dengan tautan file PDF versi terbaru — tidak perlu membuat entri baru.
- Untuk tugas kelompok, kamu bisa menambahkan nama anggota lain di dalam `longDescription`.
