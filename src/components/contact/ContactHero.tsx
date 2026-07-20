import * as React from "react";
import { contactInfo } from "@/data/contact";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactHero() {
  return (
    <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden bg-foreground text-background">
      {/* Premium Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/90 to-surface"></div>

      <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
          Contact Our Property Advisors
        </h1>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          Helping you find the perfect luxury property in Noida and Greater Noida. Speak with our experts today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 text-base">
            <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}>
              <Phone className="w-4 h-4 mr-2" /> Call Now
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full bg-emerald-500/10 hover:bg-emerald-500 border-emerald-500/50 text-emerald-400 hover:text-white font-semibold px-8 h-12 text-base transition-colors">
            <a href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
