"use client";

import { BarChart, Blend, Book, Compass, Layout, List, ListCheck, Projector } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";
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
        icon: ListCheck,
        label: "Skills",
        href: "/skills",
    }, {
        icon: Book,
        label: "Education",
        href: "/education",
    }, {
        icon: Blend,
        label: "Blogs",
        href: "/blog",
    }
    , {
        icon: Projector,
        label: "Projects",
        href: "/projects",
    }
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
