import { HeroSection } from "@/components/home/hero-section";
import Experience from "./experience/_components/experience";
import { Skills } from "./skills/_components/skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Experience />
      <Skills />
    </>
  );
}
