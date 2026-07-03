import * as React from "react";
import { Service } from "@/types/membership";
import { TrendingUp, Landmark, FileText, Map, ShieldCheck, Globe, Key, PaintRoller } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-6 h-6 text-primary" />,
  Landmark: <Landmark className="w-6 h-6 text-primary" />,
  FileText: <FileText className="w-6 h-6 text-primary" />,
  Map: <Map className="w-6 h-6 text-primary" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-primary" />,
  Globe: <Globe className="w-6 h-6 text-primary" />,
  Key: <Key className="w-6 h-6 text-primary" />,
  PaintRoller: <PaintRoller className="w-6 h-6 text-primary" />,
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-surface p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {iconMap[service.icon]}
      </div>
      <h3 className="text-xl font-bold font-heading text-foreground mb-3">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
    </div>
  );
}
