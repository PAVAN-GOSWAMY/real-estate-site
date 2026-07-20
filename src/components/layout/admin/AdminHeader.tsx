"use client";

import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AdminSidebar } from "./AdminSidebar";
import { UserDropdown } from "./UserDropdown";

export function AdminHeader() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <header className="h-16 flex items-center justify-between px-4 sm:px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Trigger */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Sidebar</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <AdminSidebar />
            </SheetContent>
          </Sheet>
        </div>

        {/* Dynamic Breadcrumbs */}
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            {segments.map((segment, index) => {
              const isLast = index === segments.length - 1;
              const href = `/${segments.slice(0, index + 1).join("/")}`;
              const title = segment.charAt(0).toUpperCase() + segment.slice(1);

              return (
                <div key={href} className="flex items-center">
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-4">
        <UserDropdown />
      </div>
    </header>
  );
}
