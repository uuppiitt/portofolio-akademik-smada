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
    slug: "tugas-algoritma-latihan-1-2",
    title: "Tugas Algoritma Latihan 1 & 2",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-08-08",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1LQ7u_7bS3sv03WVcklcqun5fBNVFPvtw/preview",
  },
  {
    slug: "revisi-tugas-algoritma-latihan-1-2",
    title: "Revisi Tugas Algoritma Latihan 1 & 2",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-08-14",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1CFRyZORWACSUIhM8jvnej168FlVZFOql/preview",
  },
  {
    slug: "tugas-algoritma-latihan-3",
    title: "Tugas Algoritma Latihan 3",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-08-20",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1CHc9jzWXInumrTLbejxiWBbcp_YNXd23/preview",
  },
  {
    slug: "menentukan-luas-segitiga-siku-siku-dan-sembarang",
    title: "Menentukan Luas Segitiga Siku-Siku & Sembarang",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-09-23",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1IVwgAbxkQfLdiMmJmoe3GJzj_kZpxWuz/preview",
  },
  {
    slug: "rangkuman-materi-algoritma",
    title: "Rangkuman Materi Algoritma",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-09-23",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1IZ2-8aMYa2MP_Y3Ys3i0bdF2wjUeDjOc/preview",
  },
  {
    slug: "flowchart-menghitung-luas-segitiga-sembarang",
    title: "Flowchart Menghitung Luas Segitiga Sembarang",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-09-23",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1IakSeTvSC9Bbg7UmbzJHbEiESzN8Q5QD/preview",
  },
  {
    slug: "flowchart-membuat-kopi",
    title: "Flowchart Membuat Kopi",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-09-23",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1IhxW9npt-eey1ov9Fom-ueSmekG63Tv2/preview",
  },
  {
    slug: "biodata-cpp",
    title: "Biodata C++",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-09-23",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1mXU48QPpNGl3vchysIfViVhFGctLsJ7n/preview",
  },
  {
    slug: "menghitung-luas-keliling-lingkaran-cpp-define",
    title: "Menghitung Luas & Keliling Lingkaran C++ Define",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-10-01",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1NMVmjXq_M9_oYqyoE7BRA4acjd_ZwyzN/preview",
  },
  {
    slug: "menghitung-luas-keliling-lingkaran-cpp-const",
    title: "Menghitung Luas & Keliling Lingkaran C++ Const",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-10-01",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1ARJZuns8x-gfIJ3-LYiHSehsL_ab6LXp/preview",
  },
  {
    slug: "menghitung-luas-keliling-lingkaran-cpp-cin",
    title: "Menghitung Luas & Keliling Lingkaran C++ Cin",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-10-15",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1TSvDRAquKJnZxbC6aR6Dkg5wfv4SHbab/preview",
  },
  {
    slug: "tugas-cpp-membuat-program-gaji-karyawan",
    title: "Tugas C++ Membuat Program Gaji Karyawan",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-10-15",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1MXT_rIJzeqyJQfD6FV0HT6mzLhhTjc6s/preview",
  },
  {
    slug: "tugas-cpp-bilangan-positif-negatif-if-if-if",
    title: "Tugas C++ Bilangan Positif & Negatif If If If",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-10-29",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1tfG5_bNlPRkTh87uTGPJ0RWd7fGi7u84/preview",
  },
  {
    slug: "tugas-cpp-bilangan-positif-negatif-if-else-if",
    title: "Tugas C++ Bilangan Positif & Negatif If Else If",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-11-05",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1EOIZ2UqvzBnP7MVogmWhTcRQuu8v10Mj/preview",
  },
  {
    slug: "tugas-cpp-persamaan-kuadrat-if-if-if",
    title: "Tugas C++ Persamaan Kuadrat If If If",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-11-05",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1VhNK3O3kYm2QVj4PtAX_A3Vt5qxn5ejm/preview",
  },
  {
    slug: "tugas-cpp-persamaan-kuadrat-if-else-if",
    title: "Tugas C++ Persamaan Kuadrat If Else If",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2024-11-05",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1wMdQLhoP6k9wx8KVAkvx1Okwp_6No3_x/preview",
  },
  {
    slug: "tugas-cpp-switch-case",
    title: "Tugas C++ Switch Case",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2025-01-21",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1KtRuQZJNBEqbxpOpUkTgRvm5cbte-lf0/preview",
  },
  {
    slug: "tugas-cpp-bilangan-aritmatika-for",
    title: "Tugas C++ Bilangan Aritmatika For",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2025-01-21",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1U5f_KPAS4nLYT9Z9jLmq9taHO9WEePP5/preview",
  },
  {
    slug: "tugas-cpp-bilangan-aritmatika-while",
    title: "Tugas C++ Bilangan Aritmatika While",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2025-02-02",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/10wp-xMs230-HAmM_UNDxQfGmtPiytLNF/preview",
  },
  {
    slug: "tugas-cpp-bilangan-aritmatika-while-do",
    title: "Tugas C++ Bilangan Aritmatika While Do",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2025-03-17",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/17zVha_e0RhZc_duS2WHosP-BjjeRsbOE/preview",
  },
  {
    slug: "tugas-cpp-bintang-while",
    title: "Tugas C++ Bintang While",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2025-03-17",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/10BuR93b3SnWvnAwQ8jvXOk9nFvvuJTxW/preview",
  },
  {
    slug: "tugas-cpp-bintang-while-do",
    title: "Tugas C++ Bintang While Do",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2025-03-17",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1AhQzUzLqWr_6HOZv_ex3hDc4X-D2LbCb/preview",
  },
  {
    slug: "tugas-cpp-bintang-for",
    title: "Tugas C++ Bintang For",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2025-04-25",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1l7CrJyilWOVPVv73ZjoXQm8BiWCDJbMW/preview",
  },
  {
    slug: "tugas-cpp-perulangan-for-break",
    title: "Tugas C++ Perulangan For Break",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2025-04-25",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1d2X5M-w2v510XNBLIJbIWv63O-1CtAvS/preview",
  },
  {
    slug: "tugas-cpp-perulangan-for-continue",
    title: "Tugas C++ Perulangan For Continue",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2025-04-25",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1fNgY1JY-zVW_Iv9aOVy2RPU0thfSPBdn/preview",
  },
  {
    slug: "tugas-cpp-function-break-continue",
    title: "Tugas C++ Function Break Continue",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2025-05-06",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/12K1M5aY1Jz053DPxE9WH_23s-OEM-BHT/preview",
  },
  {
    slug: "tugas-cpp-parameter-keliling-trapesium",
    title: "Tugas C++ Parameter Keliling Trapesium",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2025-05-06",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1_I4bxldPj8SJk7h_8hRkuXAd-tHduvGD/preview",
  },
  {
    slug: "tugas-cpp-parameter-luas-trapesium",
    title: "Tugas C++ Parameter Luas Trapesium",
    subject: "Informatika",
    grade: "X",
    teacher: "Ibu Galuh Maulidia, S.Pd.",
    date: "2025-05-06",
    description: "",
    longDescription:
      "",
    pdfUrl: "https://drive.google.com/file/d/1FlRRRPaazEWW_ER2-Teu_-dLUyb5NnGe/preview",
  },
];
