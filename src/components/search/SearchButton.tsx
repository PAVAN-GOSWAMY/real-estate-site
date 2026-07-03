import * as React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const SearchButton = React.forwardRef<HTMLButtonElement, SearchButtonProps>(
  ({ className, text = "Search Properties", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        type="submit"
        className={cn(
          "w-full h-14 bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold group transition-all shadow-md hover:shadow-lg",
          className
        )}
        {...props}
      >
        {text}
        <Search className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    );
  }
);
SearchButton.displayName = "SearchButton";
