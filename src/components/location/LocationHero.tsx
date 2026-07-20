import * as React from "react";
import Image from "next/image";
import { Location } from "@/types";
import { Building2, TrendingUp, Construction, HardHat } from "lucide-react";

interface LocationHeroProps {
  location: Location;
}

export function LocationHero({ location }: LocationHeroProps) {
  return (
    <section className="relative pb-12 overflow-hidden bg-accent/5">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase">
              {location.city} • {location.microMarket}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
              {location.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {location.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="bg-white p-4 rounded-xl border border-border/50 text-center">
                <Building2 className="w-6 h-6 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold">{location.statistics.projectsAvailable}</div>
                <div className="text-xs text-muted-foreground uppercase">Projects</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-border/50 text-center">
                <TrendingUp className="w-6 h-6 mx-auto text-primary mb-2" />
                <div className="text-lg font-bold">{location.statistics.averagePrice}</div>
                <div className="text-xs text-muted-foreground uppercase">Avg Price</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-border/50 text-center">
                <Construction className="w-6 h-6 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold">{location.statistics.upcomingDevelopments}</div>
                <div className="text-xs text-muted-foreground uppercase">Upcoming</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-border/50 text-center">
                <HardHat className="w-6 h-6 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold">{location.statistics.builderCount}</div>
                <div className="text-xs text-muted-foreground uppercase">Builders</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={location.heroImage}
                alt={location.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
