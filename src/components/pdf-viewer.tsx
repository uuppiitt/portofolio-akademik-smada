"use client";

import { useRef } from "react";
import { Download, Maximize2 } from "lucide-react";

function getDownloadUrl(pdfUrl: string) {
  const match = pdfUrl.match(/\/d\/([^/]+)/);
  const fileId = match?.[1];
  return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : pdfUrl;
}

export function PdfViewer({ pdfUrl, title }: { pdfUrl: string; title: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);

  function handleFullscreen() {
    frameRef.current?.requestFullscreen?.();
  }

  return (
    <div className="card-surface overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-ink-900/5 px-5 py-3 dark:border-mist-100/10">
        <p className="truncate text-sm font-medium text-ink-700 dark:text-mist-100">{title}</p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={handleFullscreen}
            className="flex items-center gap-1.5 rounded-full border border-ink-900/10 px-3 py-1.5 text-xs text-ink-700 transition-colors hover:border-navy-900 dark:border-mist-100/15 dark:text-mist-100 dark:hover:border-gold-400"
          >
            <Maximize2 size={13} />
            Layar Penuh
          </button>
          <a
            href={getDownloadUrl(pdfUrl)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-navy-900 px-3 py-1.5 text-xs text-mist-50 transition-transform hover:-translate-y-0.5 dark:bg-gold-400 dark:text-navy-950"
          >
            <Download size={13} />
            Unduh PDF
          </a>
        </div>
      </div>
      <iframe
        ref={frameRef}
        src={pdfUrl}
        title={title}
        className="h-[70vh] w-full bg-mist-100 dark:bg-navy-950"
        allow="autoplay"
      />
    </div>
  );
}
