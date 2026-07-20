"use client";

import * as React from "react";
import { Search, MapPin, Home, IndianRupee, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locations, propertyTypes, budgets, configurations } from "@/data/search";

export function HeroSearchPanel() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search initiated from Hero");
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-4 md:p-6 w-full border border-white/20 relative z-20">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 items-end">
        
        {/* Location Select */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent" /> Location
          </label>
          <Select>
            <SelectTrigger className="w-full bg-muted/30 border-input h-14 text-base focus:ring-accent rounded-xl">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc.value} value={loc.value}>
                  {loc.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Property Type Select */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5 text-accent" /> Property Type
          </label>
          <Select>
            <SelectTrigger className="w-full bg-muted/30 border-input h-14 text-base focus:ring-accent rounded-xl">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Configuration Field */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-accent" /> Configuration
          </label>
          <Select>
            <SelectTrigger className="w-full bg-muted/30 border-input h-14 text-base focus:ring-accent rounded-xl">
              <SelectValue placeholder="Any BHK" />
            </SelectTrigger>
            <SelectContent>
              {configurations.map((config) => (
                <SelectItem key={config.value} value={config.value}>
                  {config.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Budget Field */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <IndianRupee className="w-3.5 h-3.5 text-accent" /> Budget
          </label>
          <Select>
            <SelectTrigger className="w-full bg-muted/30 border-input h-14 text-base focus:ring-accent rounded-xl">
              <SelectValue placeholder="Any Budget" />
            </SelectTrigger>
            <SelectContent>
              {budgets.map((budget) => (
                <SelectItem key={budget.value} value={budget.value}>
                  {budget.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 lg:col-span-1">
          <Button 
            type="submit" 
            className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold group transition-all rounded-xl shadow-lg"
          >
            Search Properties
            <Search className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </form>
    </div>
  );
}
