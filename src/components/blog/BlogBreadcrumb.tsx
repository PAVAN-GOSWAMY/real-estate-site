import * as React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogBreadcrumbProps {
  post: BlogPost;
}

export function BlogBreadcrumb({ post }: BlogBreadcrumbProps) {
  return (
    <nav className="bg-accent/5 py-4 border-b border-border/40">
      <div className="container px-4 md:px-6 mx-auto flex items-center text-sm">
        <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
          <Home className="w-4 h-4" />
          <span className="sr-only">Home</span>
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/50" />
        <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors font-medium">
          Blog
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/50" />
        <span className="text-foreground font-semibold truncate max-w-[200px] sm:max-w-none">
          {post.title}
        </span>
      </div>
    </nav>
  );
}
