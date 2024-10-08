"use client";

import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { MobileSidebar } from "./mobile-sidebar";
import { NavbarRoutes } from "./navbar-route";
import { SearchInput } from "./search-input";

export const Navbar = () => {
  const pathname = usePathname();

  const isSearchPage = pathname === "/projects";

  return (
    <div className="p-4 h-full flex items-center #[0d1224] z-10 top-0  justify-between w-full border-b-[1px] shadow-sm px-8 gap-4">
      <div className="flex-grow-0">
        <Logo />
        <MobileSidebar />
      </div>
      {isSearchPage && (
        <div className="flex-grow justify-center hidden md:flex">
          <SearchInput />
        </div>
      )}
      <NavbarRoutes />
    </div>
  );
};
