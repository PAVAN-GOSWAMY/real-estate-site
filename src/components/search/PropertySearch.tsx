"use client";

import * as React from "react";
import { MapPin, Home, IndianRupee, Layers } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchCard } from "./SearchCard";
import { SearchField } from "./SearchField";
import { SearchButton } from "./SearchButton";
import { locations, propertyTypes, budgets, configurations } from "@/data/search";

export function PropertySearch() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Future integration point for Supabase or search routing
    console.log("Search initiated");
  };

  return (
    <SearchCard className="-mt-16 sm:-mt-20 max-w-6xl">
      <form onSubmit={handleSearch} className="flex flex-col lg:flex-row gap-6 lg:gap-4 items-end">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {/* Location Field */}
          <SearchField label="Location" icon={<MapPin className="w-4 h-4" />}>
            <Select>
              <SelectTrigger className="w-full bg-muted/30 border-input h-14 text-base focus:ring-accent rounded-lg shadow-sm">
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
          </SearchField>

          {/* Property Type Field */}
          <SearchField label="Property Type" icon={<Home className="w-4 h-4" />}>
            <Select>
              <SelectTrigger className="w-full bg-muted/30 border-input h-14 text-base focus:ring-accent rounded-lg shadow-sm">
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
          </SearchField>

          {/* Configuration Field */}
          <SearchField label="Configuration" icon={<Layers className="w-4 h-4" />}>
            <Select>
              <SelectTrigger className="w-full bg-muted/30 border-input h-14 text-base focus:ring-accent rounded-lg shadow-sm">
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
          </SearchField>

          {/* Budget Field */}
          <SearchField label="Budget" icon={<IndianRupee className="w-4 h-4" />}>
            <Select>
              <SelectTrigger className="w-full bg-muted/30 border-input h-14 text-base focus:ring-accent rounded-lg shadow-sm">
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
          </SearchField>
        </div>

        {/* Action Button */}
        <div className="w-full lg:w-48 xl:w-56 flex-shrink-0 mt-4 lg:mt-0">
          <SearchButton />
        </div>
        
      </form>
    </SearchCard>
  );
}
