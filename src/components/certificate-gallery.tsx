"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Certificate } from "@/types";

export function CertificateGallery({ certificates }: { certificates: Certificate[] }) {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => setActive(cert)}
            className="group text-left"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist-200 dark:bg-navy-800">
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-xs text-gold-600 dark:text-gold-400">
              {cert.issuer} · {cert.year}
            </p>
            <h3 className="font-display text-base text-navy-900 dark:text-mist-50">{cert.title}</h3>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Tutup"
                className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full border border-mist-100/30 text-mist-50"
              >
                <X size={16} />
              </button>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-mist-200">
                <Image src={active.imageUrl} alt={active.title} fill className="object-cover" />
              </div>
              <p className="mt-4 text-center font-display text-lg text-mist-50">{active.title}</p>
              <p className="text-center text-sm text-mist-100/70">
                {active.issuer} · {active.year}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
