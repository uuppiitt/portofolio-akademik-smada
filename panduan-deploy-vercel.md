# Panduan Deploy ke Vercel

Vercel adalah platform hosting resmi untuk Next.js dan gratis untuk penggunaan pribadi seperti ini.

## Opsi A — Deploy Lewat GitHub (Direkomendasikan)

### 1. Unggah Proyek ke GitHub

```bash
cd portofolio-akademik
git init
git add .
git commit -m "Portofolio akademik pertama"
```

Buat repository baru di [github.com/new](https://github.com/new), lalu:

```bash
git remote add origin https://github.com/USERNAME/portofolio-akademik.git
git branch -M main
git push -u origin main
```

### 2. Hubungkan ke Vercel

1. Buka [vercel.com](https://vercel.com) dan masuk menggunakan akun GitHub.
2. Klik **Add New → Project**.
3. Pilih repository `portofolio-akademik` yang baru saja diunggah.
4. Vercel akan otomatis mendeteksi framework **Next.js** — biarkan pengaturan default.
5. Klik **Deploy** dan tunggu proses build selesai (biasanya 1–2 menit).
6. Setelah selesai, kamu akan mendapatkan URL seperti `https://portofolio-akademik.vercel.app`.

### 3. Update Otomatis

Setiap kali kamu melakukan `git push` ke branch `main` (misalnya setelah menambah tugas baru), Vercel akan otomatis membangun ulang dan memperbarui situs — tidak perlu deploy manual lagi.

```bash
git add .
git commit -m "Tambah tugas baru: Laporan Praktikum Kimia"
git push
```

## Opsi B — Deploy Lewat Vercel CLI (Tanpa GitHub)

```bash
npm install -g vercel
cd portofolio-akademik
vercel
```

Ikuti instruksi di terminal (login, pilih scope, konfirmasi pengaturan proyek). Untuk deploy ke production:

```bash
vercel --prod
```

## Menggunakan Domain Sendiri (Opsional)

1. Di dashboard Vercel, buka proyek → tab **Settings → Domains**.
2. Masukkan domain yang sudah kamu beli (misalnya `ranggapratama.com`).
3. Ikuti instruksi untuk mengarahkan DNS domain ke Vercel.

## Sebelum Deploy — Checklist

- [ ] Ganti `siteUrl` di `src/app/layout.tsx` dan `src/app/sitemap.ts` dengan URL Vercel/domain asli kamu.
- [ ] Tambahkan foto profil, galeri (pengalaman & karya), dan sertifikat di folder `public/images/` (lihat `public/images/README.md`).
- [ ] Perbarui data pribadi di `src/data/profile.ts` (email, WhatsApp, Instagram, GitHub).
- [ ] Cek seluruh `pdfUrl` di `src/data/tasks.ts` sudah menggunakan format `/preview` dan bisa diakses publik.

## Troubleshooting Singkat

| Masalah | Solusi |
|---|---|
| Build gagal karena TypeScript error | Jalankan `npm run build` di lokal untuk melihat pesan error lengkap sebelum push. |
| Gambar tidak muncul di production | Pastikan path gambar di `src/data/*.ts` sama persis dengan nama file di `public/images/`. |
| PDF tidak muncul (blank) | Pastikan setting berbagi file di Google Drive adalah "Siapa saja yang memiliki tautan". |
