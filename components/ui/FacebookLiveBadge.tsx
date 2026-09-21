import React from "react";
import { Radio } from "lucide-react";

interface FacebookLiveBadgeProps {
  isLive?: boolean;
  className?: string;
}

export function FacebookLiveBadge({ isLive = false, className = "" }: FacebookLiveBadgeProps) {
  if (!isLive) {
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20 ${className}`}>
        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
        <span>Sundays at 10 AM on Facebook Live</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white shadow-lg animate-pulse ${className}`}>
      <Radio className="w-3.5 h-3.5" />
      <span>Live Now on Facebook</span>
    </span>
  );
}
