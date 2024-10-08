"use client";

import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { UserMenu } from "./user-menu";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAdmin = pathname?.startsWith("/admin");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/projects";

  return (
   
      <div className="flex gap-x-2  items-center justify-end">
        {isAdmin || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href="/admin">
            <Button size="sm" variant="blue">
              Admin
            </Button>
          </Link>
        )}
        <UserMenu />
      </div>
    
  );
};
