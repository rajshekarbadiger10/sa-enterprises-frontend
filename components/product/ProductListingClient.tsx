"use client";
// components/product/ProductListingClient.tsx
import { useState, useMemo } from "react";
import { LayoutGrid, LayoutList, SlidersHorizontal, X } from "lucide-react";
import { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";
import { FilterSidebar } from "./FilterSidebar";
import { ProductRow } from "./ProductRow";

interface ProductListingClientProps {
  products: Product[];
}

export function ProductListingClient({ products }: ProductListingClientProps) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const brands = useMemo(() => [...new Set(products.map((p) => p.brand))].sort(), [products]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedBrands.length) result = result.filter((p) => selectedBrands.includes(p.brand));
    if (inStockOnly) result = result.filter((p) => p.inStock);
    if (minRating) result = result.filter((p) => p.rating >= minRating);

    switch (sortBy) {
      case "price_asc": result.sort((a, b) => a.price - b.price); break;
      case "price_desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
    }
    return result;
  }, [products, selectedBrands, inStockOnly, minRating, sortBy]);

  function resetFilters() {
    setSelectedBrands([]);
    setInStockOnly(false);
    setMinRating(null);
    setSortBy("relevance");
  }

  return (
    <div className="flex gap-6">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24">
          <FilterSidebar
            brands={brands}
            selectedBrands={selectedBrands}
            onBrandsChange={setSelectedBrands}
            inStockOnly={inStockOnly}
            onInStockChange={setInStockOnly}
            minRating={minRating}
            onRatingChange={setMinRating}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onReset={resetFilters}
            productCount={filtered.length}
          />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-5 bg-white rounded-xl border border-slate-100 shadow-sm px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
            <span className="text-sm text-slate-500">
              <span className="font-semibold text-slate-800">{filtered.length}</span> products
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-blue-100 text-blue-600" : "text-slate-400 hover:text-slate-600"}`}
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-blue-100 text-blue-600" : "text-slate-400 hover:text-slate-600"}`}
            >
              <LayoutList size={18} />
            </button>
          </div>
        </div>

        {/* Products */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-100">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-lg font-semibold text-slate-700">No products match your filters</p>
            <p className="text-slate-500 text-sm mt-1">Try adjusting or clearing your filters</p>
            <button onClick={resetFilters} className="btn-primary mt-4 text-sm">
              Clear All Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto p-4 animate-slide-in-right">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold text-lg">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} className="text-slate-500" />
              </button>
            </div>
            <FilterSidebar
              brands={brands}
              selectedBrands={selectedBrands}
              onBrandsChange={setSelectedBrands}
              inStockOnly={inStockOnly}
              onInStockChange={setInStockOnly}
              minRating={minRating}
              onRatingChange={setMinRating}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onReset={resetFilters}
              productCount={filtered.length}
            />
            <button
              className="btn-primary w-full mt-4 justify-center"
              onClick={() => setMobileFiltersOpen(false)}
            >
              Show {filtered.length} Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
