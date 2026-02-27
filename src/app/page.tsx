"use client";

import { useState, useMemo } from "react";
import { products, filterProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SearchFilters } from "@/components/SearchFilters";

export default function Home() {
  const [search, setSearch] = useState("");
  const [material, setMaterial] = useState("all");
  const [category, setCategory] = useState("all");
  const [gender, setGender] = useState("all");

  const filteredProducts = useMemo(
    () =>
      filterProducts(products, {
        search: search || undefined,
        material: material !== "all" ? material : undefined,
        category: category !== "all" ? category : undefined,
        gender: gender !== "all" ? gender : undefined,
      }),
    [search, material, category, gender]
  );

  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-[var(--accent)]">
            Fabric Search
          </h1>
          <p className="text-[var(--muted)] mt-1 text-sm">
            Find clothing by material — natural fibers, regenerated fabrics,
            synthetics & verified fiber percentages
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchFilters
            onSearch={setSearch}
            onMaterialChange={setMaterial}
            onCategoryChange={setCategory}
            onGenderChange={setGender}
          />
        </div>

        <p className="text-[var(--muted)] text-sm mb-6">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""} found
        </p>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-[var(--muted)]">
            <p className="text-lg">No products match your filters.</p>
            <p className="text-sm mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </main>
    </div>
  );
}
