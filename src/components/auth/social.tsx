"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
  const [googleLoading] = useState(false);
  const [githubLoading] = useState(false);
  const [loading] = useState(false);
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
      <Button size="lg" className="w-full" variant="outline" disabled={loading}>
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
