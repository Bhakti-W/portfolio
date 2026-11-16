import Avatar from "./Avatar";
import { PROFILES } from "../data";

const LINKS: [string, string][] = [["Home", "home"], ["Professional", "experience"], ["Skills", "skills"], ["Projects", "projects"], ["Hire Me", "contact"]];

export default function Navbar({ active, profile, onSwitch }: { active: string; profile: (typeof PROFILES)[number]; onSwitch: () => void }) {
  return (
    <nav className="fixed top-0 inset-x-0 z-20 flex flex-wrap items-center gap-x-5 gap-y-2 px-[4%] pt-[calc(14px+env(safe-area-inset-top,0px))] pb-7 bg-gradient-to-b from-black from-20% to-transparent">
      <a href="#home" className="font-logo text-brand text-3xl tracking-wide mr-1.5">BHAKTI WAGH</a>
      {LINKS.map(([label, key]) => (
        <a key={key} href={`#${key}`} className={`text-sm hover:text-brand ${active === key ? "text-brand" : ""}`}>{label}</a>
      ))}
      <button onClick={onSwitch} aria-label="Switch profile" className="ml-auto">
        <Avatar color={profile.color} className="w-8 h-8 rounded-[3px] block" />
      </button>
    </nav>
  );
}
