import React, { Suspense } from "react";
import ProductCard from "../ProductCard";
import { Product } from "@/types/product.types";

const getProducts = async():Promise<Product[]> => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/products",
    );
    const data = await res.json();
    console.log("from productpage", data);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
const DecreaseProducts = async () => {
  const productsData = await getProducts();
  console.log(productsData);
  return (
    <div>
      <h2 className="text-2xl font-bold flex gap-2 items-center">
        <img
          src="https://img.icons8.com/?size=100&id=SY1PgVhBC8gH&format=png&color=000000"
          className="w-4 h-4 "
        />
        <span>আজ দাম কমেছে</span>
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
        {productsData
          .filter((product) => product.change?.dir === "down")
          .toSorted((a, b) => (a.change?.pct ?? 0) - (b.change?.pct ?? 0))
          .slice(0, 6)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default DecreaseProducts;
