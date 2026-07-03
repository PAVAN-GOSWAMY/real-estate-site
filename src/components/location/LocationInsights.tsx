import * as React from "react";
import { Location } from "@/types";
import { TrendingUp, BarChart3, PieChart, Activity } from "lucide-react";

interface LocationInsightsProps {
  location: Location;
}

export function LocationInsights({ location }: LocationInsightsProps) {
  const { marketInsights } = location;
  if (!marketInsights) return null;

  return (
    <section className="py-12 bg-white border-y border-border/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BarChart3 className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-heading font-bold text-foreground">Market Insights</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface p-6 rounded-2xl border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Avg Price</span>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">{marketInsights.averagePropertyPrice}</p>
            <p className="text-sm text-emerald-600 font-medium mt-2">↑ {marketInsights.priceAppreciation}</p>
          </div>

          <div className="bg-surface p-6 rounded-2xl border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Demand</span>
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">{marketInsights.demandTrend}</p>
            <p className="text-sm text-muted-foreground mt-2">Current market trend</p>
          </div>

          <div className="bg-surface p-6 rounded-2xl border border-border/50 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Configurations & Growth</span>
              <PieChart className="w-5 h-5 text-primary" />
            </div>
            <p className="font-semibold text-foreground mb-2">Popular: {marketInsights.popularConfigurations.join(", ")}</p>
            <p className="text-sm text-muted-foreground line-clamp-2">{marketInsights.futureGrowthPotential}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
