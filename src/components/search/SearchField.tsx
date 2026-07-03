import * as React from "react";
import { cn } from "@/lib/utils";

interface SearchFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  icon?: React.ReactNode;
}

export const SearchField = React.forwardRef<HTMLDivElement, SearchFieldProps>(
  ({ className, label, icon, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2.5 w-full", className)} {...props}>
        <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider flex items-center gap-2">
          {icon && <span className="text-accent">{icon}</span>}
          {label}
        </label>
        {children}
      </div>
    );
  }
);
SearchField.displayName = "SearchField";
