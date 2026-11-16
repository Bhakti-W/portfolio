import Avatar from "./Avatar";
import { PROFILES } from "../data";

type P = (typeof PROFILES)[number];

export default function Profiles({ onPick }: { onPick: (p: P) => void }) {
  return (
    <div className="fixed inset-0 bg-bg flex flex-col items-center justify-center text-center p-5">
      <h1 className="font-normal text-[clamp(28px,4vw,48px)] mb-9">Who’s Watching?</h1>
      <div className="flex flex-wrap justify-center gap-7">
        {PROFILES.map((p) => (
          <button key={p.name} onClick={() => onPick(p)} className="group text-mute hover:text-white">
            <Avatar color={p.color} className="w-[clamp(84px,11vw,130px)] block rounded border-[3px] border-transparent group-hover:border-white" />
            <span className="block mt-2.5 text-[clamp(14px,1.4vw,18px)]">{p.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
