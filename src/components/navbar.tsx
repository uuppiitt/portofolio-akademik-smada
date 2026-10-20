"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/pengalaman", label: "Pengalaman & Karya" },
  { href: "/tugas", label: "Portofolio Akademik" },
  { href: "/kontak", label: "Kontak" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const siteName = "Uppit.";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
        scrolled || open
          ? "border-ink-900/10 bg-mist-50/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150 dark:border-mist-100/10 dark:bg-navy-950/40"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-lg text-navy-900 dark:text-mist-50">
            {siteName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm transition-colors",
                  active
                    ? "text-navy-900 dark:text-gold-400 font-medium"
                    : "text-ink-500 hover:text-navy-900 dark:text-mist-100/70 dark:hover:text-mist-50"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-gold-400"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/10 text-ink-700 dark:border-mist-100/15 dark:text-mist-100 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink-900/5 bg-mist-50/95 backdrop-blur dark:border-mist-100/10 dark:bg-navy-950/95 lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-3">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-sm",
                      active
                        ? "bg-mist-100 text-navy-900 font-medium dark:bg-navy-900 dark:text-gold-400"
                        : "text-ink-500 dark:text-mist-100/70"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
