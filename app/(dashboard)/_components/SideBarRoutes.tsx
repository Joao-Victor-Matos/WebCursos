"use client";

import { Compass, Layout } from "lucide-react";
import { SideBarItem } from "./SideBarItem";

const getRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Navegar",
    href: "/search",
  },
];

export const SideBarRoutes = () => {
  const routes = getRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SideBarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
