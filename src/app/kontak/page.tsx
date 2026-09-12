import type { Metadata } from "next";
import Link from "next/link";
import { Github, Instagram, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi saya melalui email, WhatsApp, Instagram, atau GitHub.",
};

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "WhatsApp", value: "Kirim pesan langsung", href: profile.whatsapp, icon: MessageCircle },
  { label: "Instagram", value: "@rangga.aditya", href: profile.instagram, icon: Instagram },
  { label: "GitHub", value: "ranggaaditya", href: profile.github, icon: Github },
];

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            kicker="Kontak"
            title="Mari terhubung"
            description="Untuk kolaborasi proyek, pertanyaan tugas, atau sekadar menyapa — silakan hubungi lewat kanal berikut atau isi formulir di bawah."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-3">
            {channels.map(({ label, value, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-surface flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-gold-500/60"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist-100 text-navy-900 dark:bg-navy-800 dark:text-gold-400">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm text-ink-500 dark:text-mist-100/60">{label}</p>
                  <p className="font-medium text-ink-700 dark:text-mist-100">{value}</p>
                </div>
              </Link>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
