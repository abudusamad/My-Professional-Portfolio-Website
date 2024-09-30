import { MenuIcon } from "lucide-react";
import { Popover, PopoverTrigger } from "./ui/popover";
import { AvatarImg } from "./avatarImage";

export const UserMenu = async () => {
  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <div className="cursor-pointer flex items-center gap-3 ">
            <MenuIcon size={24} />
            <AvatarImg />
          </div>
        </PopoverTrigger>
      </Popover>
    </div>
  );
};
