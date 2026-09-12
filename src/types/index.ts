export type Grade = "X" | "XI" | "XII";

export interface Task {
  slug: string;
  title: string;
  subject: string;
  grade: Grade;
  teacher: string;
  date: string; // ISO format: YYYY-MM-DD
  description: string;
  longDescription?: string;
  pdfUrl: string; // https://drive.google.com/file/d/FILE_ID/preview
  thumbnailUrl?: string;
}

export type GalleryCategory =
  | "Organisasi"
  | "Kepanitiaan"
  | "Dokumentasi Event"
  | "Karya Desain"
  | "Video & Multimedia";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  description: string;
  imageUrl: string;
  year: string;
  link?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  imageUrl: string;
}

export interface SkillGroup {
  category: "Teknologi" | "Desain" | "Organisasi";
  skills: string[];
}
