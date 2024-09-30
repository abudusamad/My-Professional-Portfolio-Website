import { Logo } from "./logo";
import { MobileSidebar } from "./mobile-sidebar";
import { NavbarRoutes } from "./navbar-route";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center shadow-md bg-[#0d1224] ">
      <Logo />
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
