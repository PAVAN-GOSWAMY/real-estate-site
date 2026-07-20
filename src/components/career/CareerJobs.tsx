"use client";

import * as React from "react";
import { jobOpenings } from "@/data/career";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, GraduationCap, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CareerJobs() {
  const [toastVisible, setToastVisible] = React.useState(false);

  const handleApply = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <section id="jobs" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Current Open Positions
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our latest career opportunities. Join us in shaping the future of premium real estate.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-3xl shadow-lg border border-border/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface/80 border-b border-border/50">
                  <th className="py-5 px-6 font-semibold text-foreground text-sm uppercase tracking-wider sticky top-0 bg-surface/80 backdrop-blur-md">S.No</th>
                  <th className="py-5 px-6 font-semibold text-foreground text-sm uppercase tracking-wider sticky top-0 bg-surface/80 backdrop-blur-md">Position</th>
                  <th className="py-5 px-6 font-semibold text-foreground text-sm uppercase tracking-wider sticky top-0 bg-surface/80 backdrop-blur-md">Openings</th>
                  <th className="py-5 px-6 font-semibold text-foreground text-sm uppercase tracking-wider sticky top-0 bg-surface/80 backdrop-blur-md">Location</th>
                  <th className="py-5 px-6 font-semibold text-foreground text-sm uppercase tracking-wider sticky top-0 bg-surface/80 backdrop-blur-md">Experience</th>
                  <th className="py-5 px-6 font-semibold text-foreground text-sm uppercase tracking-wider sticky top-0 bg-surface/80 backdrop-blur-md w-64">Requirements</th>
                  <th className="py-5 px-6 font-semibold text-foreground text-sm uppercase tracking-wider sticky top-0 bg-surface/80 backdrop-blur-md text-right">Apply</th>
                </tr>
              </thead>
              <tbody>
                {jobOpenings.map((job, idx) => (
                  <motion.tr 
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-border/40 hover:bg-primary/5 transition-colors group"
                  >
                    <td className="py-5 px-6 text-muted-foreground font-medium">{idx + 1}</td>
                    <td className="py-5 px-6 text-foreground font-bold font-heading">{job.position}</td>
                    <td className="py-5 px-6 text-primary font-semibold">{job.openings}</td>
                    <td className="py-5 px-6 text-muted-foreground text-sm">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-1.5 mt-0.5 text-primary/70 shrink-0" />
                        <span className="whitespace-pre-line">{job.location}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-muted-foreground text-sm">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1.5 text-primary/70 shrink-0" />
                        {job.experience}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-muted-foreground text-sm">
                      <div className="flex items-start">
                        <GraduationCap className="w-4 h-4 mr-1.5 mt-0.5 text-primary/70 shrink-0" />
                        <span className="whitespace-pre-line leading-relaxed">{job.requirements}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <Button onClick={handleApply} className="rounded-full shadow-sm hover:shadow-md transition-all px-6">
                        Apply Now
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile & Tablet Cards */}
        <div className="grid lg:hidden gap-6">
          {jobOpenings.map((job, idx) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-3xl p-6 border border-border/50 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4 pb-4 border-b border-border/40">
                <div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                    {job.openings} Openings
                  </span>
                  <h3 className="text-xl font-bold font-heading text-foreground">{job.position}</h3>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-sm font-medium whitespace-pre-line">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Experience</p>
                    <p className="text-sm font-medium">{job.experience}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GraduationCap className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Requirements</p>
                    <p className="text-sm font-medium whitespace-pre-line leading-relaxed">{job.requirements}</p>
                  </div>
                </div>
              </div>

              <Button onClick={handleApply} className="w-full rounded-full h-12 text-base">
                Apply Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mock Toast Notification */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-foreground text-background px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3 border border-border/20"
          >
            <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
              <Briefcase className="w-4 h-4 text-primary" />
            </div>
            <p className="font-medium text-sm">Applications will open soon.</p>
            <button onClick={() => setToastVisible(false)} className="ml-4 text-white/50 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
