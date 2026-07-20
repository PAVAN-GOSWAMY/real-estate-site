"use client";

import * as React from "react";
import { useEnquiryModal } from "@/contexts/EnquiryModalContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EnquiryModal() {
  const { isOpen, closeModal, modalData } = useEnquiryModal();

  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  // Focus trap / ESC listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  // Reset internal state when closed
  React.useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSuccess(false);
        setIsLoading(false);
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock API Call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Mock close after success
      setTimeout(() => {
        closeModal();
      }, 2500);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-border/50 flex justify-between items-center bg-surface sticky top-0 z-10">
              <div>
                <h2 id="modal-title" className="text-xl font-heading font-bold text-foreground">
                  Speak With Our Property Advisor
                </h2>
                <p className="text-muted-foreground text-xs mt-1">
                  Fill in your details and our expert will contact you shortly.
                </p>
              </div>
              <button 
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center text-accent transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    Our property advisor will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-name" className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                      <input id="modal-name" required type="text" autoFocus className="w-full px-4 h-11 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground shadow-sm text-sm" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="modal-phone" className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Phone Number *</label>
                      <input id="modal-phone" required type="tel" className="w-full px-4 h-11 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground shadow-sm text-sm" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="modal-email" className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Email Address *</label>
                    <input id="modal-email" required type="email" className="w-full px-4 h-11 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground shadow-sm text-sm" placeholder="john@example.com" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-location" className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Preferred Location</label>
                      <select id="modal-location" className="w-full px-4 h-11 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground shadow-sm appearance-none text-sm">
                        <option value="">Select Location</option>
                        <option value="Sector 150, Noida">Sector 150, Noida</option>
                        <option value="Yamuna Expressway">Yamuna Expressway</option>
                        <option value="Greater Noida West">Greater Noida West</option>
                        <option value="Central Noida">Central Noida</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="modal-type" className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Property Type</label>
                      <select id="modal-type" className="w-full px-4 h-11 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground shadow-sm appearance-none text-sm">
                        <option value="">Select Type</option>
                        <option value="Luxury Apartment">Luxury Apartment</option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Villa">Villa</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="modal-budget" className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Budget</label>
                    <select id="modal-budget" className="w-full px-4 h-11 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground shadow-sm appearance-none text-sm">
                      <option value="">Select Budget Range</option>
                      <option value="₹1.5 Cr - ₹3 Cr">₹1.5 Cr - ₹3 Cr</option>
                      <option value="₹3 Cr - ₹5 Cr">₹3 Cr - ₹5 Cr</option>
                      <option value="₹5 Cr - ₹10 Cr">₹5 Cr - ₹10 Cr</option>
                      <option value="₹10 Cr+">₹10 Cr+</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="modal-message" className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                    <textarea id="modal-message" rows={3} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background outline-none focus:border-primary transition-colors text-foreground shadow-sm text-sm resize-none" placeholder={modalData.propertyName ? `I am interested in ${modalData.propertyName}...` : "How can we assist with your property search?"} />
                  </div>

                  <div className="pt-4 flex gap-3">
                    <Button type="button" variant="outline" onClick={closeModal} disabled={isLoading} className="flex-1 h-12 rounded-full font-bold">
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isLoading} className="flex-1 h-12 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/20">
                      {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                      {isLoading ? "Submitting..." : "Submit Enquiry"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
