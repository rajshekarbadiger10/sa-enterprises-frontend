// lib/data.ts
import { Product, Category } from "./types";

export const categories: Category[] = [
  {
    "slug": "fasteners",
    "name": "Fasteners",
    "description": "Bolts, nuts, washers, screws and anchors for every industrial application",
    "image": "https://res.cloudinary.com/rsc/image/upload/F5080994-01",
    "icon": "settings",
    "subcategories": [
      "Hex Bolts",
      "Allen Bolts",
      "Carriage Bolts",
      "Eye Bolts",
      "U-Bolts",
      "Foundation Bolts",
      "Flange Bolts",
      "Stud Bolts",
      "Hex Nuts",
      "Nyloc Nuts",
      "Dome Nuts",
      "Flange Nuts",
      "Plain Washers",
      "Spring Washers",
      "Star Washers",
      "Fender Washers",
      "Self Tapping Screws",
      "Self Drilling Screws",
      "Wedge Anchors",
      "Chemical Anchors",
      "Sleeve Anchors"
    ],
    "productCount": 21
  },
  {
    "slug": "raw-materials",
    "name": "Raw Materials",
    "description": "MS, SS, aluminium, copper and brass materials in all standard forms",
    "image": "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
    "icon": "layers",
    "subcategories": [
      "MS Plates",
      "MS Sheets",
      "MS Rods",
      "Round Bars",
      "Square Bars",
      "MS Pipes (ERW/Seamless)",
      "Channels",
      "Angles",
      "I-Beams",
      "SS 202 Sheets",
      "SS 304 Sheets",
      "SS 316 Sheets",
      "SS Pipes",
      "SS Rods",
      "Aluminium Sheets",
      "Aluminium Rods",
      "Copper Wires",
      "Bus Bars",
      "Brass Components",
      "Bronze Components"
    ],
    "productCount": 20
  },
  {
    "slug": "mechanical-components",
    "name": "Mechanical Components",
    "description": "Bearings, gearboxes, belts, chains, couplings and power transmission parts",
    "image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&q=80",
    "icon": "gauge",
    "subcategories": [
      "Ball Bearings",
      "Roller Bearings",
      "Pillow Block Bearings",
      "Industrial Gearboxes",
      "Worm Gearboxes",
      "Helical Gearboxes",
      "V Belts",
      "Timing Belts",
      "Roller Chains",
      "Couplings",
      "Sprockets",
      "Pulleys",
      "Shafts"
    ],
    "productCount": 13
  },
  {
    "slug": "electrical-automation",
    "name": "Electrical & Automation",
    "description": "Cables, panels, motors, drives, transformers and switchgear",
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    "icon": "zap",
    "subcategories": [
      "Industrial Power Cables",
      "Batteries",
      "Control Cables",
      "Cable Trays",
      "Cable Glands",
      "Insulation Tapes",
      "MCC Panels",
      "PCC Panels",
      "PLC Panels",
      "HMIs",
      "Servo Motors",
      "AC Motors",
      "DC Motors",
      "Fans",
      "VFD Drives",
      "Transformers",
      "Switchgear"
    ],
    "productCount": 17
  },
  {
    "slug": "hydraulic-pneumatic",
    "name": "Hydraulic & Pneumatic",
    "description": "Cylinders, pumps, compressors, valves and fluid power components",
    "image": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80",
    "icon": "droplets",
    "subcategories": [
      "Hydraulic Cylinders",
      "Hydraulic Pumps",
      "Hydraulic Power Packs",
      "Pneumatic Cylinders",
      "Air Compressors",
      "FRL Units",
      "Solenoid Valves",
      "Hydraulic Hoses",
      "PU Tubes"
    ],
    "productCount": 9
  },
  {
    "slug": "industrial-safety",
    "name": "Industrial Safety",
    "description": "PPE, fire safety and workplace protection equipment",
    "image": "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=600&q=80",
    "icon": "shield",
    "subcategories": [
      "Safety Helmets",
      "Gloves",
      "Goggles",
      "Steel Toe Safety Shoes",
      "Reflective Jackets",
      "Safety Harness",
      "Fire Extinguishers",
      "Smoke Detectors",
      "Fire Blankets"
    ],
    "productCount": 9
  },
  {
    "slug": "consumables-mro",
    "name": "Consumables & MRO",
    "description": "Welding, grinding, cutting, lubricants and maintenance supplies",
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    "icon": "wrench",
    "subcategories": [
      "Welding Electrodes",
      "Welding Rods",
      "Grinding Wheels",
      "Cutting Discs",
      "Drill Bits",
      "Taps",
      "Dies",
      "Lubricants",
      "Grease",
      "Industrial Adhesives",
      "Sealants",
      "Cleaning Chemicals",
      "Maintenance Supplies"
    ],
    "productCount": 13
  }
];

export const products: Product[] = [
  {
    "id": "FA-001",
    "name": "Hex Bolts",
    "productCode": "HEXBOLTS-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.9,
    "reviewCount": 78,
    "images": [
      "https://tse1.mm.bing.net/th?q=Hex%20Bolts%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Hex Bolts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-002",
    "name": "Allen Bolts",
    "productCode": "ALLENBOL-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.3,
    "reviewCount": 69,
    "images": [
      "https://tse1.mm.bing.net/th?q=Allen%20Bolts%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Allen Bolts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-003",
    "name": "Carriage Bolts",
    "productCode": "CARRIAGE-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 5,
    "reviewCount": 33,
    "images": [
      "https://tse1.mm.bing.net/th?q=Carriage%20Bolts%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Carriage Bolts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-004",
    "name": "Eye Bolts",
    "productCode": "EYEBOLTS-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.7,
    "reviewCount": 27,
    "images": [
      "https://tse1.mm.bing.net/th?q=Eye%20Bolts%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Eye Bolts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-005",
    "name": "U-Bolts",
    "productCode": "UBOLTS-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.9,
    "reviewCount": 186,
    "images": [
      "https://tse1.mm.bing.net/th?q=U-Bolts%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality U-Bolts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-006",
    "name": "Foundation Bolts",
    "productCode": "FOUNDATI-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 131,
    "images": [
      "https://tse1.mm.bing.net/th?q=Foundation%20Bolts%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Foundation Bolts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-007",
    "name": "Flange Bolts",
    "productCode": "FLANGEBO-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.9,
    "reviewCount": 89,
    "images": [
      "https://tse1.mm.bing.net/th?q=Flange%20Bolts%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Flange Bolts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-008",
    "name": "Stud Bolts",
    "productCode": "STUDBOLT-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 5,
    "reviewCount": 55,
    "images": [
      "https://tse1.mm.bing.net/th?q=Stud%20Bolts%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Stud Bolts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-009",
    "name": "Hex Nuts",
    "productCode": "HEXNUTS-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4,
    "reviewCount": 113,
    "images": [
      "https://tse1.mm.bing.net/th?q=Hex%20Nuts%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Hex Nuts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "new"
  },
  {
    "id": "FA-010",
    "name": "Nyloc Nuts",
    "productCode": "NYLOCNUT-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 77,
    "images": [
      "https://tse1.mm.bing.net/th?q=Nyloc%20Nuts%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Nyloc Nuts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-011",
    "name": "Dome Nuts",
    "productCode": "DOMENUTS-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.8,
    "reviewCount": 185,
    "images": [
      "https://tse1.mm.bing.net/th?q=Dome%20Nuts%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Dome Nuts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-012",
    "name": "Flange Nuts",
    "productCode": "FLANGENU-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.6,
    "reviewCount": 126,
    "images": [
      "https://tse1.mm.bing.net/th?q=Flange%20Nuts%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Flange Nuts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "new"
  },
  {
    "id": "FA-013",
    "name": "Plain Washers",
    "productCode": "PLAINWAS-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.5,
    "reviewCount": 173,
    "images": [
      "https://tse1.mm.bing.net/th?q=Plain%20Washers%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Plain Washers designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "FA-014",
    "name": "Spring Washers",
    "productCode": "SPRINGWA-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.4,
    "reviewCount": 130,
    "images": [
      "https://tse1.mm.bing.net/th?q=Spring%20Washers%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Spring Washers designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "FA-015",
    "name": "Star Washers",
    "productCode": "STARWASH-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.7,
    "reviewCount": 86,
    "images": [
      "https://tse1.mm.bing.net/th?q=Star%20Washers%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Star Washers designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-016",
    "name": "Fender Washers",
    "productCode": "FENDERWA-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.8,
    "reviewCount": 113,
    "images": [
      "https://tse1.mm.bing.net/th?q=Fender%20Washers%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Fender Washers designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-017",
    "name": "Self Tapping Screws",
    "productCode": "SELFTAPP-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.4,
    "reviewCount": 81,
    "images": [
      "https://tse1.mm.bing.net/th?q=Self%20Tapping%20Screws%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Self Tapping Screws designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-018",
    "name": "Self Drilling Screws",
    "productCode": "SELFDRIL-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.2,
    "reviewCount": 82,
    "images": [
      "https://tse1.mm.bing.net/th?q=Self%20Drilling%20Screws%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Self Drilling Screws designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "FA-019",
    "name": "Wedge Anchors",
    "productCode": "WEDGEANC-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.3,
    "reviewCount": 200,
    "images": [
      "https://tse1.mm.bing.net/th?q=Wedge%20Anchors%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Wedge Anchors designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "FA-020",
    "name": "Chemical Anchors",
    "productCode": "CHEMICAL-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4,
    "reviewCount": 41,
    "images": [
      "https://tse1.mm.bing.net/th?q=Chemical%20Anchors%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Chemical Anchors designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "FA-021",
    "name": "Sleeve Anchors",
    "productCode": "SLEEVEAN-001",
    "brand": "Premium Industrial",
    "categorySlug": "fasteners",
    "categoryName": "Fasteners",
    "price": 0,
    "rating": 4.2,
    "reviewCount": 21,
    "images": [
      "https://tse1.mm.bing.net/th?q=Sleeve%20Anchors%20Fasteners%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Sleeve Anchors designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "RM-022",
    "name": "MS Plates",
    "productCode": "MSPLATES-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.9,
    "reviewCount": 55,
    "images": [
      "https://tse1.mm.bing.net/th?q=MS%20Plates%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality MS Plates designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "RM-023",
    "name": "MS Sheets",
    "productCode": "MSSHEETS-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.2,
    "reviewCount": 72,
    "images": [
      "https://tse1.mm.bing.net/th?q=MS%20Sheets%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality MS Sheets designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "RM-024",
    "name": "MS Rods",
    "productCode": "MSRODS-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.3,
    "reviewCount": 196,
    "images": [
      "https://tse1.mm.bing.net/th?q=MS%20Rods%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality MS Rods designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "RM-025",
    "name": "Round Bars",
    "productCode": "ROUNDBAR-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.2,
    "reviewCount": 150,
    "images": [
      "https://tse1.mm.bing.net/th?q=Round%20Bars%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Round Bars designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "RM-026",
    "name": "Square Bars",
    "productCode": "SQUAREBA-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.4,
    "reviewCount": 140,
    "images": [
      "https://tse1.mm.bing.net/th?q=Square%20Bars%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Square Bars designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "RM-027",
    "name": "MS Pipes (ERW/Seamless)",
    "productCode": "MSPIPESE-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.3,
    "reviewCount": 39,
    "images": [
      "https://tse1.mm.bing.net/th?q=MS%20Pipes%20(ERW%2FSeamless)%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality MS Pipes (ERW/Seamless) designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "RM-028",
    "name": "Channels",
    "productCode": "CHANNELS-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.5,
    "reviewCount": 156,
    "images": [
      "https://tse1.mm.bing.net/th?q=Channels%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Channels designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "RM-029",
    "name": "Angles",
    "productCode": "ANGLES-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 5,
    "reviewCount": 73,
    "images": [
      "https://tse1.mm.bing.net/th?q=Angles%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Angles designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "RM-030",
    "name": "I-Beams",
    "productCode": "IBEAMS-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.6,
    "reviewCount": 68,
    "images": [
      "https://tse1.mm.bing.net/th?q=I-Beams%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality I-Beams designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "RM-031",
    "name": "SS 202 Sheets",
    "productCode": "SS202SHE-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.6,
    "reviewCount": 72,
    "images": [
      "https://tse1.mm.bing.net/th?q=SS%20202%20Sheets%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality SS 202 Sheets designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "RM-032",
    "name": "SS 304 Sheets",
    "productCode": "SS304SHE-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.9,
    "reviewCount": 102,
    "images": [
      "https://tse1.mm.bing.net/th?q=SS%20304%20Sheets%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality SS 304 Sheets designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "RM-033",
    "name": "SS 316 Sheets",
    "productCode": "SS316SHE-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.9,
    "reviewCount": 209,
    "images": [
      "https://tse1.mm.bing.net/th?q=SS%20316%20Sheets%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality SS 316 Sheets designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "new"
  },
  {
    "id": "RM-034",
    "name": "SS Pipes",
    "productCode": "SSPIPES-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4,
    "reviewCount": 30,
    "images": [
      "https://tse1.mm.bing.net/th?q=SS%20Pipes%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality SS Pipes designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "RM-035",
    "name": "SS Rods",
    "productCode": "SSRODS-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.2,
    "reviewCount": 175,
    "images": [
      "https://tse1.mm.bing.net/th?q=SS%20Rods%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality SS Rods designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "RM-036",
    "name": "Aluminium Sheets",
    "productCode": "ALUMINIU-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 157,
    "images": [
      "https://tse1.mm.bing.net/th?q=Aluminium%20Sheets%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Aluminium Sheets designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "RM-037",
    "name": "Aluminium Rods",
    "productCode": "ALUMINIU-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.8,
    "reviewCount": 88,
    "images": [
      "https://tse1.mm.bing.net/th?q=Aluminium%20Rods%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Aluminium Rods designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "RM-038",
    "name": "Copper Wires",
    "productCode": "COPPERWI-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.5,
    "reviewCount": 144,
    "images": [
      "https://tse1.mm.bing.net/th?q=Copper%20Wires%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Copper Wires designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "RM-039",
    "name": "Bus Bars",
    "productCode": "BUSBARS-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.7,
    "reviewCount": 159,
    "images": [
      "https://tse1.mm.bing.net/th?q=Bus%20Bars%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Bus Bars designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "RM-040",
    "name": "Brass Components",
    "productCode": "BRASSCOM-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.9,
    "reviewCount": 149,
    "images": [
      "https://tse1.mm.bing.net/th?q=Brass%20Components%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Brass Components designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "RM-041",
    "name": "Bronze Components",
    "productCode": "BRONZECO-001",
    "brand": "Premium Industrial",
    "categorySlug": "raw-materials",
    "categoryName": "Raw Materials",
    "price": 0,
    "rating": 4.3,
    "reviewCount": 104,
    "images": [
      "https://tse1.mm.bing.net/th?q=Bronze%20Components%20Raw%20Materials%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Bronze Components designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "MC-042",
    "name": "Ball Bearings",
    "productCode": "BALLBEAR-001",
    "brand": "Premium Industrial",
    "categorySlug": "mechanical-components",
    "categoryName": "Mechanical Components",
    "price": 0,
    "rating": 4.5,
    "reviewCount": 12,
    "images": [
      "https://tse1.mm.bing.net/th?q=Ball%20Bearings%20Mechanical%20Components%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Ball Bearings designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "MC-043",
    "name": "Roller Bearings",
    "productCode": "ROLLERBE-001",
    "brand": "Premium Industrial",
    "categorySlug": "mechanical-components",
    "categoryName": "Mechanical Components",
    "price": 0,
    "rating": 4.5,
    "reviewCount": 109,
    "images": [
      "https://tse1.mm.bing.net/th?q=Roller%20Bearings%20Mechanical%20Components%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Roller Bearings designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "MC-044",
    "name": "Pillow Block Bearings",
    "productCode": "PILLOWBL-001",
    "brand": "Premium Industrial",
    "categorySlug": "mechanical-components",
    "categoryName": "Mechanical Components",
    "price": 0,
    "rating": 4.8,
    "reviewCount": 177,
    "images": [
      "https://tse1.mm.bing.net/th?q=Pillow%20Block%20Bearings%20Mechanical%20Components%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Pillow Block Bearings designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "MC-045",
    "name": "Industrial Gearboxes",
    "productCode": "INDUSTRI-001",
    "brand": "Premium Industrial",
    "categorySlug": "mechanical-components",
    "categoryName": "Mechanical Components",
    "price": 0,
    "rating": 4.3,
    "reviewCount": 169,
    "images": [
      "https://tse1.mm.bing.net/th?q=Industrial%20Gearboxes%20Mechanical%20Components%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Industrial Gearboxes designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "MC-046",
    "name": "Worm Gearboxes",
    "productCode": "WORMGEAR-001",
    "brand": "Premium Industrial",
    "categorySlug": "mechanical-components",
    "categoryName": "Mechanical Components",
    "price": 0,
    "rating": 4.8,
    "reviewCount": 118,
    "images": [
      "https://tse1.mm.bing.net/th?q=Worm%20Gearboxes%20Mechanical%20Components%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Worm Gearboxes designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "MC-047",
    "name": "Helical Gearboxes",
    "productCode": "HELICALG-001",
    "brand": "Premium Industrial",
    "categorySlug": "mechanical-components",
    "categoryName": "Mechanical Components",
    "price": 0,
    "rating": 4.4,
    "reviewCount": 47,
    "images": [
      "https://tse1.mm.bing.net/th?q=Helical%20Gearboxes%20Mechanical%20Components%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Helical Gearboxes designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "MC-048",
    "name": "V Belts",
    "productCode": "VBELTS-001",
    "brand": "Premium Industrial",
    "categorySlug": "mechanical-components",
    "categoryName": "Mechanical Components",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 45,
    "images": [
      "https://tse1.mm.bing.net/th?q=V%20Belts%20Mechanical%20Components%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality V Belts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "MC-049",
    "name": "Timing Belts",
    "productCode": "TIMINGBE-001",
    "brand": "Premium Industrial",
    "categorySlug": "mechanical-components",
    "categoryName": "Mechanical Components",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 154,
    "images": [
      "https://tse1.mm.bing.net/th?q=Timing%20Belts%20Mechanical%20Components%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Timing Belts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "MC-050",
    "name": "Roller Chains",
    "productCode": "ROLLERCH-001",
    "brand": "Premium Industrial",
    "categorySlug": "mechanical-components",
    "categoryName": "Mechanical Components",
    "price": 0,
    "rating": 4.7,
    "reviewCount": 117,
    "images": [
      "https://tse1.mm.bing.net/th?q=Roller%20Chains%20Mechanical%20Components%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Roller Chains designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "MC-051",
    "name": "Couplings",
    "productCode": "COUPLING-001",
    "brand": "Premium Industrial",
    "categorySlug": "mechanical-components",
    "categoryName": "Mechanical Components",
    "price": 0,
    "rating": 4.5,
    "reviewCount": 123,
    "images": [
      "https://tse1.mm.bing.net/th?q=Couplings%20Mechanical%20Components%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Couplings designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "MC-052",
    "name": "Sprockets",
    "productCode": "SPROCKET-001",
    "brand": "Premium Industrial",
    "categorySlug": "mechanical-components",
    "categoryName": "Mechanical Components",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 10,
    "images": [
      "https://tse1.mm.bing.net/th?q=Sprockets%20Mechanical%20Components%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Sprockets designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "MC-053",
    "name": "Pulleys",
    "productCode": "PULLEYS-001",
    "brand": "Premium Industrial",
    "categorySlug": "mechanical-components",
    "categoryName": "Mechanical Components",
    "price": 0,
    "rating": 4.6,
    "reviewCount": 117,
    "images": [
      "https://tse1.mm.bing.net/th?q=Pulleys%20Mechanical%20Components%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Pulleys designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "MC-054",
    "name": "Shafts",
    "productCode": "SHAFTS-001",
    "brand": "Premium Industrial",
    "categorySlug": "mechanical-components",
    "categoryName": "Mechanical Components",
    "price": 0,
    "rating": 4.7,
    "reviewCount": 24,
    "images": [
      "https://tse1.mm.bing.net/th?q=Shafts%20Mechanical%20Components%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Shafts designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "EA-055",
    "name": "Industrial Power Cables",
    "productCode": "INDUSTRI-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4.4,
    "reviewCount": 125,
    "images": [
      "https://tse1.mm.bing.net/th?q=Industrial%20Power%20Cables%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Industrial Power Cables designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "EA-056",
    "name": "Batteries",
    "productCode": "BATTERIE-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4.2,
    "reviewCount": 49,
    "images": [
      "https://tse1.mm.bing.net/th?q=Batteries%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Batteries designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "EA-057",
    "name": "Control Cables",
    "productCode": "CONTROLC-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4.6,
    "reviewCount": 52,
    "images": [
      "https://tse1.mm.bing.net/th?q=Control%20Cables%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Control Cables designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "EA-058",
    "name": "Cable Trays",
    "productCode": "CABLETRA-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4.2,
    "reviewCount": 67,
    "images": [
      "https://tse1.mm.bing.net/th?q=Cable%20Trays%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Cable Trays designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "EA-059",
    "name": "Cable Glands",
    "productCode": "CABLEGLA-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4,
    "reviewCount": 161,
    "images": [
      "https://tse1.mm.bing.net/th?q=Cable%20Glands%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Cable Glands designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "EA-060",
    "name": "Insulation Tapes",
    "productCode": "INSULATI-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 150,
    "images": [
      "https://tse1.mm.bing.net/th?q=Insulation%20Tapes%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Insulation Tapes designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "new"
  },
  {
    "id": "EA-061",
    "name": "MCC Panels",
    "productCode": "MCCPANEL-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 33,
    "images": [
      "https://tse1.mm.bing.net/th?q=MCC%20Panels%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality MCC Panels designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "EA-062",
    "name": "PCC Panels",
    "productCode": "PCCPANEL-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4.7,
    "reviewCount": 37,
    "images": [
      "https://tse1.mm.bing.net/th?q=PCC%20Panels%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality PCC Panels designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "EA-063",
    "name": "PLC Panels",
    "productCode": "PLCPANEL-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4,
    "reviewCount": 10,
    "images": [
      "https://tse1.mm.bing.net/th?q=PLC%20Panels%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality PLC Panels designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "EA-064",
    "name": "HMIs",
    "productCode": "HMIS-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 49,
    "images": [
      "https://tse1.mm.bing.net/th?q=HMIs%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality HMIs designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "EA-065",
    "name": "Servo Motors",
    "productCode": "SERVOMOT-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 127,
    "images": [
      "https://tse1.mm.bing.net/th?q=Servo%20Motors%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Servo Motors designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "EA-066",
    "name": "AC Motors",
    "productCode": "ACMOTORS-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4.4,
    "reviewCount": 163,
    "images": [
      "https://tse1.mm.bing.net/th?q=AC%20Motors%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality AC Motors designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "EA-067",
    "name": "DC Motors",
    "productCode": "DCMOTORS-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 5,
    "reviewCount": 89,
    "images": [
      "https://tse1.mm.bing.net/th?q=DC%20Motors%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality DC Motors designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "new"
  },
  {
    "id": "EA-068",
    "name": "Fans",
    "productCode": "FANS-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4.9,
    "reviewCount": 33,
    "images": [
      "https://tse1.mm.bing.net/th?q=Fans%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Fans designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "EA-069",
    "name": "VFD Drives",
    "productCode": "VFDDRIVE-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4.3,
    "reviewCount": 168,
    "images": [
      "https://tse1.mm.bing.net/th?q=VFD%20Drives%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality VFD Drives designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "EA-070",
    "name": "Transformers",
    "productCode": "TRANSFOR-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 4.8,
    "reviewCount": 160,
    "images": [
      "https://tse1.mm.bing.net/th?q=Transformers%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Transformers designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "EA-071",
    "name": "Switchgear",
    "productCode": "SWITCHGE-001",
    "brand": "Premium Industrial",
    "categorySlug": "electrical-automation",
    "categoryName": "Electrical & Automation",
    "price": 0,
    "rating": 5,
    "reviewCount": 62,
    "images": [
      "https://tse1.mm.bing.net/th?q=Switchgear%20Electrical%20%26%20Automation%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Switchgear designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "HP-072",
    "name": "Hydraulic Cylinders",
    "productCode": "HYDRAULI-001",
    "brand": "Premium Industrial",
    "categorySlug": "hydraulic-pneumatic",
    "categoryName": "Hydraulic & Pneumatic",
    "price": 0,
    "rating": 4.9,
    "reviewCount": 100,
    "images": [
      "https://tse1.mm.bing.net/th?q=Hydraulic%20Cylinders%20Hydraulic%20%26%20Pneumatic%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Hydraulic Cylinders designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "new"
  },
  {
    "id": "HP-073",
    "name": "Hydraulic Pumps",
    "productCode": "HYDRAULI-001",
    "brand": "Premium Industrial",
    "categorySlug": "hydraulic-pneumatic",
    "categoryName": "Hydraulic & Pneumatic",
    "price": 0,
    "rating": 4.3,
    "reviewCount": 69,
    "images": [
      "https://tse1.mm.bing.net/th?q=Hydraulic%20Pumps%20Hydraulic%20%26%20Pneumatic%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Hydraulic Pumps designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "HP-074",
    "name": "Hydraulic Power Packs",
    "productCode": "HYDRAULI-001",
    "brand": "Premium Industrial",
    "categorySlug": "hydraulic-pneumatic",
    "categoryName": "Hydraulic & Pneumatic",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 161,
    "images": [
      "https://tse1.mm.bing.net/th?q=Hydraulic%20Power%20Packs%20Hydraulic%20%26%20Pneumatic%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Hydraulic Power Packs designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "HP-075",
    "name": "Pneumatic Cylinders",
    "productCode": "PNEUMATI-001",
    "brand": "Premium Industrial",
    "categorySlug": "hydraulic-pneumatic",
    "categoryName": "Hydraulic & Pneumatic",
    "price": 0,
    "rating": 4.5,
    "reviewCount": 198,
    "images": [
      "https://tse1.mm.bing.net/th?q=Pneumatic%20Cylinders%20Hydraulic%20%26%20Pneumatic%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Pneumatic Cylinders designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "HP-076",
    "name": "Air Compressors",
    "productCode": "AIRCOMPR-001",
    "brand": "Premium Industrial",
    "categorySlug": "hydraulic-pneumatic",
    "categoryName": "Hydraulic & Pneumatic",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 76,
    "images": [
      "https://tse1.mm.bing.net/th?q=Air%20Compressors%20Hydraulic%20%26%20Pneumatic%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Air Compressors designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "HP-077",
    "name": "FRL Units",
    "productCode": "FRLUNITS-001",
    "brand": "Premium Industrial",
    "categorySlug": "hydraulic-pneumatic",
    "categoryName": "Hydraulic & Pneumatic",
    "price": 0,
    "rating": 4.8,
    "reviewCount": 183,
    "images": [
      "https://tse1.mm.bing.net/th?q=FRL%20Units%20Hydraulic%20%26%20Pneumatic%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality FRL Units designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "HP-078",
    "name": "Solenoid Valves",
    "productCode": "SOLENOID-001",
    "brand": "Premium Industrial",
    "categorySlug": "hydraulic-pneumatic",
    "categoryName": "Hydraulic & Pneumatic",
    "price": 0,
    "rating": 4.2,
    "reviewCount": 99,
    "images": [
      "https://tse1.mm.bing.net/th?q=Solenoid%20Valves%20Hydraulic%20%26%20Pneumatic%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Solenoid Valves designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "new"
  },
  {
    "id": "HP-079",
    "name": "Hydraulic Hoses",
    "productCode": "HYDRAULI-001",
    "brand": "Premium Industrial",
    "categorySlug": "hydraulic-pneumatic",
    "categoryName": "Hydraulic & Pneumatic",
    "price": 0,
    "rating": 4.4,
    "reviewCount": 185,
    "images": [
      "https://tse1.mm.bing.net/th?q=Hydraulic%20Hoses%20Hydraulic%20%26%20Pneumatic%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Hydraulic Hoses designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "HP-080",
    "name": "PU Tubes",
    "productCode": "PUTUBES-001",
    "brand": "Premium Industrial",
    "categorySlug": "hydraulic-pneumatic",
    "categoryName": "Hydraulic & Pneumatic",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 115,
    "images": [
      "https://tse1.mm.bing.net/th?q=PU%20Tubes%20Hydraulic%20%26%20Pneumatic%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality PU Tubes designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "new"
  },
  {
    "id": "IS-081",
    "name": "Safety Helmets",
    "productCode": "SAFETYHE-001",
    "brand": "Premium Industrial",
    "categorySlug": "industrial-safety",
    "categoryName": "Industrial Safety",
    "price": 0,
    "rating": 4.9,
    "reviewCount": 196,
    "images": [
      "https://tse1.mm.bing.net/th?q=Safety%20Helmets%20Industrial%20Safety%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Safety Helmets designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "IS-082",
    "name": "Gloves",
    "productCode": "GLOVES-001",
    "brand": "Premium Industrial",
    "categorySlug": "industrial-safety",
    "categoryName": "Industrial Safety",
    "price": 0,
    "rating": 4.2,
    "reviewCount": 165,
    "images": [
      "https://tse1.mm.bing.net/th?q=Gloves%20Industrial%20Safety%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Gloves designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "IS-083",
    "name": "Goggles",
    "productCode": "GOGGLES-001",
    "brand": "Premium Industrial",
    "categorySlug": "industrial-safety",
    "categoryName": "Industrial Safety",
    "price": 0,
    "rating": 4.3,
    "reviewCount": 183,
    "images": [
      "https://tse1.mm.bing.net/th?q=Goggles%20Industrial%20Safety%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Goggles designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "new"
  },
  {
    "id": "IS-084",
    "name": "Steel Toe Safety Shoes",
    "productCode": "STEELTOE-001",
    "brand": "Premium Industrial",
    "categorySlug": "industrial-safety",
    "categoryName": "Industrial Safety",
    "price": 0,
    "rating": 4.9,
    "reviewCount": 56,
    "images": [
      "https://tse1.mm.bing.net/th?q=Steel%20Toe%20Safety%20Shoes%20Industrial%20Safety%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Steel Toe Safety Shoes designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "new"
  },
  {
    "id": "IS-085",
    "name": "Reflective Jackets",
    "productCode": "REFLECTI-001",
    "brand": "Premium Industrial",
    "categorySlug": "industrial-safety",
    "categoryName": "Industrial Safety",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 80,
    "images": [
      "https://tse1.mm.bing.net/th?q=Reflective%20Jackets%20Industrial%20Safety%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Reflective Jackets designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "IS-086",
    "name": "Safety Harness",
    "productCode": "SAFETYHA-001",
    "brand": "Premium Industrial",
    "categorySlug": "industrial-safety",
    "categoryName": "Industrial Safety",
    "price": 0,
    "rating": 4,
    "reviewCount": 190,
    "images": [
      "https://tse1.mm.bing.net/th?q=Safety%20Harness%20Industrial%20Safety%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Safety Harness designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "IS-087",
    "name": "Fire Extinguishers",
    "productCode": "FIREEXTI-001",
    "brand": "Premium Industrial",
    "categorySlug": "industrial-safety",
    "categoryName": "Industrial Safety",
    "price": 0,
    "rating": 4.9,
    "reviewCount": 143,
    "images": [
      "https://tse1.mm.bing.net/th?q=Fire%20Extinguishers%20Industrial%20Safety%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Fire Extinguishers designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "new"
  },
  {
    "id": "IS-088",
    "name": "Smoke Detectors",
    "productCode": "SMOKEDET-001",
    "brand": "Premium Industrial",
    "categorySlug": "industrial-safety",
    "categoryName": "Industrial Safety",
    "price": 0,
    "rating": 4.3,
    "reviewCount": 118,
    "images": [
      "https://tse1.mm.bing.net/th?q=Smoke%20Detectors%20Industrial%20Safety%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Smoke Detectors designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "IS-089",
    "name": "Fire Blankets",
    "productCode": "FIREBLAN-001",
    "brand": "Premium Industrial",
    "categorySlug": "industrial-safety",
    "categoryName": "Industrial Safety",
    "price": 0,
    "rating": 4.3,
    "reviewCount": 27,
    "images": [
      "https://tse1.mm.bing.net/th?q=Fire%20Blankets%20Industrial%20Safety%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Fire Blankets designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "CM-090",
    "name": "Welding Electrodes",
    "productCode": "WELDINGE-001",
    "brand": "Premium Industrial",
    "categorySlug": "consumables-mro",
    "categoryName": "Consumables & MRO",
    "price": 0,
    "rating": 4.6,
    "reviewCount": 11,
    "images": [
      "https://tse1.mm.bing.net/th?q=Welding%20Electrodes%20Consumables%20%26%20MRO%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Welding Electrodes designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "CM-091",
    "name": "Welding Rods",
    "productCode": "WELDINGR-001",
    "brand": "Premium Industrial",
    "categorySlug": "consumables-mro",
    "categoryName": "Consumables & MRO",
    "price": 0,
    "rating": 4.2,
    "reviewCount": 131,
    "images": [
      "https://tse1.mm.bing.net/th?q=Welding%20Rods%20Consumables%20%26%20MRO%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Welding Rods designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "CM-092",
    "name": "Grinding Wheels",
    "productCode": "GRINDING-001",
    "brand": "Premium Industrial",
    "categorySlug": "consumables-mro",
    "categoryName": "Consumables & MRO",
    "price": 0,
    "rating": 4.2,
    "reviewCount": 35,
    "images": [
      "https://tse1.mm.bing.net/th?q=Grinding%20Wheels%20Consumables%20%26%20MRO%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Grinding Wheels designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "new"
  },
  {
    "id": "CM-093",
    "name": "Cutting Discs",
    "productCode": "CUTTINGD-001",
    "brand": "Premium Industrial",
    "categorySlug": "consumables-mro",
    "categoryName": "Consumables & MRO",
    "price": 0,
    "rating": 4.2,
    "reviewCount": 128,
    "images": [
      "https://tse1.mm.bing.net/th?q=Cutting%20Discs%20Consumables%20%26%20MRO%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Cutting Discs designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "CM-094",
    "name": "Drill Bits",
    "productCode": "DRILLBIT-001",
    "brand": "Premium Industrial",
    "categorySlug": "consumables-mro",
    "categoryName": "Consumables & MRO",
    "price": 0,
    "rating": 4.3,
    "reviewCount": 26,
    "images": [
      "https://tse1.mm.bing.net/th?q=Drill%20Bits%20Consumables%20%26%20MRO%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Drill Bits designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "CM-095",
    "name": "Taps",
    "productCode": "TAPS-001",
    "brand": "Premium Industrial",
    "categorySlug": "consumables-mro",
    "categoryName": "Consumables & MRO",
    "price": 0,
    "rating": 4.3,
    "reviewCount": 138,
    "images": [
      "https://tse1.mm.bing.net/th?q=Taps%20Consumables%20%26%20MRO%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Taps designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "CM-096",
    "name": "Dies",
    "productCode": "DIES-001",
    "brand": "Premium Industrial",
    "categorySlug": "consumables-mro",
    "categoryName": "Consumables & MRO",
    "price": 0,
    "rating": 4.7,
    "reviewCount": 99,
    "images": [
      "https://tse1.mm.bing.net/th?q=Dies%20Consumables%20%26%20MRO%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Dies designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "CM-097",
    "name": "Lubricants",
    "productCode": "LUBRICAN-001",
    "brand": "Premium Industrial",
    "categorySlug": "consumables-mro",
    "categoryName": "Consumables & MRO",
    "price": 0,
    "rating": 4.7,
    "reviewCount": 102,
    "images": [
      "https://tse1.mm.bing.net/th?q=Lubricants%20Consumables%20%26%20MRO%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Lubricants designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "CM-098",
    "name": "Grease",
    "productCode": "GREASE-001",
    "brand": "Premium Industrial",
    "categorySlug": "consumables-mro",
    "categoryName": "Consumables & MRO",
    "price": 0,
    "rating": 4.2,
    "reviewCount": 21,
    "images": [
      "https://tse1.mm.bing.net/th?q=Grease%20Consumables%20%26%20MRO%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Grease designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "CM-099",
    "name": "Industrial Adhesives",
    "productCode": "INDUSTRI-001",
    "brand": "Premium Industrial",
    "categorySlug": "consumables-mro",
    "categoryName": "Consumables & MRO",
    "price": 0,
    "rating": 4.1,
    "reviewCount": 89,
    "images": [
      "https://tse1.mm.bing.net/th?q=Industrial%20Adhesives%20Consumables%20%26%20MRO%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Industrial Adhesives designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "bestseller"
  },
  {
    "id": "CM-100",
    "name": "Sealants",
    "productCode": "SEALANTS-001",
    "brand": "Premium Industrial",
    "categorySlug": "consumables-mro",
    "categoryName": "Consumables & MRO",
    "price": 0,
    "rating": 4.7,
    "reviewCount": 34,
    "images": [
      "https://tse1.mm.bing.net/th?q=Sealants%20Consumables%20%26%20MRO%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Sealants designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "CM-101",
    "name": "Cleaning Chemicals",
    "productCode": "CLEANING-001",
    "brand": "Premium Industrial",
    "categorySlug": "consumables-mro",
    "categoryName": "Consumables & MRO",
    "price": 0,
    "rating": 4.6,
    "reviewCount": 32,
    "images": [
      "https://tse1.mm.bing.net/th?q=Cleaning%20Chemicals%20Consumables%20%26%20MRO%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Cleaning Chemicals designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true
  },
  {
    "id": "CM-102",
    "name": "Maintenance Supplies",
    "productCode": "MAINTENA-001",
    "brand": "Premium Industrial",
    "categorySlug": "consumables-mro",
    "categoryName": "Consumables & MRO",
    "price": 0,
    "rating": 4.7,
    "reviewCount": 186,
    "images": [
      "https://tse1.mm.bing.net/th?q=Maintenance%20Supplies%20Consumables%20%26%20MRO%20industrial%20product%20hardware&w=400&h=400&c=7&rs=1&p=0"
    ],
    "description": "High-quality Maintenance Supplies designed for industrial applications. Provides reliable performance and excellent durability.",
    "applications": [
      "Industrial Assembly",
      "Maintenance",
      "General Engineering"
    ],
    "specifications": {
      "Standard": "Industrial Standard",
      "Quality": "Premium"
    },
    "features": [
      "Durable design",
      "Genuine product",
      "High performance"
    ],
    "inStock": true,
    "tag": "new"
  }
];

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
