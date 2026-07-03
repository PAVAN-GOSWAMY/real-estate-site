import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MembershipHero() {
  return (
    <section className="pt-32 pb-20 bg-surface">
      <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider rounded-full mb-6">
          Propteq Advisory
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
          Premium Real Estate Services Designed Around Your Goals
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you&apos;re buying your first home, investing in Noida, or expanding your real estate portfolio, our experts are here to guide you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 px-8 py-6 text-lg">
              Book a Free Consultation
            </Button>
          </Link>
          <a href="#plans" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full rounded-full border-border/50 hover:bg-accent/5 hover:text-primary px-8 py-6 text-lg">
              Explore Membership Plans
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
