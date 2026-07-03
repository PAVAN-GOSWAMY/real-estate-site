"use client";

import * as React from "react";
import { LeadEnquiry } from "@/types/contact";
import { SuccessModal } from "./SuccessModal";

interface LeadFormProps {
  type: LeadEnquiry["type"];
  children: (props: {
    isLoading: boolean;
    error: string | null;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  }) => React.ReactNode;
  onSuccess?: () => void;
}

export function LeadForm({ type, children, onSuccess }: LeadFormProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic Validation
    if (!data.name || !data.phone || (!data.email && type !== "Callback")) {
      setError("Please fill out all required fields.");
      setIsLoading(false);
      return;
    }

    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email as string)) {
        setError("Please enter a valid email address.");
        setIsLoading(false);
        return;
      }
    }

    const phoneRegex = /^\+?[\d\s-]{10,15}$/;
    if (!phoneRegex.test(data.phone as string)) {
      setError("Please enter a valid phone number.");
      setIsLoading(false);
      return;
    }

    // Mock API Call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network request
      
      // Success
      setShowSuccess(true);
      if (onSuccess) onSuccess();
      e.currentTarget.reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {children({ isLoading, error, onSubmit: handleSubmit })}
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  );
}
