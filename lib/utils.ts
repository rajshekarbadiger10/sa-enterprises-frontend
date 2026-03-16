// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getDiscount(original: number, current: number): number {
  return Math.round(((original - current) / original) * 100);
}

// Owner's WhatsApp Business number
export const WHATSAPP_NUMBER = "918431709221";

export function generateWhatsAppLink({
  productName,
  productCode,
  productUrl,
  quantity = "",
  companyName = "",
  location = "",
  phone = WHATSAPP_NUMBER,
}: {
  productName: string;
  productCode: string;
  productUrl: string;
  quantity?: string;
  companyName?: string;
  location?: string;
  phone?: string;
}): string {
  const message =
    `Hello! I am interested in the following product:\n\n` +
    `*Product Name:* ${productName}\n` +
    `*Product Code:* ${productCode}\n` +
    `*Product Link:* ${productUrl}\n` +
    `*Quantity Required:* ${quantity || "Not specified"}\n` +
    `*Company Name:* ${companyName || "Not specified"}\n` +
    `*Location:* ${location || "Not specified"}\n\n` +
    `Please share pricing, availability, and technical details. Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
