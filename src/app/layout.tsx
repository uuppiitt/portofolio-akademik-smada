import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";
import { BackToTop } from "@/components/back-to-top";
import { AnimatedBackground } from "@/components/animated-background";
import { profile } from "@/data/profile";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://portofolio-rangga.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Portofolio Akademik`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  keywords: ["portofolio akademik", "siswa SMA", "arsip tugas sekolah", profile.name],
  openGraph: {
    title: `${profile.name} — Portofolio Akademik`,
    description: profile.tagline,
    url: siteUrl,
    siteName: profile.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Portofolio Akademik`,
    description: profile.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <body className={`${newsreader.variable} ${manrope.variable} font-sans`}>
        <AnimatedBackground />
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
