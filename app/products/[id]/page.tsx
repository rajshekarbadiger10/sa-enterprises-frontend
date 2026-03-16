// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getProductById, products, getProductsByCategory } from "@/lib/data";
import { ProductDetailClient } from "@/components/product/ProductDetailClient";
import { ProductCard } from "@/components/product/ProductCard";

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="animate-page">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href={`/category/${product.categorySlug}`} className="hover:text-orange-600 transition-colors">
              {product.categoryName}
            </Link>
            <ChevronRight size={12} />
            <span className="text-slate-800 font-medium truncate max-w-xs">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <ProductDetailClient product={product} />
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="border-t border-slate-100 py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
