import type { MetadataRoute } from "next";
import { tasks } from "@/data/tasks";

const siteUrl = "https://portofolio-rangga.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/pengalaman",
    "/tugas",
    "/kontak",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const taskRoutes = tasks.map((task) => ({
    url: `${siteUrl}/tugas/${task.slug}`,
    lastModified: new Date(task.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...taskRoutes];
}
