"use client";

import * as React from "react";
import { LeadForm } from "./LeadForm";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function GeneralEnquiryForm() {
  return (
    <LeadForm type="General">
      {({ isLoading, error, onSubmit }) => (
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
              <input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-xl border border-border/50 bg-surface outline-none focus:border-primary transition-colors text-foreground" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</label>
              <input id="phone" name="phone" type="tel" required className="w-full px-4 py-3 rounded-xl border border-border/50 bg-surface outline-none focus:border-primary transition-colors text-foreground" placeholder="+91 98765 43210" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
            <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-border/50 bg-surface outline-none focus:border-primary transition-colors text-foreground" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-surface outline-none focus:border-primary transition-colors text-foreground resize-none" placeholder="How can we help you?" />
          </div>

          {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

          <Button type="submit" disabled={isLoading} className="w-full rounded-xl py-6 bg-primary text-primary-foreground font-bold hover:bg-primary/90 text-lg">
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
            {isLoading ? "Submitting..." : "Send Enquiry"}
          </Button>
        </form>
      )}
    </LeadForm>
  );
}
