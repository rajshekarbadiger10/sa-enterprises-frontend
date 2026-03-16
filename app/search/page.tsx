// app/search/page.tsx
import { Suspense } from "react";
import { SearchResultsClient } from "@/components/product/SearchResultsClient";

export default function SearchPage() {
  return (
    <div className="animate-page max-w-7xl mx-auto px-4 py-6">
      <Suspense fallback={<div className="text-center py-20 text-slate-500">Loading...</div>}>
        <SearchResultsClient />
      </Suspense>
    </div>
  );
}
