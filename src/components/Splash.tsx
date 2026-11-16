export default function Splash({ onSkip }: { onSkip: () => void }) {
  return (
    <div onClick={onSkip} className="fixed inset-0 bg-bg flex items-center justify-center cursor-pointer">
      <span className="font-logo text-brand tracking-wide text-[clamp(48px,9vw,110px)] animate-splash">BHAKTI WAGH</span>
    </div>
  );
}
