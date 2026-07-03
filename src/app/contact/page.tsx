import * as React from "react";
import { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { GeneralEnquiryForm } from "@/components/contact/GeneralEnquiryForm";
import { ContactFAQ } from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact Us | Propteq Noida Real Estate",
  description: "Get in touch with our expert property advisors. Schedule a site visit or request a callback for premium real estate in Noida.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface pb-20">
      <ContactHero />
      
      <div className="container px-4 md:px-6 mx-auto mb-24 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <ContactInfo />
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border/40 self-start lg:sticky lg:top-24">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Send an Enquiry</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we&apos;ll get back to you within 30 minutes during business hours.
            </p>
            <GeneralEnquiryForm />
          </div>
        </div>
      </div>

      <ContactFAQ />
    </main>
  );
}
