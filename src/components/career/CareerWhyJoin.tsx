"use client";

import * as React from "react";
import { whyJoinReasons } from "@/data/career";
import { siteConfig } from "@/config/site";
import { TrendingUp, GraduationCap, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-8 h-8 text-primary" />,
  GraduationCap: <GraduationCap className="w-8 h-8 text-primary" />,
  Award: <Award className="w-8 h-8 text-primary" />,
  Users: <Users className="w-8 h-8 text-primary" />,
};

export function CareerWhyJoin() {
  return (
    <section id="why-join" className="py-24 bg-surface scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Join {siteConfig.name}
          </h2>
          <p className="text-muted-foreground text-lg">
            Build your career with one of Noida&apos;s growing real estate organizations. Work with experienced professionals, premium projects, and an ambitious team committed to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {whyJoinReasons.map((reason, index) => (
            <motion.div 
              key={reason.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {iconMap[reason.icon]}
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
