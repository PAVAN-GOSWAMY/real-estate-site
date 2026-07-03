"use client";

import * as React from "react";
import { categories } from "@/data/blogs";

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  return (
    <div className="flex flex-wrap items-center gap-3 mb-12">
      <button 
        onClick={() => setActiveCategory("All")}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === "All" ? "bg-primary text-primary-foreground" : "bg-white border border-border/50 text-muted-foreground hover:border-primary/50"}`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button 
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-white border border-border/50 text-muted-foreground hover:border-primary/50"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
