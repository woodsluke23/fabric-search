"use client";

import Image from "next/image";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const materialBreakdown = product.materials.fibers
    .map((f) => `${f.percentage}% ${f.name}`)
    .join(", ");

  return (
    <a
      href={product.productUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-[var(--card)] rounded-xl border border-[var(--border)] overflow-hidden hover:shadow-lg hover:border-[var(--accent)]/30 transition-all duration-200"
    >
      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.materials.verified && (
          <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-medium bg-[var(--accent)] text-white rounded-full">
            Verified
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-0.5">
          {product.brand} · {product.retailer}
        </p>
        <h3 className="font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors line-clamp-2">
          {product.title}
        </h3>
        <div className="mt-2 pt-2 border-t border-[var(--border)]">
          <p className="text-sm text-[var(--muted)] font-medium">Materials</p>
          <p className="text-sm text-[var(--fg)]">{materialBreakdown}</p>
        </div>
        <p className="mt-2 text-lg font-semibold text-[var(--accent)]">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </a>
  );
}
