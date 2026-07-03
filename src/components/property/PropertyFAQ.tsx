"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface PropertyFAQProps {
  faqs: FAQ[];
}

export function PropertyFAQ({ faqs }: PropertyFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="font-heading text-2xl font-bold text-primary">Frequently Asked Questions</h3>
      
      <Accordion type="single" collapsible className="w-full bg-surface rounded-2xl border border-border/50 px-6 py-2">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-border/50 last:border-0">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
