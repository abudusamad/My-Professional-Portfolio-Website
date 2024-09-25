import { RegisterForm } from "@/components/auth/register-form";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register for an account",
};

const RegisterPage = () => {
  return (
    <Suspense>
      <RegisterForm />
    </Suspense>
  );
};

export default RegisterPage;
