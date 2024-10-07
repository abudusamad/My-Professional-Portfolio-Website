"use client";

import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { SearchInput } from "./search-input";
import { UserMenu } from "./user-menu";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAdmin = pathname?.startsWith("/admin");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/projects";

  return (
    <div className="flex  items-center justify-between w-full">
      <div className="flex-1" />
      {isSearchPage && (
        <div className=" flex  flex-1 justify-center">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2  items-center justify-end">
        {isAdmin || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href="/teacher/courses">
            <Button size="sm" variant="blue">
              Admin
            </Button>
          </Link>
        )}
        <UserMenu />
      </div>
    </div>
  );
};
