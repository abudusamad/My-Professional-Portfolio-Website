"use client";

import { Popover, PopoverTrigger } from "./ui/popover";
import { AvatarImg } from "./avatarImage";
import { useSession } from "next-auth/react";

export const UserMenu = () => {
  const {data:session} = useSession();
  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <div className="cursor-pointer flex items-center gap-3 ">
            <AvatarImg src={session?.user?.image}/>
          </div>
        </PopoverTrigger>
      </Popover>
    </div>
  );
};
