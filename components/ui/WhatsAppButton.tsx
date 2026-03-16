"use client";
// components/ui/WhatsAppButton.tsx
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { WhatsAppEnquiryModal } from "./WhatsAppEnquiryModal";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  productName: string;
  productCode: string;
  productUrl: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "fab";
}

export function WhatsAppButton({
  productName,
  productCode,
  productUrl,
  className,
  size = "md",
  variant = "primary",
}: WhatsAppButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const sizeClasses = {
    sm: "text-xs px-3 py-2 gap-1.5",
    md: "text-sm px-5 py-3 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const iconSize = size === "sm" ? 14 : size === "lg" ? 20 : 17;

  if (variant === "fab") {
    return (
      <>
        <button
          onClick={() => setModalOpen(true)}
          className={cn(
            "inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white shadow-xl hover:shadow-2xl rounded-full fixed bottom-6 right-6 z-40 p-4 transition-all duration-200 active:scale-95",
            className
          )}
          title="Enquire on WhatsApp"
        >
          <MessageCircle size={26} />
        </button>
        <WhatsAppEnquiryModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          productName={productName}
          productCode={productCode}
          productUrl={productUrl}
        />
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className={cn(
          "inline-flex items-center font-semibold rounded-lg transition-all duration-200 active:scale-95",
          sizeClasses[size],
          variant === "primary"
            ? "bg-green-500 hover:bg-green-600 text-white shadow-sm hover:shadow-md"
            : "border-2 border-green-500 text-green-600 hover:bg-green-50",
          className
        )}
      >
        <MessageCircle size={iconSize} />
        Enquire on WhatsApp
      </button>
      <WhatsAppEnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={productName}
        productCode={productCode}
        productUrl={productUrl}
      />
    </>
  );
}
