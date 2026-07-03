import * as React from "react";
import Link from "next/link";
import { Container } from "./wrappers";
import { footerQuickLinks, footerLocations, socialLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border/10">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. Company Info */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-accent">
              PROPTEQ
            </h3>
            <p className="text-sm text-primary-foreground/70 max-w-xs leading-relaxed">
              Curating the finest luxury real estate experiences in Noida and Greater Noida. Finding your dream sanctuary, elevated.
            </p>
          </div>
          
          {/* 2. Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-accent text-lg">Quick Links</h4>
            <nav aria-label="Footer Quick Links">
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                {footerQuickLinks.map((link) => (
                  <li key={link.id}>
                    <Link 
                      href={link.href} 
                      className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* 3. Popular Locations */}
          <div className="space-y-6">
            <h4 className="font-semibold text-accent text-lg">Popular Locations</h4>
            <nav aria-label="Footer Locations">
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                {footerLocations.map((link) => (
                  <li key={link.id}>
                    <Link 
                      href={link.href} 
                      className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* 4. Contact & Socials */}
          <div className="space-y-6">
            <h4 className="font-semibold text-accent text-lg">Connect With Us</h4>
            
            <div className="space-y-4">
              <address className="not-italic text-sm text-primary-foreground/70 space-y-1">
                <p>123 Luxury Avenue, Sector 150</p>
                <p>Noida, Uttar Pradesh 201310</p>
                <p className="pt-2">
                  <a href="mailto:info@propteq.com" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm">info@propteq.com</a>
                </p>
                <p>
                  <a href="tel:+919876543210" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm">+91 98765 43210</a>
                </p>
              </address>
              
              <nav aria-label="Social Links" className="pt-2">
                <ul className="flex flex-wrap gap-4 text-sm">
                  {socialLinks.map((link) => (
                    <li key={link.id}>
                      <Link 
                        href={link.href} 
                        className="text-primary-foreground/80 hover:text-white transition-colors font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Propteq Real Estate. All rights reserved.</p>
          <p>
            Designed for <span className="text-primary-foreground/70">Noida & Greater Noida</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
