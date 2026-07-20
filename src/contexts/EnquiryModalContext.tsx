"use client";

import * as React from "react";

interface EnquiryModalContextProps {
  isOpen: boolean;
  openModal: (source?: string, propertyName?: string) => void;
  closeModal: () => void;
  modalData: {
    source?: string;
    propertyName?: string;
  };
}

const EnquiryModalContext = React.createContext<EnquiryModalContextProps | undefined>(undefined);

export function EnquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState<{ source?: string; propertyName?: string }>({});

  const openModal = React.useCallback((source?: string, propertyName?: string) => {
    setModalData({ source, propertyName });
    setIsOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setIsOpen(false);
    // Optional: reset modalData after exit animation completes
    setTimeout(() => setModalData({}), 300);
  }, []);

  return (
    <EnquiryModalContext.Provider value={{ isOpen, openModal, closeModal, modalData }}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const context = React.useContext(EnquiryModalContext);
  if (context === undefined) {
    throw new Error("useEnquiryModal must be used within an EnquiryModalProvider");
  }
  return context;
}
