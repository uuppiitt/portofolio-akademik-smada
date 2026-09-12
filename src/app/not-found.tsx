import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-6xl text-navy-900 dark:text-gold-400">404</p>
      <h1 className="mt-3 font-display text-2xl text-navy-900 dark:text-mist-50">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-2 max-w-md text-sm text-ink-500 dark:text-mist-100/60">
        Halaman yang kamu cari mungkin sudah dipindahkan atau tidak pernah ada.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-mist-50 dark:bg-gold-400 dark:text-navy-950"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
