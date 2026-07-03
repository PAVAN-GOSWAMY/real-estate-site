"use client";

import * as React from "react";
import { LeadForm } from "./LeadForm";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface PropertyEnquiryFormProps {
  projectName?: string;
}

export function PropertyEnquiryForm({ projectName }: PropertyEnquiryFormProps) {
  return (
    <LeadForm type="Property">
      {({ isLoading, error, onSubmit }) => (
        <form onSubmit={onSubmit} className="space-y-4">
          {projectName && (
            <div className="space-y-2">
              <label htmlFor="project" className="text-sm font-medium text-foreground">Project Name</label>
              <input id="project" name="project" type="text" readOnly defaultValue={projectName} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-muted text-muted-foreground outline-none cursor-not-allowed" />
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
            <input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-xl border border-border/50 bg-surface outline-none focus:border-primary transition-colors text-foreground" placeholder="John Doe" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</label>
              <input id="phone" name="phone" type="tel" required className="w-full px-4 py-3 rounded-xl border border-border/50 bg-surface outline-none focus:border-primary transition-colors text-foreground" placeholder="+91 98765 43210" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
              <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-border/50 bg-surface outline-none focus:border-primary transition-colors text-foreground" placeholder="john@example.com" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="configuration" className="text-sm font-medium text-foreground">Preferred Configuration</label>
            <select id="configuration" name="configuration" className="w-full px-4 py-3 rounded-xl border border-border/50 bg-surface outline-none focus:border-primary transition-colors text-foreground appearance-none">
              <option value="">Select Configuration</option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="4 BHK">4 BHK</option>
              <option value="Villa">Villa / Plot</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
            <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-surface outline-none focus:border-primary transition-colors text-foreground resize-none" placeholder="Any specific requirements?" />
          </div>

          {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

          <Button type="submit" disabled={isLoading} className="w-full rounded-xl py-6 bg-primary text-primary-foreground font-bold hover:bg-primary/90 text-lg">
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
            {isLoading ? "Submitting..." : "Get Details"}
          </Button>
        </form>
      )}
    </LeadForm>
  );
}
