import * as React from "react";
import { cn } from "@/lib/utils";

interface SearchCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const SearchCard = React.forwardRef<HTMLDivElement, SearchCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-surface rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-border/40 p-6 md:p-8 lg:p-10 w-full mx-auto relative z-20",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SearchCard.displayName = "SearchCard";
