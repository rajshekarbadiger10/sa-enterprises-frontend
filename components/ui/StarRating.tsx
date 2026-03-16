// components/ui/StarRating.tsx
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: number;
  showCount?: boolean;
}

export function StarRating({ rating, reviewCount, size = 16, showCount = true }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = star <= Math.floor(rating);
          const partial = !filled && star === Math.ceil(rating) && rating % 1 > 0;
          return (
            <div key={star} className="relative">
              <Star size={size} className="text-slate-200 fill-slate-200" />
              {(filled || partial) && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: filled ? "100%" : `${(rating % 1) * 100}%` }}
                >
                  <Star size={size} className="fill-amber-400 text-amber-400" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <span className="text-sm font-semibold text-slate-800">{rating}</span>
      {showCount && reviewCount !== undefined && (
        <span className="text-sm text-slate-400">({reviewCount} reviews)</span>
      )}
    </div>
  );
}
