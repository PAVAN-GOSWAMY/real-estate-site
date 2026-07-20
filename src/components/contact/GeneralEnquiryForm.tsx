"use client";

import * as React from "react";
import { LeadForm } from "./LeadForm";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function GeneralEnquiryForm() {
  return (
    <LeadForm type="General">
      {({ isLoading, error, onSubmit }) => (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="name" className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Full Name *</label>
              <input id="name" name="name" type="text" required className="w-full px-3 h-10 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground shadow-sm text-xs" placeholder="John Doe" />
            </div>
            <div className="space-y-1">
              <label htmlFor="phone" className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Phone Number *</label>
              <input id="phone" name="phone" type="tel" required className="w-full px-3 h-10 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground shadow-sm text-xs" placeholder="+91 98765 43210" />
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Email Address *</label>
            <input id="email" name="email" type="email" required className="w-full px-3 h-10 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground shadow-sm text-xs" placeholder="john@example.com" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="location" className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Preferred Location</label>
              <select id="location" name="location" className="w-full px-3 h-10 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground shadow-sm appearance-none text-xs">
                <option value="">Select Location</option>
                <option value="Sector 150, Noida">Sector 150, Noida</option>
                <option value="Yamuna Expressway">Yamuna Expressway</option>
                <option value="Greater Noida West">Greater Noida West</option>
                <option value="Central Noida">Central Noida</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-1">
              <label htmlFor="propertyType" className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Property Type</label>
              <select id="propertyType" name="propertyType" className="w-full px-3 h-10 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground shadow-sm appearance-none text-xs">
                <option value="">Select Type</option>
                <option value="Luxury Apartment">Luxury Apartment</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Villa">Villa</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="budget" className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Approximate Budget</label>
            <select id="budget" name="budget" className="w-full px-3 h-10 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground shadow-sm appearance-none text-xs">
              <option value="">Select Budget Range</option>
              <option value="₹1.5 Cr - ₹3 Cr">₹1.5 Cr - ₹3 Cr</option>
              <option value="₹3 Cr - ₹5 Cr">₹3 Cr - ₹5 Cr</option>
              <option value="₹5 Cr - ₹10 Cr">₹5 Cr - ₹10 Cr</option>
              <option value="₹10 Cr+">₹10 Cr+</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea id="message" name="message" rows={2} className="w-full px-3 py-2 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground resize-none shadow-sm min-h-[50px] max-h-[80px] text-xs" placeholder="How can we assist with your property search?" />
          </div>

          {error && <p className="text-xs text-red-500 font-medium">{error}</p>}

          <Button type="submit" disabled={isLoading} className="w-full rounded-full h-10 bg-primary text-primary-foreground font-bold hover:bg-primary/90 text-sm shadow-lg shadow-primary/20 mt-1">
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            {isLoading ? "Submitting..." : "Submit Enquiry"}
          </Button>
        </form>
      )}
    </LeadForm>
  );
}
