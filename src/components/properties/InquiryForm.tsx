"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InquiryForm({ propertyName }: { propertyName: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitted(false);
      alert("Thank you! Our luxury property consultant will contact you shortly.");
    }, 1500);
  };

  return (
    <div className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm sticky top-28">
      <h3 className="font-heading text-2xl font-bold text-primary mb-2">Interested?</h3>
      <p className="text-muted-foreground text-sm mb-6">
        Schedule a private viewing or request more details for {propertyName}.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <Input required placeholder="Your full name" className="bg-surface" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input required type="email" placeholder="you@example.com" className="bg-surface" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Phone</label>
          <Input required type="tel" placeholder="+91 98765 43210" className="bg-surface" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Message (Optional)</label>
          <textarea 
            className="flex min-h-[100px] w-full rounded-md border border-border bg-surface px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="I would like to schedule a viewing..."
          />
        </div>
        
        <Button type="submit" disabled={isSubmitted} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2">
          {isSubmitted ? "Sending Request..." : "Request Details"}
        </Button>
      </form>
    </div>
  );
}
