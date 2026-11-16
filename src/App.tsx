import { useEffect, useState } from "react";
import Splash from "./components/Splash";
import Profiles from "./components/Profiles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rows from "./components/Rows";
import { SkillsSection, ExperienceSection, ProjectsSection, ContactSection, TextSection, Placeholder } from "./components/Sections";
import { ABOUT, PROFILES } from "./data";

type Stage = "splash" | "profiles" | "browse";

function useHash() {
  const read = () => window.location.hash.slice(1) || "home";
  const [hash, setHash] = useState(read);
  useEffect(() => {
    const f = () => { setHash(read()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", f);
    return () => window.removeEventListener("hashchange", f);
  }, []);
  return hash;
}

export default function App() {
  const [stage, setStage] = useState<Stage>("splash");
  const [profile, setProfile] = useState(PROFILES[0]);
  const hash = useHash();

  useEffect(() => {
    if (stage !== "splash") return;
    const t = setTimeout(() => setStage("profiles"), 2400);
    return () => clearTimeout(t);
  }, [stage]);

  if (stage === "splash") return <Splash onSkip={() => setStage("profiles")} />;
  if (stage === "profiles")
    return <Profiles onPick={(p) => { setProfile(p); window.location.hash = "home"; setStage("browse"); }} />;

  const view = (() => {
    switch (hash) {
      case "about": return <TextSection title="About" text={ABOUT} />;
      case "skills": return <SkillsSection />;
      case "experience": return <ExperienceSection />;
      case "projects": return <ProjectsSection />;
      case "contact": return <ContactSection />;
      case "certifications": return <Placeholder title="Certifications" />;
      case "recommendations": return <Placeholder title="Recommendations" />;
      case "music": return <Placeholder title="Music" />;
      case "reading": return <Placeholder title="Reading" />;
      case "blogs": return <Placeholder title="Blogs" />;
      default: return <><Hero /><Rows who={profile.name.toLowerCase()} /></>;
    }
  })();

  return (
    <>
      <Navbar active={hash} profile={profile} onSwitch={() => setStage("profiles")} />
      <main>{view}</main>
    </>
  );
}
