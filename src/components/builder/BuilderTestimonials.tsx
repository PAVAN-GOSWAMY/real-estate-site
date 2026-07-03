import * as React from "react";
import { Builder } from "@/types";
import { Quote } from "lucide-react";

interface BuilderTestimonialsProps {
  builder: Builder;
}

export function BuilderTestimonials({ builder }: BuilderTestimonialsProps) {
  const testimonials = [
    {
      id: 1,
      quote: `We booked an apartment with ${builder.name} and the experience has been seamless. The construction quality is top-notch.`,
      author: "Rajesh Kumar",
      location: "Noida"
    },
    {
      id: 2,
      quote: `The sales team at ${builder.name} guided us perfectly. We are very excited for our new home!`,
      author: "Sneha Sharma",
      location: "Greater Noida"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-8 text-foreground text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-accent/5 p-8 rounded-3xl relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
              <p className="text-lg text-foreground mb-6 relative z-10 pt-4 font-medium italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
