"use client";

import * as React from "react";
import { Link2, MessageCircle, Share2 } from "lucide-react";

export function ShareButtons() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3 py-6 border-y border-border/50 my-8">
      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mr-2">Share</span>
      
      <button className="w-10 h-10 rounded-full bg-surface border border-border/50 flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
        <Share2 className="w-4 h-4" />
      </button>
      <button className="w-10 h-10 rounded-full bg-surface border border-border/50 flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
        <MessageCircle className="w-4 h-4" />
      </button>
      <button 
        onClick={handleCopy}
        className="w-10 h-10 rounded-full bg-surface border border-border/50 flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors relative"
      >
        <Link2 className="w-4 h-4" />
        {copied && (
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded">
            Copied
          </span>
        )}
      </button>
    </div>
  );
}
