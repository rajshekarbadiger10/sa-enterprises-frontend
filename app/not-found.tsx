// app/not-found.tsx
import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-display font-bold text-slate-100 mb-4">404</p>
        <h1 className="font-display text-2xl font-bold text-slate-800 mb-2">Page Not Found</h1>
        <p className="text-slate-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="btn-primary gap-2">
            <Home size={16} /> Go Home
          </Link>
          <Link href="/search?q=" className="btn-secondary gap-2">
            <Search size={16} /> Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
