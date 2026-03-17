"use client";
// components/ui/WhatsAppEnquiryModal.tsx
import { useState, useEffect } from "react";
import {
  X,
  MessageCircle,
  Package,
  Building2,
  MapPin,
  Hash,
  ChevronRight,
} from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";

interface WhatsAppEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productCode: string;
  productUrl: string;
}

export function WhatsAppEnquiryModal({
  isOpen,
  onClose,
  productName,
  productCode,
  productUrl,
}: WhatsAppEnquiryModalProps) {
  const [quantity, setQuantity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  function handleSendEnquiry() {
    const link = generateWhatsAppLink({
      productName,
      productCode,
      productUrl,
      quantity,
      companyName,
      location,
    });
    window.open(link, "_blank", "noopener,noreferrer");
    onClose();
  }

  // Preview message
  const previewMessage =
    `Hello! I am interested in the following product:\n\n` +
    `*Product Name:* ${productName}\n` +
    `*Product Code:* ${productCode}\n` +
    `*Product Link:* ${productUrl}\n` +
    `*Quantity Required:* ${quantity || "Not specified"}\n` +
    `*Company Name:* ${companyName || "Not specified"}\n` +
    `*Location:* ${location || "Not specified"}\n\n` +
    `Please share pricing, availability, and technical details. Thank you!`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal wrapper — centers and allows scroll */}
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-slide-up">
          {/* Header */}
          <div className="bg-green-500 px-6 py-4 flex items-center gap-3 rounded-t-2xl">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle size={22} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="font-display font-bold text-white text-lg leading-none">
              WhatsApp Enquiry
            </h2>
            <p className="text-green-100 text-xs mt-0.5">
              Send enquiry to +91 84317 09221
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-4 space-y-3 overflow-y-auto max-h-[65vh]">
          {/* Product Info (read-only) */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 space-y-1">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Product Details
            </p>
            <div className="flex items-start gap-2">
              <Package size={14} className="text-orange-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-slate-800 leading-snug">
                  {productName}
                </p>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  {productCode}
                </p>
              </div>
            </div>
          </div>

          {/* User inputs */}
          <div className="space-y-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Your Details (Optional)
            </p>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Quantity Required
              </label>
              <div className="relative">
                <Hash
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 5 units, 10 pieces"
                  className="w-full border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Company Name
              </label>
              <div className="relative">
                <Building2
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Tata Chemicals Ltd"
                  className="w-full border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Location
              </label>
              <div className="relative">
                <MapPin
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Mumbai, Maharashtra"
                  className="w-full border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Actions — sticky at bottom */}
        <div className="px-4 pb-4 pt-3 border-t border-slate-100 bg-white rounded-b-2xl">
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium py-2.5 rounded-xl text-sm transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSendEnquiry}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={17} />
              Send on WhatsApp
            </button>
          </div>
          <p className="text-center text-xs text-slate-400 mt-2">
            Opens WhatsApp with pre-filled message
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
