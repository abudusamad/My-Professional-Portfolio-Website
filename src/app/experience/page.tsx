
import { Suspense } from "react";
import { Metadata } from "next";
import Experience from "./_components/experience";
import { Skills } from "../skills/_components/skills";
import Education from "../education/_components/education";
import Contact from "../contact/_components/contact";

export const metadata: Metadata = {
  title: "experiences",
  description: "Explore the professional experiences and career journey.",
};

const ExperiencePage = () => {
  return (
    <Suspense>
      <Experience />
      <Skills />
      <Education />
      <Contact/>
    </Suspense>
  );
};

export default ExperiencePage;
