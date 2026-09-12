export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <span className="blob blob-one absolute h-[30rem] w-[30rem] rounded-full bg-navy-700/25 blur-2xl dark:bg-navy-500/30" />
      <span className="blob blob-two absolute h-[26rem] w-[26rem] rounded-full bg-gold-400/30 blur-2xl dark:bg-gold-400/20" />
      <span className="blob blob-three absolute h-[24rem] w-[24rem] rounded-full bg-navy-900/15 blur-2xl dark:bg-mist-100/15" />
    </div>
  );
}
