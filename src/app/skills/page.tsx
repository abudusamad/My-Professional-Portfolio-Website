import { Suspense } from "react";
import { Metadata } from "next";
import { Skills } from "./_components/skills";


export const metadata: Metadata = {
  title: "skills",
  description:
    "Discover the key skills and competencies that drive professional success.",
};

const AuthLogin = () => {
  return (
    <Suspense>
      <Skills/>
    </Suspense>
  );
};

export default AuthLogin;
