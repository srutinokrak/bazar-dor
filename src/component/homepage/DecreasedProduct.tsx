import React, { Suspense } from "react";
import ProductCard from "../ProductCard";

const getProducts = async () => {
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

      <div className="grid grid-cols-3 gap-3 ">
        {productsData
          .filter((product) => product.change?.dir === "down")
          .slice(0, 6)
          .map((product, ind) => {
            return <ProductCard key={ind} product={product} />;
          })}
      </div>
    </div>
  );
};

export default DecreaseProducts;
