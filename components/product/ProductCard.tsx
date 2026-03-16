"use client";
// components/product/ProductCard.tsx
import { useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice, getDiscount } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { WhatsAppEnquiryModal } from "@/components/ui/WhatsAppEnquiryModal";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const discount = product.originalPrice
    ? getDiscount(product.originalPrice, product.price)
    : 0;

  const productUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/products/${product.id}`
      : `https://industrialmart.in/products/${product.id}`;

  return (
    <>
      <div className={cn("card group flex flex-col overflow-hidden", className)}>
        {/* Image */}
        <Link href={`/products/${product.id}`} className="relative block aspect-[4/3] bg-slate-50 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tag === "bestseller" && (
              <span className="badge bg-orange-600 text-white">🏆 Bestseller</span>
            )}
            {product.tag === "new" && (
              <span className="badge bg-emerald-500 text-white">✦ New</span>
            )}
            {product.tag === "sale" && (
              <span className="badge bg-red-500 text-white">Sale</span>
            )}
            {discount > 0 && (
              <span className="badge bg-green-600 text-white">{discount}% OFF</span>
            )}
          </div>

          {/* Out of stock overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
              <span className="bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Out of Stock
              </span>
            </div>
          )}
        </Link>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col gap-2">
          {/* Brand + Code */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              {product.brand}
            </span>
            <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
              {product.productCode.slice(0, 12)}
            </span>
          </div>

          {/* Name */}
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-slate-800 text-sm leading-snug line-clamp-2 hover:text-orange-600 transition-colors">
              {product.name}
            </h3>
          </Link>

          {/* Price */}
          <div className="mt-auto pt-2">
            {product.price > 0 ? (
              <>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-display font-bold text-slate-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-slate-400">+ GST applicable</p>
              </>
            ) : (
              <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-lg">
                💬 Enquire for Price
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-1">
            <Link href={`/products/${product.id}`} className="flex-1 btn-secondary text-xs py-2 justify-center">
              View Details
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 inline-flex items-center justify-center gap-1 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-2 rounded-lg transition-colors"
            >
              <MessageCircle size={13} />
              Enquire
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppEnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={product.name}
        productCode={product.productCode}
        productUrl={productUrl}
      />
    </>
  );
}
