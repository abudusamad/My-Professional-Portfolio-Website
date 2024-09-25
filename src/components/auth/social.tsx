"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "@/auth";

export const Social = () => {
  const [googleLoading] = useState(false);
  const [githubLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const SignInWithProvider = async (value: "github" | "google") => {
    setLoading(true);

    await signIn(value).finally(() => {
      setLoading(false);
    });
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="w-full" variant="outline" disabled={loading}>
        {googleLoading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <span className="h-5 w-5">
            <FcGoogle />
          </span>
        )}
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        disabled={loading}
        onClick={() => SignInWithProvider("github")}
      >
        {githubLoading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <span className="h-5 w-5">
            <FaGithub />
          </span>
        )}
      </Button>
    </div>
  );
};
