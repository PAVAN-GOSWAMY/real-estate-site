"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col items-center text-center h-full"
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
        {description}
      </p>
    </motion.div>
  );
}
