import * as React from "react";
import { MembershipPlan } from "@/types/membership";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MembershipPlanCardProps {
  plan: MembershipPlan;
}

export function MembershipPlanCard({ plan }: MembershipPlanCardProps) {
  return (
    <div className={`relative bg-surface rounded-3xl p-8 border flex flex-col h-full ${plan.recommended ? 'border-primary shadow-2xl scale-105 z-10' : 'border-border/50 shadow-sm'}`}>
      {plan.recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
          <Star className="w-3 h-3 fill-current" /> Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{plan.name}</h3>
        <p className="text-sm text-muted-foreground">{plan.description}</p>
      </div>

      <div className="mb-8 pb-8 border-b border-border/50">
        <span className="text-4xl font-bold text-foreground">{plan.price}</span>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-emerald-600" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link href="/contact">
        <Button 
          className={`w-full rounded-xl py-6 font-bold text-base ${plan.recommended ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-surface text-foreground hover:bg-accent/10 border border-border/50'}`}
        >
          Choose {plan.name}
        </Button>
      </Link>
    </div>
  );
}
