
import { Suspense } from "react";
import { Metadata } from "next";
import Experience from "./_components/experience";
import { Skills } from "../skills/_components/skills";

export const metadata: Metadata = {
  title: "experiences",
  description: "Explore the professional experiences and career journey.",
};

const AuthLogin = () => {
  return (
    <Suspense>
      <Experience />
      <Skills />
    </Suspense>
  );
};

export default AuthLogin;
