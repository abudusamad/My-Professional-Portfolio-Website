import { Suspense } from "react";
import { Metadata } from "next";
import { Skills } from "./_components/skills";
import Education from "../education/_components/education";
import Contact from "../contact/_components/contact";

export const metadata: Metadata = {
  title: "skills",
  description:
    "Discover the key skills and competencies that drive professional success.",
};

const SkillPage = () => {
  return (
    <Suspense>
      <Skills />
      <Education />
      <Contact />
    </Suspense>
  );
};

export default SkillPage;
