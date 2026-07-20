"use client";

import * as React from "react";
import { careerFaq } from "@/data/career";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function CareerFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our career plans.
          </p>
        </div>

        <div className="space-y-4">
          {careerFaq.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={cn(
                  "border rounded-2xl overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-white border-primary/30 shadow-md" : "bg-surface border-border/50 hover:border-primary/20"
                )}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-foreground pr-8">{faq.question}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 transition-transform duration-300",
                    isOpen && "rotate-180 bg-primary/10 text-primary"
                  )}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div 
                  className={cn(
                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-muted-foreground leading-relaxed pt-2 border-t border-border/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
