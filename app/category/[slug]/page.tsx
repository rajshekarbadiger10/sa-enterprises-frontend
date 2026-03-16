// app/category/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Package } from "lucide-react";
import { getCategoryBySlug, getProductsByCategory, categories } from "@/lib/data";
import { ProductListingClient } from "@/components/product/ProductListingClient";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const products = getProductsByCategory(params.slug);

  return (
    <div className="animate-page">
      {/* Category Hero */}
      <div className="relative bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${category.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">{category.name}</span>
          </nav>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            {category.name}
          </h1>
          <p className="text-slate-300 max-w-xl mb-4">{category.description}</p>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Package size={14} />
            <span>{category.productCount} products available</span>
          </div>

          {/* Subcategories */}
          <div className="flex flex-wrap gap-2 mt-5">
            {category.subcategories.map((sub) => (
              <span
                key={sub}
                className="text-xs bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full hover:bg-white/20 cursor-pointer transition-colors"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Product listing */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProductListingClient products={products} />
      </div>
    </div>
  );
}
