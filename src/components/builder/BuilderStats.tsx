import * as React from "react";
import { Builder } from "@/types";
import { Building2, Home, MapPin, Users, CalendarCheck } from "lucide-react";

interface BuilderStatsProps {
  builder: Builder;
}

export function BuilderStats({ builder }: BuilderStatsProps) {
  const stats = [
    { label: "Years in Business", value: `${new Date().getFullYear() - Number(builder.establishedYear)}+`, icon: CalendarCheck },
    { label: "Projects Delivered", value: builder.projectsCompleted, icon: Home },
    { label: "Ongoing Projects", value: builder.projectsOngoing, icon: Building2 },
    { label: "Happy Families", value: builder.happyFamilies, icon: Users },
    { label: "Cities Served", value: builder.citiesServed, icon: MapPin },
  ];

  return (
    <section className="py-12 bg-accent/5">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-8 text-foreground">Key Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
