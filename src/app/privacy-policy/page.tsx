import * as React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy policy and data handling practices for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-surface pb-20">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you submit an enquiry, 
            request a callback, or sign up for our newsletter.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, 
            to process your requests, and to communicate with you about properties that may interest you.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at {siteConfig.contact.email}.
          </p>
        </div>
      </div>
    </main>
  );
}
