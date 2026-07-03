import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, Home, Users } from "lucide-react";
import { Builder } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BuilderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  builder: Builder;
}

export function BuilderCard({ builder, className, ...props }: BuilderCardProps) {
  return (
    <div 
      className={cn(
        "group flex flex-col bg-surface rounded-2xl overflow-hidden border border-border/40 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="relative h-48 overflow-hidden bg-muted flex items-center justify-center p-6">
        <Image
          src={builder.logo}
          alt={builder.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-60 group-hover:opacity-100 mix-blend-multiply"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="font-heading text-xl font-bold text-foreground line-clamp-1">
            <Link href={`/builders/${builder.slug}`} prefetch={false} className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              {builder.name}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {builder.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 py-4 border-y border-border/50 mb-4">
          <div className="flex flex-col items-center text-center">
            <Building2 className="w-5 h-5 text-primary mb-1" />
            <span className="text-xs text-muted-foreground">Experience</span>
            <span className="text-sm font-semibold">{new Date().getFullYear() - Number(builder.establishedYear)}+ Yrs</span>
          </div>
          <div className="flex flex-col items-center text-center border-x border-border/50">
            <Home className="w-5 h-5 text-primary mb-1" />
            <span className="text-xs text-muted-foreground">Projects</span>
            <span className="text-sm font-semibold">{builder.projectsCompleted}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-5 h-5 text-primary mb-1" />
            <span className="text-xs text-muted-foreground">Families</span>
            <span className="text-sm font-semibold">{builder.happyFamilies}</span>
          </div>
        </div>

        <div className="pt-2 mt-auto">
          <Link href={`/builders/${builder.slug}`} prefetch={false} className="block w-full">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
              View Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
