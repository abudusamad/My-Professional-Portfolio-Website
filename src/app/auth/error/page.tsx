
import { Suspense } from "react";
import { Metadata } from "next";
import { ErrorCard } from "@/components/auth/error-card";

export const metadata: Metadata = {
  title: "Error",
  description: " Error in the page",
};

const AuthErrorPage = () => {
  return (
    <Suspense>
      <ErrorCard />
    </Suspense>
  );
};

export default AuthErrorPage;
