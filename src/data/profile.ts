import type { SkillGroup } from "@/types";

export const profile = {
  name: "Rangga Aditya Pratama",
  status: "Siswa Kelas XII · SMA Negeri 1 Harapan Bangsa",
  tagline:
    "Merancang antarmuka, mengedit visual, dan menggerakkan acara sekolah — lalu mendokumentasikan semuanya di satu tempat.",
  location: "Surabaya, Jawa Timur",
  photoUrl: "/images/profile.jpg",
  about:
    "Saya siswa jurusan Informatika yang menghabiskan waktu luang di antara kelas desain, rapat OSIS, dan tenggat kepanitiaan. Saya percaya dokumentasi yang rapi adalah bentuk tanggung jawab — baik untuk tugas sekolah maupun untuk proyek organisasi.",
  interests: [
    "Desain antarmuka & pengalaman pengguna",
    "Fotografi dan videografi acara",
    "Manajemen organisasi siswa",
    "Pengembangan web front-end",
  ],
  email: "rangga.aditya@email.com",
  whatsapp: "https://wa.me/6281234567890",
  instagram: "https://instagram.com/rangga.aditya",
  github: "https://github.com/ranggaaditya",
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Teknologi",
    skills: ["HTML & CSS", "JavaScript", "React / Next.js", "Python Dasar", "Microsoft Office"],
  },
  {
    category: "Desain",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva Tingkat Lanjut", "CapCut & Premiere Pro", "Figma"],
  },
  {
    category: "Organisasi",
    skills: ["Manajemen Acara", "Kerja Tim", "Public Speaking", "Manajemen Waktu", "Kepemimpinan Proyek"],
  },
];
