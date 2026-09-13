export function HeroAurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <span className="aurora-blob-a absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-aurora-green/35 blur-3xl dark:bg-aurora-teal/40" />
      <span className="aurora-blob-b absolute -top-48 right-0 h-[26rem] w-[26rem] rounded-full bg-aurora-purple/35 blur-3xl dark:bg-aurora-magenta/35" />
    </div>
  );
}
