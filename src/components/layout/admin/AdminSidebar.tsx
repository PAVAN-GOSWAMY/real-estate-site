"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Building2, 
  Briefcase, 
  MapPin, 
  Users, 
  UserCircle, 
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Builders", href: "/admin/builders", icon: Briefcase },
  { title: "Projects", href: "/admin/projects", icon: Building2 },
  { title: "Properties", href: "/admin/properties", icon: MapPin },
  { title: "Leads", href: "/admin/leads", icon: Users },
  { title: "Users", href: "/admin/users", icon: UserCircle },
  { title: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex w-64 flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          CRM Admin
        </h1>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
              pathname.startsWith(item.href)
                ? "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400"
                : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800/50"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
