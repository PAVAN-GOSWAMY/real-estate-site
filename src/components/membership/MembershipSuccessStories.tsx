import * as React from "react";
import { successStories } from "@/data/membership";
import Image from "next/image";
import { Quote } from "lucide-react";

export function MembershipSuccessStories() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from clients who have experienced the Propteq difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div key={story.id} className="bg-surface rounded-3xl overflow-hidden shadow-sm border border-border/50 group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={story.image} 
                  alt={story.clientName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                    {story.clientType}
                  </span>
                </div>
              </div>
              
              <div className="p-8 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />
                <p className="text-muted-foreground leading-relaxed italic mb-6 text-sm">
                  &quot;{story.story}&quot;
                </p>
                <div>
                  <h4 className="font-bold text-foreground">{story.clientName}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
