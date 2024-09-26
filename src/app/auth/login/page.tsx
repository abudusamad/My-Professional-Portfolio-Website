import { LoginForm } from "@/components/auth/login-form";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

const AuthLogin = () => {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
};

export default AuthLogin;
