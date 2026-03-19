"use client";
// components/ui/SearchBar.tsx
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { searchProducts } from "@/lib/data";
import { Product } from "@/lib/types";
import Link from "next/link";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (query.length >= 2) {
      const res = searchProducts(query);
      setResults(res.slice(0, 5));
      setOpen(true);
    } else {
      setResults([]);
      setOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
    }
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <form onSubmit={handleSubmit} className="flex">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands, part numbers..."
            className="w-full bg-slate-50 border border-slate-200 rounded-l-lg pl-9 pr-9 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            onFocus={() => query.length >= 2 && setOpen(true)}
          />
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(""); setResults([]); setOpen(false); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X size={14} />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-r-lg text-sm font-semibold transition-colors shrink-0"
        >
          Search
        </button>
      </form>

      {/* Dropdown */}
      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-slate-100 shadow-xl rounded-xl mt-1 z-50 overflow-hidden animate-fade-in">
          <div className="p-2">
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 group transition-colors"
              >
                <div className="w-10 h-10 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 truncate">{product.name}</p>
                  <p className="text-xs text-slate-500">{product.brand} · {product.productCode}</p>
                </div>
                <ArrowRight size={14} className="text-slate-300 group-hover:text-blue-600 transition-colors shrink-0" />
              </Link>
            ))}
          </div>
          <div className="border-t border-slate-100 p-2">
            <button
              onClick={handleSubmit}
              className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium py-1.5"
            >
              See all results for "{query}"
            </button>
          </div>
        </div>
      )}

      {open && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-slate-100 shadow-xl rounded-xl mt-1 z-50 p-4 text-center animate-fade-in">
          <p className="text-sm text-slate-500">No products found for "{query}"</p>
          <p className="text-xs text-slate-400 mt-1">Try different keywords or browse categories</p>
        </div>
      )}
    </div>
  );
}
