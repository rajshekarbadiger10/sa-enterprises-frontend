// components/layout/Footer.tsx
import Link from "next/link";
import { Gauge, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { categories } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/images/logo.jpeg"
                alt="S A Enterprises"
                className="w-12 h-12 object-contain rounded-lg bg-white p-0.5"
              />
              <span className="font-display font-bold text-xl text-white">S A Enterprises</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              India's trusted supplier of fasteners, raw materials, mechanical components, electrical, hydraulic, safety, and MRO products.
            </p>
            <div className="space-y-2">
              <a href="tel:+918431709221" className="flex items-center gap-2 text-sm hover:text-orange-400 transition-colors">
                <Phone size={14} /> +91 84317 09221
              </a>
              <a href="mailto:sales@saenterprises.in" className="flex items-center gap-2 text-sm hover:text-orange-400 transition-colors">
                <Mail size={14} /> sales@saenterprises.in
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span className="text-slate-400">Plot 42, MIDC Industrial Area, Pune, Maharashtra 411018</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Product Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="text-sm hover:text-orange-400 transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Our Brands", "Case Studies", "Careers", "Blog", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-orange-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Services & Support</h4>
            <ul className="space-y-2">
              {["Technical Consultation", "Calibration Services", "AMC & Service Contracts", "Installation Support", "Spare Parts", "Training"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-orange-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Certified By</p>
              <div className="flex flex-wrap gap-2">
                {["ISO 9001:2015", "ATEX", "IECEx"].map((cert) => (
                  <span key={cert} className="text-xs bg-slate-800 border border-slate-700 px-2 py-1 rounded font-mono">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2024 S A Enterprises. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
