export default function Avatar({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect width="100" height="100" fill={color} />
      <circle cx="32" cy="42" r="8" fill="#111" />
      <circle cx="68" cy="42" r="8" fill="#111" />
      <circle cx="35" cy="39" r="2.5" fill="#fff" />
      <circle cx="71" cy="39" r="2.5" fill="#fff" />
      <path d="M30 66q20 12 40 0" stroke="#111" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
