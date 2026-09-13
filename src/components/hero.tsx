"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/**
 * Gambar/logo yang berputar mengelilingi foto profil.
 * Ganti path di bawah ini dengan gambar kamu sendiri.
 * Taruh file gambarnya di: public/images/orbit/
 * Ukuran disarankan: persegi (1:1), minimal 100x100px, background transparan (PNG) lebih bagus.
 */
const orbitImages = [
  "/images/orbit/icon-1.webp",
  "/images/orbit/icon-2.webp",
  "/images/orbit/icon-3.webp",
  "/images/orbit/icon-4.webp",
  "/images/orbit/icon-5.webp",
];
const RADIUS = 175;

export function Hero() {
  return (
    <section className="section-pad overflow-hidden">
      <div className="container-page grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="text-sm text-gold-600 dark:text-gold-400">
            {profile.status}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-4 font-display text-4xl leading-[1.1] text-navy-900 dark:text-mist-50 sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-lg text-lg text-ink-500 dark:text-mist-100/75">
            {profile.tagline}
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/tugas"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-mist-50 transition-transform hover:-translate-y-0.5 dark:bg-gold-400 dark:text-navy-950"
            >
              Lihat Portofolio
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-6 py-3 text-sm font-medium text-ink-700 transition-colors hover:border-navy-900 hover:text-navy-900 dark:border-mist-100/20 dark:text-mist-100 dark:hover:border-gold-400 dark:hover:text-gold-400"
            >
              Hubungi Saya
              <Mail size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto flex h-[22rem] w-[22rem] items-center justify-center"
        >
          {/* Cincin gambar yang berputar di belakang foto */}
          <div className="orbit-ring absolute inset-0">
            {orbitImages.map((src, index) => {
              const angle = (360 / orbitImages.length) * index;
              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2 h-11 w-11"
                  style={{
                    transform: `rotate(${angle}deg) translate(${RADIUS}px) rotate(-${angle}deg)`,
                    marginLeft: "-1.375rem",
                    marginTop: "-1.375rem",
                  }}
                >
                  <div className="orbit-icon relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-navy-900/10 dark:bg-navy-800">
                    <Image src={src} alt="" fill sizes="44px" className="object-cover p-2" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Foto profil semi-transparan agar ikon di belakang terlihat */}
          <div className="relative h-64 w-64 overflow-hidden rounded-full bg-mist-200 opacity-90 ring-8 ring-mist-50 dark:bg-navy-900 dark:ring-navy-950">
            <Image
              src={profile.photoUrl}
              alt={`Foto profil ${profile.name}`}
              fill
              sizes="256px"
              className="object-cover"
              priority
            />
          </div>

          <div className="card-surface absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl px-5 py-3 shadow-lg shadow-navy-900/10">
            <p className="text-xs text-ink-300 dark:text-mist-100/50">Status Akademik</p>
            <p className="mt-0.5 font-display text-sm text-navy-900 dark:text-mist-50">
              Kelas XII · Tahun Ajaran 2025/2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
