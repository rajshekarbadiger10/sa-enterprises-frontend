"use client";
// components/product/ProductRow.tsx
import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Download, CheckCircle, XCircle } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice, getDiscount } from "@/lib/utils";
import { WhatsAppEnquiryModal } from "@/components/ui/WhatsAppEnquiryModal";

interface ProductRowProps { product: Product; }

export function ProductRow({ product }: ProductRowProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const discount = product.originalPrice ? getDiscount(product.originalPrice, product.price) : 0;
  const productUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/products/${product.id}`
      : `https://industrialmart.in/products/${product.id}`;

  return (
    <>
      <div className="card p-4 flex gap-4 hover:border-blue-100">
        {/* Image */}
        <Link href={`/products/${product.id}`} className="shrink-0 w-32 h-32 md:w-40 md:h-40 bg-slate-50 rounded-xl overflow-hidden">
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </Link>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{product.brand}</span>
              <Link href={`/products/${product.id}`}>
                <h3 className="font-semibold text-slate-800 text-base mt-0.5 hover:text-blue-600 transition-colors line-clamp-2">
                  {product.name}
                </h3>
              </Link>
              <p className="font-mono text-xs text-slate-400 mt-0.5">{product.productCode}</p>
            </div>
            {product.tag && (
              <span className={`badge shrink-0 ${product.tag === "bestseller" ? "bg-blue-100 text-blue-700" : product.tag === "new" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                {product.tag === "bestseller" ? "🏆 Bestseller" : product.tag === "new" ? "✦ New" : "Sale"}
              </span>
            )}
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between mt-auto pt-3 gap-3 flex-wrap">
            <div className="flex items-center gap-3">
              <div>
                {product.price > 0 ? (
                  <>
                    <span className="font-display text-xl font-bold text-slate-900">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-sm text-slate-400 line-through ml-2">{formatPrice(product.originalPrice)}</span>
                        <span className="text-xs text-green-600 font-semibold ml-1">{discount}% off</span>
                      </>
                    )}
                  </>
                ) : (
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    💬 Enquire for Price
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs">
                {product.inStock
                  ? <><CheckCircle size={13} className="text-green-500" /><span className="text-green-600 font-medium">In Stock</span></>
                  : <><XCircle size={13} className="text-red-400" /><span className="text-red-500 font-medium">Out of Stock</span></>
                }
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                <MessageCircle size={13} /> Enquire
              </button>
              <Link href={`/products/${product.id}`} className="btn-primary text-xs py-2 px-4">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

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
