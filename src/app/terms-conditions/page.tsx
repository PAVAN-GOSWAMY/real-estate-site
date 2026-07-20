import * as React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${siteConfig.name}`,
  description: `Terms and conditions for using ${siteConfig.name} services.`,
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-surface pb-20">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-foreground mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using our website, you agree to be bound by these Terms and Conditions 
            and our Privacy Policy. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Real Estate Information</h2>
          <p>
            The property information provided on this website is for general informational purposes only. 
            While we strive to keep the information up to date and correct, we make no representations 
            or warranties of any kind about the completeness, accuracy, or reliability of the data.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at {siteConfig.contact.email}.
          </p>
        </div>
      </div>
    </main>
  );
}
