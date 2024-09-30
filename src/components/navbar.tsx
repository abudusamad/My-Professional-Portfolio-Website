

// import { MobileSidebar } from "./mobile-sidebar";

import { Logo } from "./logo";
import { NavbarRoutes } from "./navbar-route";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center shadow-sm bg-[#0d1224] ">
      <div className="p-6">
              <Logo />
          </div>
      <NavbarRoutes />
    </div>
  );
};
