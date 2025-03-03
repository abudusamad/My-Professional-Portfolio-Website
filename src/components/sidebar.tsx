
import { SidebarRoutes } from "./sidebar-route";


export const Sidebar = () => {
  return (
    <div className="h-full border-r-[1px] border-[#25213b] flex flex-col overflow-y-auto shadow-sm">
      <div className="p-6"></div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
