"use client";
// components/product/SearchResultsClient.tsx
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { searchProducts, products } from "@/lib/data";
import { ProductListingClient } from "./ProductListingClient";

export function SearchResultsClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = query.trim().length >= 1 ? searchProducts(query) : products;

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        {query ? (
          <>
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
              <Search size={14} />
              <span>Search results for</span>
            </div>
            <h1 className="font-display text-2xl font-bold text-slate-900">
              "{query}"
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              {results.length} {results.length === 1 ? "product" : "products"} found
            </p>
          </>
        ) : (
          <h1 className="font-display text-2xl font-bold text-slate-900">All Products</h1>
        )}
      </div>

      {results.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-slate-100">
          <p className="text-5xl mb-4">🔍</p>
          <h2 className="font-display text-xl font-bold text-slate-700 mb-2">No products found</h2>
          <p className="text-slate-500 text-sm mb-1">
            We couldn't find any results for <strong>"{query}"</strong>
          </p>
          <p className="text-slate-400 text-sm">
            Try different keywords, part numbers, or browse by category
          </p>
        </div>
      ) : (
        <ProductListingClient products={results} />
      )}
    </div>
  );
}
