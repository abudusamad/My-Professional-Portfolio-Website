
import { Suspense } from "react";
import { Metadata } from "next";
import { NewVerificationForm } from "@/components/auth/confirm-form";

export const metadata: Metadata = {
  title: "confirm",
  description: "Confirm the verification token ",
};

const AuthConfirmPage = () => {
  return (
    <Suspense>
      <NewVerificationForm/>
    </Suspense>
  );
};

export default AuthConfirmPage;
