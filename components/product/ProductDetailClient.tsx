"use client";
// components/product/ProductDetailClient.tsx
import { useState } from "react";
import { CheckCircle, XCircle, Share2, Phone, ShieldCheck, Truck, Package, MessageCircle } from "lucide-react";
import { Product } from "@/lib/types";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StarRating } from "@/components/ui/StarRating";

interface Props { product: Product; }

export function ProductDetailClient({ product }: Props) {
  const [activeImage, setActiveImage] = useState(0);

  const productUrl = typeof window !== "undefined"
    ? window.location.href
    : `https://industrialmart.in/products/${product.id}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

      {/* ── Left: Images ── */}
      <div className="lg:col-span-5">
        <div className="sticky top-24 space-y-3">
          {/* Main image */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden aspect-square shadow-sm">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === idx ? "border-blue-500 shadow-md" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Right: Product Info + Actions ── */}
      <div className="lg:col-span-7 space-y-4">

        {/* Brand + Name */}
        <div>
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">
            {product.brand}
          </span>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-slate-900 leading-tight mt-1">
            {product.name}
          </h1>
          <p className="font-mono text-xs text-slate-400 bg-slate-50 inline-block px-2 py-1 rounded mt-2">
            Product Code: {product.productCode}
          </p>
        </div>

        {/* Stock status */}
        <div className="flex items-center gap-2">
          {product.inStock ? (
            <div className="flex items-center gap-1.5 text-green-600 text-sm font-semibold">
              <CheckCircle size={16} /> In Stock — Ready to Ship
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-red-500 text-sm font-semibold">
              <XCircle size={16} /> Out of Stock
            </div>
          )}
        </div>

        {/* Price */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4">
          <div className="inline-flex items-center gap-2 text-blue-700 font-semibold text-base">
            💬 Contact us for best price
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Price varies by quantity, grade, and delivery location
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <WhatsAppButton
            productName={product.name}
            productCode={product.productCode}
            productUrl={productUrl}
            size="lg"
            className="w-full justify-center"
          />
          <a
            href="tel:+918431709221"
            className="flex items-center justify-center gap-2 w-full border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 font-semibold py-3 rounded-xl transition-all text-sm"
          >
            <Phone size={17} /> Call to Order — +91 84317 09221
          </a>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          {[
            { icon: <ShieldCheck size={15} className="text-green-500" />, text: "100% Genuine Product" },
            { icon: <Package size={15} className="text-blue-500" />, text: "Manufacturer Warranty" },
            { icon: <Truck size={15} className="text-blue-500" />, text: "Pan-India Delivery" },
            { icon: <MessageCircle size={15} className="text-green-500" />, text: "Technical Support Included" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-xs text-slate-600 bg-white border border-slate-100 rounded-lg px-3 py-2">
              {icon} {text}
            </div>
          ))}
        </div>

        {/* Seller info */}
        <div className="bg-slate-50 rounded-xl border border-slate-100 p-4 text-xs text-slate-500">
          <p className="font-semibold text-slate-700 mb-1">Sold by S A Enterprises</p>
          <p>Trusted Industrial Products Supplier · Pan-India Delivery</p>
        </div>

      </div>
    </div>
  );
}
