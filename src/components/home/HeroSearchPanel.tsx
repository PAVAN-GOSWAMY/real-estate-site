"use client";

import * as React from "react";
import { Search, MapPin, Home, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export function HeroSearchPanel() {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md mx-auto xl:ml-auto border border-border/50">
      <div className="mb-6">
        <h3 className="font-heading text-xl font-bold text-foreground">
          Find Your Sanctuary
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Search exclusive properties in Noida
        </p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Location Select */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent" /> Location
          </label>
          <Select defaultValue="sector-150">
            <SelectTrigger className="w-full bg-muted/50 border-input h-12 focus:ring-accent">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sector-150">Sector 150, Noida</SelectItem>
              <SelectItem value="noida-extension">Noida Extension</SelectItem>
              <SelectItem value="greater-noida-west">Greater Noida West</SelectItem>
              <SelectItem value="yamuna-expressway">Yamuna Expressway</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Type Select */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5 text-accent" /> Property Type
          </label>
          <Select defaultValue="luxury-apartment">
            <SelectTrigger className="w-full bg-muted/50 border-input h-12 focus:ring-accent">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="luxury-apartment">Luxury Apartment</SelectItem>
              <SelectItem value="premium-villa">Premium Villa</SelectItem>
              <SelectItem value="commercial">Commercial Space</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Budget Input (could be select or input, user asked for Input/Select, let's use Select for structured budget) */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
            <IndianRupee className="w-3.5 h-3.5 text-accent" /> Budget
          </label>
          <Select defaultValue="3cr-5cr">
            <SelectTrigger className="w-full bg-muted/50 border-input h-12 focus:ring-accent">
              <SelectValue placeholder="Select Budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1cr-3cr">₹1.0 Cr - ₹3.0 Cr</SelectItem>
              <SelectItem value="3cr-5cr">₹3.0 Cr - ₹5.0 Cr</SelectItem>
              <SelectItem value="5cr-10cr">₹5.0 Cr - ₹10.0 Cr</SelectItem>
              <SelectItem value="10cr-plus">₹10.0 Cr +</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full h-14 mt-4 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold group transition-all"
        >
          Search Properties
          <Search className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>
    </div>
  );
}
