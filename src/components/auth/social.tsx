"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { GoogleLogo } from "./google-logo";
import { GitHubLogo } from "./github-logo";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

export const Social = () => {
  const [googleLoading, setGoogleLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const SignInWithProvider = async (provider: "github" | "google") => {
    if (provider === "google") {
      setGoogleLoading(true);
    } else if (provider === "github") {
      setGithubLoading(true);
    }

    await signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    }).finally(() => {
      if (provider === "google") {
        setGoogleLoading(false);
      } else if (provider === "github") {
        setGithubLoading(false);
      }
    });
  };
  return (
 
      <div className="flex items-center w-full gap-x-2">
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          disabled={googleLoading}
          onClick={() => SignInWithProvider("google")}
        >
          {googleLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <GoogleLogo className="h-5 w-5" />
          )}
        </Button>
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          disabled={githubLoading}
          onClick={() => SignInWithProvider("github")}
        >
          {githubLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <GitHubLogo className="h-5 w-5" />
          )}
        </Button>
      </div>
  
  );
};
