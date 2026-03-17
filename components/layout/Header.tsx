"use client";
// components/layout/Header.tsx
import Link from "next/link";
import { useState } from "react";
import {
  Search, ShoppingCart, Phone, Menu, X, ChevronDown,
  Gauge, Droplets, Thermometer, Layers, Settings,
  FlaskConical, Shield, Wrench, Zap,
} from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";
import { categories } from "@/lib/data";

const categoryIcons: Record<string, React.ReactNode> = {
  gauge: <Gauge size={16} />,
  droplets: <Droplets size={16} />,
  thermometer: <Thermometer size={16} />,
  layers: <Layers size={16} />,
  settings: <Settings size={16} />,
  beaker: <FlaskConical size={16} />,
  shield: <Shield size={16} />,
  wrench: <Wrench size={16} />,
  zap: <Zap size={16} />,
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="header-sticky sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span>🇮🇳 India's Trusted Industrial Products Supplier</span>
          <div className="flex items-center gap-4">
            <a href="tel:+918431709221" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone size={11} />
              +91 84317 09221
            </a>
            <span className="hidden md:inline">|</span>
            <a href="mailto:info@saenterprisestrading.com" className="hidden md:inline hover:text-white transition-colors">
              info@saenterprisestrading.com
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/logo.jpeg"
                alt="S A Enterprises"
                className="w-16 h-16 object-contain"
              />
              <div>
                <span className="font-display font-bold text-xl text-slate-900 leading-none block">S A</span>
                <span className="font-display font-bold text-xl text-orange-600 leading-none block">Enterprises</span>
              </div>
            </div>
          </Link>

          {/* Search */}
          <div className="flex-1 hidden md:block">
            <SearchBar />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/cart"
              className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ShoppingCart size={22} className="text-slate-700" />
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-orange-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden px-4 pb-3">
          <SearchBar />
        </div>

        {/* Category nav */}
        <nav className="hidden md:block border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-1">
            {/* All categories mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-colors">
                <Menu size={16} />
                All Categories
                <ChevronDown size={14} />
              </button>

              {megaMenuOpen && (
                <div className="absolute top-full left-0 w-[640px] bg-white border border-slate-100 shadow-xl rounded-b-xl p-6 grid grid-cols-2 gap-3 z-50">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 group transition-colors"
                    >
                      <div className="w-9 h-9 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        {categoryIcons[cat.icon]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{cat.name}</p>
                        <p className="text-xs text-slate-500">{cat.productCount} products</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Quick nav links */}
            {categories.slice(0, 5).map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="px-3 py-3 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors whitespace-nowrap font-medium"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="p-4 space-y-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-orange-50 text-sm font-medium text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-orange-600">{categoryIcons[cat.icon]}</span>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
