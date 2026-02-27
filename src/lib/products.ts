import productsData from "../../data/products.json";
import type { Product } from "@/types/product";

export const products = productsData.products as Product[];

export function getMaterialType(product: Product): string {
  const types = new Set(product.materials.fibers.map((f) => f.type));
  if (types.size > 1) return "blend";
  return product.materials.fibers[0]?.type ?? "unknown";
}

export function filterProducts(
  products: Product[],
  filters: {
    search?: string;
    material?: string;
    category?: string;
    gender?: string;
  }
): Product[] {
  return products.filter((p) => {
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const match =
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.materials.fibers.some((f) => f.name.toLowerCase().includes(q)) ||
        p.categories.some((c) => c.toLowerCase().includes(q));
      if (!match) return false;
    }

    if (filters.material && filters.material !== "all") {
      const matType = getMaterialType(p);
      if (filters.material === "verified" && !p.materials.verified) return false;
      if (filters.material !== "verified" && matType !== filters.material)
        return false;
    }

    if (filters.category && filters.category !== "all") {
      if (!p.categories.includes(filters.category)) return false;
    }

    if (filters.gender && filters.gender !== "all") {
      if (!p.gender.includes(filters.gender)) return false;
    }

    return true;
  });
}
