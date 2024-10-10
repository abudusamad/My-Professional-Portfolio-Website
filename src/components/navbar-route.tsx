"use client";

import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { UserMenu } from "./user-menu";
import { useCurrentUserRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAdmin = pathname?.startsWith("/admin");
  const isCoursePage = pathname?.includes("/courses");
  const currentUserRole = useCurrentUserRole();

 return (
   <div className="flex items-center justify-end gap-x-2">
     {(isAdmin || isCoursePage) && currentUserRole === UserRole.ADMIN ? (
       <Link href="/">
         <Button size="sm" variant="ghost">
           <LogOut className="h-4 w-4 mr-2" />
           Exit
         </Button>
       </Link>
     ) : (
       currentUserRole === UserRole.ADMIN && (
         <Link href="/admin">
           <Button size="sm" variant="blue">
             Admin
           </Button>
         </Link>
       )
     )}
     <UserMenu />
   </div>
 );
};
