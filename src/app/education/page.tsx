import { Suspense } from "react";
import { Metadata } from "next";
import Education from "./_components/education";


export const metadata: Metadata = {
  title: "experiences",
description: "Discover the academic background and educational achievements that have shaped my professional journey.",
};

const EducationPage = () => {
  return (
    <Suspense>
     <Education />
    </Suspense>
  );
};

export default EducationPage;
