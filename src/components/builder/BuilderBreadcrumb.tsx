import * as React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Builder } from "@/types";

interface BuilderBreadcrumbProps {
  builder: Builder;
}

export function BuilderBreadcrumb({ builder }: BuilderBreadcrumbProps) {
  return (
    <nav className="bg-accent/5 py-4 border-b border-border/40">
      <div className="container px-4 md:px-6 mx-auto flex items-center text-sm">
        <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
          <Home className="w-4 h-4" />
          <span className="sr-only">Home</span>
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/50" />
        <Link href="/builders" className="text-muted-foreground hover:text-primary transition-colors font-medium">
          Builders
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/50" />
        <span className="text-foreground font-semibold truncate">
          {builder.name}
        </span>
      </div>
    </nav>
  );
}
