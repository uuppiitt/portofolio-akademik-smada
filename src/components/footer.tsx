import Link from "next/link";
import { Github, Instagram, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";

const socials = [
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
  { href: profile.whatsapp, label: "WhatsApp", icon: MessageCircle },
  { href: profile.instagram, label: "Instagram", icon: Instagram },
  { href: profile.github, label: "GitHub", icon: Github },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-900/5 bg-white dark:border-mist-100/10 dark:bg-navy-900">
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-navy-900 dark:text-mist-50">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-500 dark:text-mist-100/60">{profile.status}</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/10 text-ink-500 transition-colors hover:border-gold-500 hover:text-gold-600 dark:border-mist-100/15 dark:text-mist-100/70 dark:hover:text-gold-400"
            >
              <Icon size={16} />
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-ink-900/5 py-4 text-center text-xs text-ink-300 dark:border-mist-100/10 dark:text-mist-100/40">
        © {new Date().getFullYear()} {profile.name}. Dibangun dengan Next.js untuk arsip akademik pribadi.
      </div>
    </footer>
  );
}
