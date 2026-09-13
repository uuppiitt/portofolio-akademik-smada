# Gambar yang Perlu Ditambahkan

Folder ini kosong secara sengaja — silakan tambahkan foto/gambar asli kamu dengan nama file berikut agar sesuai dengan data di `src/data/`.

## 1. Foto Profil
- `public/images/profile.jpg`
- Rasio disarankan: 4:5 (potret), minimal 800x1000px.

## 2. Pengalaman & Karya — `public/images/gallery/`
Sesuai `src/data/gallery.ts`, siapkan foto organisasi, event, dan hasil karya:
- `osis.jpg`, `mpk.jpg`
- `pensi.jpg`, `classmeeting.jpg`
- `ldks.jpg`, `wisuda.jpg`
- `logo-osis.jpg`, `poster-pensi.jpg`, `feed-instagram.jpg`, `website-ldks.jpg`
- `video-classmeeting.jpg`, `multimedia.jpg`

Rasio disarankan: 4:3, minimal 1200x900px.

## 3. Sertifikat — `public/images/certificates/`
Sesuai `src/data/certificates.ts`, siapkan (ditampilkan langsung di halaman Beranda):
- `cert-poster.jpg`
- `cert-ldks.jpg`
- `cert-uiux.jpg`
- `cert-pensi.jpg`
- `cert-osis.jpg`

Bisa berupa hasil scan atau screenshot sertifikat, rasio 4:3.

## 4. Ikon Berputar di Beranda — `public/images/orbit/`
Sesuai `src/components/hero.tsx`, siapkan 5 gambar (logo/ikon kecil, PNG background transparan lebih bagus):
- `icon-1.png`
- `icon-2.png`
- `icon-3.png`
- `icon-4.png`
- `icon-5.png`

Rasio disarankan: persegi (1:1), minimal 100x100px. Boleh kurang atau lebih dari 5 gambar — kalau jumlahnya diubah, sesuaikan juga array `orbitImages` di `src/components/hero.tsx`.

## Catatan

- Kamu bebas mengganti nama file, asal juga mengubah `imageUrl` / `photoUrl` yang sesuai di file data (`src/data/profile.ts`, `src/data/gallery.ts`, `src/data/certificates.ts`).
- Kompres gambar terlebih dahulu (misalnya lewat [squoosh.app](https://squoosh.app)) agar situs tetap cepat.
