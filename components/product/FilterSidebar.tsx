"use client";
// components/product/FilterSidebar.tsx
import { useState } from "react";
import { Star, ChevronDown, ChevronUp, X, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  brands: string[];
  selectedBrands: string[];
  onBrandsChange: (brands: string[]) => void;
  inStockOnly: boolean;
  onInStockChange: (val: boolean) => void;
  minRating: number | null;
  onRatingChange: (val: number | null) => void;
  sortBy: string;
  onSortChange: (val: string) => void;
  onReset: () => void;
  productCount: number;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-slate-100 py-4">
      <button
        className="flex items-center justify-between w-full text-sm font-semibold text-slate-800 mb-3"
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && children}
    </div>
  );
}

export function FilterSidebar({
  brands,
  selectedBrands,
  onBrandsChange,
  inStockOnly,
  onInStockChange,
  minRating,
  onRatingChange,
  sortBy,
  onSortChange,
  onReset,
  productCount,
}: FilterSidebarProps) {
  function toggleBrand(brand: string) {
    if (selectedBrands.includes(brand)) {
      onBrandsChange(selectedBrands.filter((b) => b !== brand));
    } else {
      onBrandsChange([...selectedBrands, brand]);
    }
  }

  const hasFilters = selectedBrands.length > 0 || inStockOnly || minRating !== null;

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={16} className="text-orange-600" />
          <span className="font-display font-bold text-slate-800">Filters</span>
        </div>
        {hasFilters && (
          <button
            onClick={onReset}
            className="text-xs text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1"
          >
            <X size={12} /> Clear All
          </button>
        )}
      </div>
      <p className="text-xs text-slate-500 mb-3">{productCount} products</p>

      {/* Sort */}
      <Section title="Sort By">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="input text-sm py-2"
        >
          <option value="relevance">Relevance</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest First</option>
        </select>
      </Section>

      {/* Availability */}
      <Section title="Availability">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockChange(e.target.checked)}
            className="w-4 h-4 accent-orange-600 rounded"
          />
          <span className="text-sm text-slate-700">In Stock Only</span>
        </label>
      </Section>

      {/* Rating */}
      <Section title="Minimum Rating">
        <div className="space-y-1.5">
          {[4, 3, 2].map((r) => (
            <label key={r} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="rating"
                checked={minRating === r}
                onChange={() => onRatingChange(minRating === r ? null : r)}
                className="accent-orange-600"
              />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={13}
                    className={
                      star <= r
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-200 fill-slate-200"
                    }
                  />
                ))}
                <span className="text-xs text-slate-500 ml-1">& above</span>
              </div>
            </label>
          ))}
        </div>
      </Section>

      {/* Brands */}
      <Section title="Brand">
        <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="w-4 h-4 accent-orange-600 rounded"
              />
              <span className="text-sm text-slate-700">{brand}</span>
            </label>
          ))}
        </div>
      </Section>

      {/* Active filters */}
      {hasFilters && (
        <div className="mt-3 pt-3 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-600 mb-2">Active Filters</p>
          <div className="flex flex-wrap gap-1.5">
            {selectedBrands.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1 text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full"
              >
                {b}
                <button onClick={() => toggleBrand(b)}><X size={10} /></button>
              </span>
            ))}
            {inStockOnly && (
              <span className="inline-flex items-center gap-1 text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                In Stock <button onClick={() => onInStockChange(false)}><X size={10} /></button>
              </span>
            )}
            {minRating && (
              <span className="inline-flex items-center gap-1 text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                {minRating}+ ★ <button onClick={() => onRatingChange(null)}><X size={10} /></button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
