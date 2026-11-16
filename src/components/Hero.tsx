import { DESC, LINKS } from "../data";

export default function Hero() {
  return (
    <section
      className="min-h-[56vh] flex flex-col justify-end px-[4%] pt-[120px] pb-10"
      style={{ background: "linear-gradient(90deg,rgba(0,0,0,.75),rgba(0,0,0,.2)),linear-gradient(#2a2a2e,#1a1a1c 60%,#141414)" }}
    >
      <h2 className="text-[clamp(30px,4vw,52px)] font-bold mb-3.5">Bhakti Jitendra Wagh</h2>
      <p className="max-w-[min(720px,92%)] text-[clamp(13px,1.15vw,16px)] font-semibold leading-snug mb-5">{DESC}</p>
      <div className="flex flex-wrap gap-3">
        <a href="#about" className="inline-flex items-center gap-2 px-5 py-2 rounded bg-white text-black font-bold">
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current"><path d="M6 4l14 8-14 8z" /></svg>Resume
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[rgba(109,109,110,.7)] font-bold">
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5v.5" /></svg>Linkedin
        </a>
      </div>
    </section>
  );
}
