export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-navy-950"
    >
      {/* Pendar hijau emerald di kiri atas */}
      <span className="blob blob-one absolute h-[34rem] w-[34rem] rounded-full bg-emerald-600/25 blur-[90px]" />
      {/* Pendar teal tipis di kiri bawah, biar tidak polos hitam total */}
      <span className="blob blob-two absolute h-[26rem] w-[26rem] rounded-full bg-teal-500/10 blur-[90px]" />
      {/* Pendar ungu/magenta di kanan atas */}
      <span className="blob blob-three absolute h-[30rem] w-[30rem] rounded-full bg-purple-700/25 blur-[90px]" />
    </div>
  );
}
