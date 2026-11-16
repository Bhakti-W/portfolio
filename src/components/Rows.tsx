import { CONTINUE, SHADES, TOP_PICKS } from "../data";

function Row({ title, items, offset }: { title: string; items: [string, string][]; offset: number }) {
  return (
    <div className="px-[4%] mt-7 mb-9">
      <h3 className="text-xl mb-2.5">{title}</h3>
      <div className="tiles grid grid-flow-col gap-1.5 overflow-x-auto [grid-auto-columns:calc((100%-12px)/3)] md:[grid-auto-columns:calc((100%-30px)/6)]">
        {items.map(([label, key], i) => (
          <a key={label} href={`#${key}`} style={{ background: SHADES[(i + offset) % SHADES.length] }}
             className="relative aspect-[5/4] flex items-center justify-center overflow-hidden rounded-[3px] border-b-[3px] border-transparent hover:border-brand font-bold text-[15px] [text-shadow:0_1px_3px_#000]">
            <span className="absolute inset-0 bg-black/35" />
            <b className="relative">{label}</b>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Rows({ who }: { who: string }) {
  return (
    <>
      <Row title={`Today’s Top Picks for ${who}`} items={TOP_PICKS} offset={0} />
      <Row title={`Continue Watching for ${who}`} items={CONTINUE} offset={7} />
    </>
  );
}
