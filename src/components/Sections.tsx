import { LINKS, SKILLS } from "../data";

const Page = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-[1100px] mx-auto px-[4%] pt-[110px] pb-16">{children}</div>
);
const Title = ({ children }: { children: React.ReactNode }) => <h2 className="text-center text-[26px] mb-1.5">{children}</h2>;

export function TextSection({ title, text }: { title: string; text: string }) {
  return (
    <Page><Title>{title}</Title>
      <div className="bg-card rounded-md p-6 max-w-[640px] mx-auto my-6 leading-relaxed text-[#d6d6d6]">{text}</div>
    </Page>
  );
}

export function Placeholder({ title }: { title: string }) {
  return (
    <Page><Title>{title}</Title>
      <div className="bg-card rounded-md p-6 max-w-[640px] mx-auto my-6 text-center text-[#d6d6d6]">Placeholder. Content for this section will be added here.</div>
    </Page>
  );
}

export function SkillsSection() {
  return (
    <Page>
      {Object.entries(SKILLS).map(([group, list]) => (
        <div key={group}>
          <h3 className="text-center text-[22px] mt-8 mb-4"><span className="inline-block border-b-2 border-brand pb-1">{group}</span></h3>
          <div className="flex flex-wrap justify-center gap-3.5">
            {list.map(([name, note]) => (
              <div key={name} className="bg-card rounded-md px-[18px] py-5 w-[190px] text-center border-b-[3px] border-transparent hover:border-brand">
                <h4 className="font-bold mb-2">{name}</h4>
                <p className="text-mute text-[12.5px] leading-snug">{note || "Add a short description here"}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Page>
  );
}

export function ExperienceSection() {
  return (
    <Page><Title>Experience & Achievements</Title>
      <div className="relative max-w-[900px] mx-auto mt-8 before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-0.5 before:bg-[#555] before:left-2 md:before:left-1/2">
        {[1, 2, 3].map((n) => (
          <div key={n} className={`relative w-full pl-8 mb-8 md:w-1/2 md:pl-0 ${n % 2 ? "md:pr-9" : "md:ml-[50%] md:pl-9"}`}>
            <span className={`absolute top-[18px] w-4 h-4 rounded-full bg-brand left-0 ${n % 2 ? "md:left-auto md:-right-2" : "md:-left-2"}`} />
            <div className="bg-[#f1f1f1] text-[#222] rounded px-[18px] py-4">
              <h4 className="font-bold">Experience & Achievement {n}</h4>
              <small className="block text-[#666]">Organisation, Location</small>
              <small className="block text-[#666] mb-2">Month Year - Month Year</small>
              <p className="text-[13.5px] leading-snug">Placeholder text. Describe what you did here.</p>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}

export function ProjectsSection() {
  return (
    <Page><Title>Projects</Title>
      <p className="text-center text-mute">Many more to make!</p>
      <div className="flex flex-wrap justify-center gap-3.5 mt-7">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-card rounded w-[320px] overflow-hidden border-b-[3px] border-transparent hover:border-brand">
            <div className="h-[140px] bg-[#2b2b2b]" />
            <div className="p-4">
              <h4 className="text-brand text-[17px] font-bold mb-2">Project {n}</h4>
              <p className="text-[13px] text-[#cfcfcf] leading-snug mb-3">Placeholder description of the project goes here.</p>
              {["Tech", "Tech"].map((t, i) => <span key={i} className="inline-block bg-[#2c2c2c] rounded px-[9px] py-1 text-xs mr-1.5">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}

export function ContactSection() {
  const pill = "block w-max mx-auto my-3 bg-[#222] rounded-full px-[18px] py-2 text-sm hover:text-brand";
  return (
    <Page>
      <div className="bg-card rounded-lg px-[22px] py-[18px] max-w-[380px] mx-auto mb-5 flex gap-4 items-center">
        <div className="w-14 h-14 rounded-full bg-[#333] shrink-0" />
        <div>
          <h4 className="font-bold">Bhakti Jitendra Wagh</h4>
          <small className="block text-mute mt-0.5 mb-2">B.Tech IT Student, 1st Year</small>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0a66c2] text-white text-[13px] font-semibold px-3 py-1.5 rounded">View Profile</a>
        </div>
      </div>
      <p className="text-center text-mute">I’m always up for a chat. Feel free to reach out!</p>
      <a className={pill} href={LINKS.email}>bhaktii.wagh@gmail.com</a>
      <a className={pill} href={LINKS.github} target="_blank" rel="noopener noreferrer">github.com/Bhakti-W</a>
    </Page>
  );
}
