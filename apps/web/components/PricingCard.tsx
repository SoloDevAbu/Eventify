"use client";

import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
  onCtaClick?: () => void;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  ctaText,
  highlighted = false,
  onCtaClick,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-200 ${
        highlighted
          ? "border-blue-500/50 bg-blue-500/5 shadow-2xl shadow-blue-500/20"
          : "border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--muted)]"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
          {title}
        </h3>
        <p className="text-[var(--muted-foreground)] text-sm">{description}</p>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-bold text-[var(--foreground)]">
          {price}
        </span>
        {price !== "Free" && (
          <span className="text-[var(--muted-foreground)]">/month</span>
        )}
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-500 shrink-0" />
            <span className="text-[var(--muted-foreground)] text-sm">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={onCtaClick}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
          highlighted
            ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25"
            : "bg-[var(--card-border)] hover:bg-[var(--muted)] text-[var(--foreground)] hover:text-white"
        }`}
      >
        {ctaText}
      </button>
    </div>
  );
}
