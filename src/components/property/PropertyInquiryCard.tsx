"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneCall, Calendar } from "lucide-react";

interface PropertyInquiryCardProps {
  title: string;
  price: string;
}

export function PropertyInquiryCard({ title, price }: PropertyInquiryCardProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your interest! A luxury property consultant will contact you shortly.");
    }, 1500);
  };

  return (
    <div className="sticky top-24 bg-surface rounded-2xl p-6 border border-border/50 shadow-lg max-h-[calc(100vh-8rem)] overflow-y-auto z-10">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">Interested in</h3>
        <p className="font-heading text-xl font-bold text-foreground mb-1">{title}</p>
        <p className="text-2xl font-bold text-primary">{price}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" required className="bg-background" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+91 98765 43210" required className="bg-background" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="john@example.com" required className="bg-background" />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Enquire Now"}
        </Button>
      </form>

      <div className="mt-6 flex flex-col gap-3">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="h-[1px] w-full bg-border"></span>
          <span className="shrink-0 uppercase tracking-widest text-xs">Or</span>
          <span className="h-[1px] w-full bg-border"></span>
        </div>
        
        <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground h-11">
          <Calendar className="mr-2 h-4 w-4" /> Schedule Site Visit
        </Button>
        
        <a href="tel:+919876543210" className="flex items-center justify-center gap-2 text-primary font-medium hover:text-accent transition-colors py-2">
          <PhoneCall className="h-4 w-4" /> +91 98765 43210
        </a>
      </div>
    </div>
  );
}
