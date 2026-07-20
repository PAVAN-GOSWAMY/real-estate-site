import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CareerCTA() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 lg:p-24 shadow-2xl border border-border/50 text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Let&apos;s Find the Right Property Together
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Take the first step towards a seamless real estate experience. Our experts are ready to guide you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 px-10 py-7 text-lg">
                Book Consultation
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-full border-border/50 hover:bg-accent/5 hover:text-primary px-10 py-7 text-lg">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
