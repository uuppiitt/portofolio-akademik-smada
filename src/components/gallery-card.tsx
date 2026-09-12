import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { GalleryItem } from "@/types";

function CardBody({ item }: { item: GalleryItem }) {
  return (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist-200 dark:bg-navy-800">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-3 text-xs text-gold-600 dark:text-gold-400">
        {item.category} · {item.year}
      </p>
      <h3 className="font-display text-lg leading-snug text-navy-900 dark:text-mist-50">
        {item.title}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-sm text-ink-500 dark:text-mist-100/60">
        {item.description}
      </p>
      {item.link && (
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-navy-900 dark:text-gold-400">
          Kunjungi tautan
          <ExternalLink size={12} />
        </span>
      )}
    </>
  );
}

export function GalleryCard({ item }: { item: GalleryItem }) {
  if (item.link) {
    return (
      <Link href={item.link} target="_blank" rel="noreferrer" className="group block">
        <CardBody item={item} />
      </Link>
    );
  }

  return (
    <div className="group">
      <CardBody item={item} />
    </div>
  );
}
