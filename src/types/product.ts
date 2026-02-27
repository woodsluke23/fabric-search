export type FiberType = "natural" | "regenerated" | "synthetic";

export interface Fiber {
  name: string;
  percentage: number;
  type: FiberType;
}

export interface Materials {
  fibers: Fiber[];
  verified: boolean;
}

export interface Product {
  id: string;
  title: string;
  brand: string;
  retailer: string;
  price: number;
  imageUrl: string;
  productUrl: string;
  description: string;
  materials: Materials;
  categories: string[];
  gender: string[];
  colors: string[];
}
