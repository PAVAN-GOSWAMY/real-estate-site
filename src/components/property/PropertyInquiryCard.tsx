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
    <div className="sticky top-24 bg-surface rounded-2xl p-4 border border-border/50 shadow-lg z-10 flex flex-col">
      <div className="mb-3">
        <h3 className="font-heading text-lg font-bold text-primary mb-0.5">Enquire Now</h3>
        <p className="text-[11px] text-muted-foreground leading-tight">Our property consultant will contact you shortly.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2.5">
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Label htmlFor="name" className="text-[11px]">Full Name</Label>
            <Input id="name" placeholder="John Doe" required className="bg-background h-9 text-xs" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone" className="text-[11px]">Phone</Label>
            <Input id="phone" type="tel" placeholder="+91..." required className="bg-background h-9 text-xs" />
          </div>
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="email" className="text-[11px]">Email Address</Label>
          <Input id="email" type="email" placeholder="john@example.com" required className="bg-background h-9 text-xs" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="message" className="text-[11px]">Message</Label>
          <textarea 
            id="message" 
            rows={2}
            className="flex w-full rounded-md border border-input bg-background px-3 py-1.5 text-xs shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none min-h-[48px] max-h-[60px]" 
            placeholder="I'm interested..." 
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 text-sm font-semibold mt-1"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Enquire Now"}
        </Button>
      </form>

      <div className="mt-3 flex flex-col gap-2">
        <div className="flex items-center justify-center gap-2 text-[9px] text-muted-foreground">
          <span className="h-[1px] w-full bg-border"></span>
          <span className="shrink-0 uppercase tracking-widest">Or</span>
          <span className="h-[1px] w-full bg-border"></span>
        </div>
        
        <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground h-9 text-xs">
          <Calendar className="mr-2 h-3.5 w-3.5" /> Schedule Site Visit
        </Button>
        
        <a href="tel:+919876543210" className="flex items-center justify-center gap-1.5 text-primary text-xs font-medium hover:text-accent transition-colors pt-0.5">
          <PhoneCall className="h-3 w-3" /> +91 98765 43210
        </a>
      </div>
    </div>
  );
}
