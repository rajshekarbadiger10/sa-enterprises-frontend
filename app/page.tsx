import Link from "next/link";
import { ArrowRight, Shield, Truck, HeadphonesIcon, Award, Gauge, Droplets, Thermometer, Layers, Settings, FlaskConical, ChevronRight, Zap, Wrench } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { categories, products } from "@/lib/data";

const categoryIcons: Record<string, React.ReactNode> = {
  gauge: <Gauge size={28} />, droplets: <Droplets size={28} />,
  thermometer: <Thermometer size={28} />, layers: <Layers size={28} />,
  settings: <Settings size={28} />, beaker: <FlaskConical size={28} />,
  shield: <Shield size={28} />, wrench: <Wrench size={28} />,
  zap: <Zap size={28} />,
};

const brands = ["Rosemount","Endress+Hauser","WIKA","VEGA","Yokogawa","Dräger","Flowserve","Honeywell","ABB","Siemens"];
const trustBadges = [
  { icon: <Shield size={22} />, title: "Genuine Products", sub: "100% authentic, manufacturer-certified" },
  { icon: <Truck size={22} />, title: "Pan-India Delivery", sub: "Express shipping to all industrial hubs" },
  { icon: <HeadphonesIcon size={22} />, title: "Technical Support", sub: "Expert engineers available 24/7" },
  { icon: <Award size={22} />, title: "ISO 9001:2015", sub: "Quality management certified" },
];

function normalize(p: any) {
  return p;
}

export default async function HomePage() {
  const featuredProducts = products.filter(p => p.tag === "bestseller").slice(0, 4);
  const newProducts = products.filter(p => p.tag === "new").slice(0, 3);

  return (
    <div className="animate-page">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`, backgroundSize: "32px 32px" }} />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6"><Zap size={12} />India's Trusted Industrial Products Supplier</div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Precision Instruments for <span className="text-blue-400">Process Excellence</span></h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">Source genuine instrumentation, sensors, and automation equipment from 50+ global brands.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/search?q=" className="btn-primary text-base px-7 py-3">Shop Now <ArrowRight size={18} /></Link>
              <Link href="/search?q=" className="btn-secondary bg-white/10 border-white/20 text-white hover:bg-white/20 text-base px-7 py-3">Browse Catalog</Link>
            </div>
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
              {[["10,000+","Products"],["500+","Clients"],["50+","Brands"],["15+","Years"]].map(([num, label]) => (
                <div key={label}><p className="font-display font-bold text-2xl text-white">{num}</p><p className="text-xs text-slate-400">{label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">{b.icon}</div>
              <div><p className="text-sm font-semibold text-slate-800">{b.title}</p><p className="text-xs text-slate-500">{b.sub}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div><h2 className="section-title">Shop by Category</h2><p className="text-slate-500 text-sm mt-1">Find the right instrument for your application</p></div>
          <Link href="/search?q=" className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">All Categories <ChevronRight size={16} /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {categories.map((cat: any) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`} className="card p-4 text-center hover:border-blue-200 group transition-all duration-200 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors">{categoryIcons[cat.icon] || <Gauge size={28} />}</div>
              <h3 className="text-xs font-semibold text-slate-700 leading-snug">{cat.name}</h3>
              <p className="text-[10px] text-slate-400 mt-1">{cat.productCount ?? 0} products</p>
            </Link>
          ))}
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section className="bg-blue-50/50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div><h2 className="section-title">🏆 Bestselling Products</h2><p className="text-slate-500 text-sm mt-1">Most trusted by process engineers</p></div>
              <Link href="/search?q=" className="text-sm text-blue-600 font-medium flex items-center gap-1">View All <ChevronRight size={16} /></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredProducts.map((p: any) => <ProductCard key={p._id} product={normalize(p)} />)}
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="section-title text-center mb-2">Authorized Distributors</h2>
        <p className="text-slate-500 text-sm text-center mb-8">Genuine products from 50+ global leaders</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {brands.map((brand) => (
            <Link key={brand} href={`/search?q=&brand=${encodeURIComponent(brand)}`}
              className="bg-white border border-slate-100 rounded-xl px-6 py-3 text-sm font-semibold text-slate-600 shadow-sm hover:border-blue-200 hover:text-blue-700 transition-all">{brand}</Link>
          ))}
        </div>
      </section>

      {newProducts.length > 0 && (
        <section className="bg-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title text-white mb-6">✦ New Arrivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {newProducts.map((p: any) => <ProductCard key={p._id} product={normalize(p)} />)}
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div><h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">Need a Custom Solution?</h2><p className="text-blue-100">Our application engineers will help you select the right instrument.</p></div>
          <div className="flex gap-3 shrink-0">
            <a href="https://wa.me/918431709221?text=Hello%2C%20I%20need%20assistance%20with%20industrial%20products." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors">WhatsApp Us</a>
            <a href="tel:+918431709221" className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
