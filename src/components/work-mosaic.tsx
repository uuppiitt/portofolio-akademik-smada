import { ExternalLink } from "lucide-react";
import type { GalleryItem } from "@/types";

function Tile({ item }: { item: GalleryItem }) {
  const content = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.imageUrl}
        alt={item.title}
        loading="lazy"
        className="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-[11px] text-gold-400">
          {item.category} · {item.year}
        </p>
        <p className="flex items-center gap-1.5 font-display text-sm leading-snug text-mist-50">
          {item.title}
          {item.link && <ExternalLink size={12} />}
        </p>
      </div>
    </>
  );

  const cls = "group relative mb-2 block break-inside-avoid overflow-hidden rounded-lg bg-mist-200 dark:bg-navy-800 md:mb-3";

  return item.link ? (
    <a href={item.link} target="_blank" rel="noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <div className={cls}>{content}</div>
  );
}

/** Karya ditampilkan langsung tanpa kartu: foto tersusun rapat seperti puzzle (masonry). */
export function WorkMosaic({ items }: { items: GalleryItem[] }) {
  return (
    <div className="columns-2 gap-2 md:columns-3 md:gap-3 lg:columns-4">
      {items.map((item) => (
        <Tile key={item.id} item={item} />
      ))}
    </div>
  );
}
