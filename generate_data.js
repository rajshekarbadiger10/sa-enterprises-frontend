const fs = require('fs');
const path = require('path');
const { image_search } = require('duckduckgo-images-api');

const categories = [
  {
    slug: "fasteners", name: "Fasteners", description: "Bolts, nuts, washers, screws and anchors for every industrial application",
    image: "https://res.cloudinary.com/rsc/image/upload/F5080994-01", icon: "settings",
    subcategories: ["Hex Bolts","Allen Bolts","Carriage Bolts","Eye Bolts","U-Bolts","Foundation Bolts","Flange Bolts","Stud Bolts","Hex Nuts","Nyloc Nuts","Dome Nuts","Flange Nuts","Plain Washers","Spring Washers","Star Washers","Fender Washers","Self Tapping Screws","Self Drilling Screws","Wedge Anchors","Chemical Anchors","Sleeve Anchors"]
  },
  {
    slug: "raw-materials", name: "Raw Materials", description: "MS, SS, aluminium, copper and brass materials in all standard forms",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80", icon: "layers",
    subcategories: ["MS Plates","MS Sheets","MS Rods","Round Bars","Square Bars","MS Pipes (ERW/Seamless)","Channels","Angles","I-Beams","SS 202 Sheets","SS 304 Sheets","SS 316 Sheets","SS Pipes","SS Rods","Aluminium Sheets","Aluminium Rods","Copper Wires","Bus Bars","Brass Components","Bronze Components"]
  },
  {
    slug: "mechanical-components", name: "Mechanical Components", description: "Bearings, gearboxes, belts, chains, couplings and power transmission parts",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&q=80", icon: "gauge",
    subcategories: ["Ball Bearings","Roller Bearings","Pillow Block Bearings","Industrial Gearboxes","Worm Gearboxes","Helical Gearboxes","V Belts","Timing Belts","Roller Chains","Couplings","Sprockets","Pulleys","Shafts"]
  },
  {
    slug: "electrical-automation", name: "Electrical & Automation", description: "Cables, panels, motors, drives, transformers and switchgear",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80", icon: "zap",
    subcategories: ["Industrial Power Cables","Batteries","Control Cables","Cable Trays","Cable Glands","Insulation Tapes","MCC Panels","PCC Panels","PLC Panels","HMIs","Servo Motors","AC Motors","DC Motors","Fans","VFD Drives","Transformers","Switchgear"]
  },
  {
    slug: "hydraulic-pneumatic", name: "Hydraulic & Pneumatic", description: "Cylinders, pumps, compressors, valves and fluid power components",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80", icon: "droplets",
    subcategories: ["Hydraulic Cylinders","Hydraulic Pumps","Hydraulic Power Packs","Pneumatic Cylinders","Air Compressors","FRL Units","Solenoid Valves","Hydraulic Hoses","PU Tubes"]
  },
  {
    slug: "industrial-safety", name: "Industrial Safety", description: "PPE, fire safety and workplace protection equipment",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=600&q=80", icon: "shield",
    subcategories: ["Safety Helmets","Gloves","Goggles","Steel Toe Safety Shoes","Reflective Jackets","Safety Harness","Fire Extinguishers","Smoke Detectors","Fire Blankets"]
  },
  {
    slug: "consumables-mro", name: "Consumables & MRO", description: "Welding, grinding, cutting, lubricants and maintenance supplies",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80", icon: "wrench",
    subcategories: ["Welding Electrodes","Welding Rods","Grinding Wheels","Cutting Discs","Drill Bits","Taps","Dies","Lubricants","Grease","Industrial Adhesives","Sealants","Cleaning Chemicals","Maintenance Supplies"]
  }
];

let idCounter = 1;
function genId(slug) {
  let pfx = 'PRD';
  if (slug === 'fasteners') pfx = 'FA';
  if (slug === 'raw-materials') pfx = 'RM';
  if (slug === 'mechanical-components') pfx = 'MC';
  if (slug === 'electrical-automation') pfx = 'EA';
  if (slug === 'hydraulic-pneumatic') pfx = 'HP';
  if (slug === 'industrial-safety') pfx = 'IS';
  if (slug === 'consumables-mro') pfx = 'CM';
  const idStr = String(idCounter).padStart(3, '0');
  idCounter++;
  return `${pfx}-${idStr}`;
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function main() {
  const products = [];
  
  for (const c of categories) {
    for (const sub of c.subcategories) {
      console.log('Assigning image for: ' + sub);
      const query = encodeURIComponent(sub + ' ' + c.name + ' industrial product hardware');
      let imageUrl = `https://tse1.mm.bing.net/th?q=${query}&w=400&h=400&c=7&rs=1&p=0`;
      
      products.push({
        id: genId(c.slug),
        name: sub,
        productCode: `${sub.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 8)}-001`,
        brand: "Premium Industrial",
        categorySlug: c.slug,
        categoryName: c.name,
        price: 0,
        rating: 4 + (Math.random() * 1).toFixed(1) * 1,
        reviewCount: Math.floor(Math.random() * 200) + 10,
        images: [imageUrl],
        description: `High-quality ${sub} designed for industrial applications. Provides reliable performance and excellent durability.`,
        applications: ["Industrial Assembly", "Maintenance", "General Engineering"],
        specifications: { "Standard": "Industrial Standard", "Quality": "Premium" },
        features: ["Durable design", "Genuine product", "High performance"],
        inStock: true,
        tag: Math.random() > 0.8 ? "bestseller" : (Math.random() > 0.8 ? "new" : undefined)
      });
    }
    c.productCount = products.filter(p => p.categorySlug === c.slug).length;
  }

  const fileContent = `// lib/data.ts
import { Product, Category } from "./types";

export const categories: Category[] = ${JSON.stringify(categories, null, 2)};

export const products: Product[] = ${JSON.stringify(products, null, 2)};

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.categorySlug === slug);
}
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.productCode.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
`;

  fs.writeFileSync(path.join(__dirname, 'lib', 'data.ts'), fileContent, 'utf8');
  console.log('Successfully generated new data.ts with ' + products.length + ' products with real images.');
}

main().catch(console.error);
