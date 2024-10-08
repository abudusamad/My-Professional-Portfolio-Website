"use client";

import {
  Blend,
  Book,
  Compass,
  Layout,
  ListChecks,
  Projector,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";
import { signIn, signOut, useSession } from "next-auth/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const guestRoutes = [
  {
    icon: Layout,
    label: "Home",
    href: "/",
  },
  {
    icon: Compass,
    label: "Experience",
    href: "/experience",
  },
  {
    icon: ListChecks,
    label: "Skills",
    href: "/skills",
  },
  {
    icon: Book,
    label: "Education",
    href: "/education",
  },
  {
    icon: Blend,
    label: "Blogs",
    href: "/blog",
  },
  {
    icon: Projector,
    label: "Projects",
    href: "/projects",
  },
];

const adminRoute = [
  {
    icon: Compass,
    label: "Experience",
    href: "/admin/experience",
  },
  {
    icon: ListChecks,
    label: "Skills",
    href: "/admin/skills",
  },
  {
    icon: Book,
    label: "Education",
    href: "/admin/education",
  },
  {
    icon: Blend,
    label: "Blogs",
    href: "/admin/blog",
  },
  {
    icon: Projector,
    label: "Projects",
    href: "/admin/projects",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const isAdmin = pathname?.includes("/admin");

  const routes = isAdmin ? adminRoute : guestRoutes;

  return (
    <div className="flex flex-col item-start justify-between h-full ">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
      <div className="flex items-center justify-center ">
        <Card className="mt-28 bg-transparent w-72 md:w-64 ">
          <CardHeader>
            <CardTitle>
              <p className="text-amber-300 ">
                {session ? "Welcome Back!" : "Join Us"}
              </p>
            </CardTitle>
            <CardDescription>
              {session
                ? "You are currently signed in. Click below to sign out."
                : "Sign in to access more features and personalize your experience."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="default"
              className="w-full  text-sm font-medium bg-pink-500 hover:bg-pink-600 text-white"
              onClick={() => (session ? signOut() : signIn())}
            >
              {session ? "Sign Out" : "Sign In"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
