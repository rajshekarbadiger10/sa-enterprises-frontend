// lib/types.ts

export interface Product {
  id: string;
  name: string;
  productCode: string;
  brand: string;
  categorySlug: string;
  categoryName: string;
  price: number;           // 0 means "enquire for price"
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  applications: string[];
  specifications: Record<string, string>;
  features: string[];
  datasheetUrl?: string;
  inStock: boolean;
  tag?: "bestseller" | "new" | "sale";
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  icon: string;
  subcategories: string[];
}

export interface FilterOptions {
  brands: string[];
  priceRange: [number, number];
  inStock: boolean;
  rating: number | null;
}
