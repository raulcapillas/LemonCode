import { ProductService } from "@/types";

export const productService = {
  async get(): Promise<ProductService> {
    const products = await fetch("https://dummyjson.com/products", {
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    return products;
  },
};
