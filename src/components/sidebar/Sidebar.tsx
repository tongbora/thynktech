"use client";
import { Laptop, Tv, Headphones, Smartphone, Gamepad2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../button/ModeToggle";

// Menu items.
const items = [
  {
    title: "TV",
    url: "/products/categories/tv",
    icon: Tv,
  },
  {
    title: "Audio",
    url: "/products/categories/audio",
    icon: Headphones,
  },
  {
    title: "Laptop",
    url: "/products/categories/laptop",
    icon: Laptop,
  },
  {
    title: "Mobile",
    url: "/products/categories/mobile",
    icon: Smartphone,
  },
  {
    title: "Gaming",
    url: "/products/categories/gaming",
    icon: Gamepad2,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-500 dark:border-gray-400">
            <Link href="/">
              <Image src="/logo/3.png" alt="Logo" width={100} height={20} />
            </Link>
            <ModeToggle />
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center gap-4 p-2 font-bold text-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
