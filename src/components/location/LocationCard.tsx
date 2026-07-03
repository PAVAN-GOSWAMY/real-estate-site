import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Location } from "@/types";
import { MapPin, Building2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LocationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  location: Location;
}

export function LocationCard({ location, className, ...props }: LocationCardProps) {
  return (
    <div 
      className={cn(
        "group flex flex-col bg-surface rounded-2xl overflow-hidden border border-border/40 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={location.heroImage}
          alt={location.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="text-white font-bold font-heading text-xl drop-shadow-md">{location.name}</span>
          <span className="text-white/90 text-sm font-medium flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-1" />
            {location.city}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {location.description}
        </p>

        <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/50 mb-4">
          <div className="flex items-center text-sm">
            <Building2 className="w-4 h-4 text-primary mr-2 shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-foreground">{location.statistics.projectsAvailable}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Projects</span>
            </div>
          </div>
          <div className="flex items-center text-sm border-l border-border/50 pl-4">
            <TrendingUp className="w-4 h-4 text-primary mr-2 shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-foreground">{location.statistics.averagePrice}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Avg Price</span>
            </div>
          </div>
        </div>

        <div className="pt-2 mt-auto">
          <Link href={`/locations/${location.slug}`} prefetch={false} className="block w-full">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
              Explore Location
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
