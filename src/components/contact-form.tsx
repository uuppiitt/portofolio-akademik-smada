"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Formulir ini belum terhubung ke backend/email service.
    // Hubungkan ke layanan seperti Formspree, Resend, atau Google Apps Script
    // dengan mengganti fungsi ini sesuai kebutuhan.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="card-surface rounded-2xl p-8 text-center">
        <p className="font-display text-xl text-navy-900 dark:text-mist-50">Pesan terkirim</p>
        <p className="mt-2 text-sm text-ink-500 dark:text-mist-100/60">
          Terima kasih sudah menghubungi. Saya akan membalas secepatnya.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-5 rounded-2xl p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-ink-700 dark:text-mist-100">
            Nama
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Nama lengkap"
            className="mt-1.5 w-full rounded-lg border border-ink-900/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold-500 dark:border-mist-100/15 dark:bg-navy-900 dark:text-mist-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-ink-700 dark:text-mist-100">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="nama@email.com"
            className="mt-1.5 w-full rounded-lg border border-ink-900/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold-500 dark:border-mist-100/15 dark:bg-navy-900 dark:text-mist-100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm text-ink-700 dark:text-mist-100">
          Subjek
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="Tentang apa pesan ini?"
          className="mt-1.5 w-full rounded-lg border border-ink-900/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold-500 dark:border-mist-100/15 dark:bg-navy-900 dark:text-mist-100"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-ink-700 dark:text-mist-100">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tulis pesan kamu di sini..."
          className="mt-1.5 w-full resize-none rounded-lg border border-ink-900/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold-500 dark:border-mist-100/15 dark:bg-navy-900 dark:text-mist-100"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-mist-50 transition-transform hover:-translate-y-0.5 dark:bg-gold-400 dark:text-navy-950"
      >
        Kirim Pesan
        <Send size={15} />
      </button>
    </form>
  );
}
