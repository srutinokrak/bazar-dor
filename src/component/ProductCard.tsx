import { Product } from "@/types/product.types";

import Link from "next/link";
import React from "react";

/*

*/

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  console.log(product);
  const change = product.change;

  const changeLabel =
    change?.dir === "up" ? " ▲ " : change?.dir === "down" ? " ▼" : "-";

  const changeColor =
    change?.dir === "up"
      ? "text-red-600"
      : change?.dir === "down"
        ? "text-green-600"
        : "text-gray-600";

  const unitLabels: Record<string, string> = {
    kg: "কেজি",
    piece: "পিস",
    litre: "লিটার",
    dozen: "ডজন",
  };

  const unitBn = unitLabels[product.unit.toLowerCase()] ?? product.unit;

  return (
    <Link href={`/products/${product.id}`}>
      <div className="border border-base-300  p-5  rounded-2xl">
        <div className="flex gap-4">
          <div className="border border-base-300 p-4 bg-base-200 rounded-2xl mb-5 ">
            {product.image}
          </div>
          <div>
            <h2 className="card-title">{product.nameBn}</h2>
            <p>প্রতি {unitBn}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-xs text-[#687269]">আজকের দাম</p>
            <p className="text-xl font-bold">
              {new Intl.NumberFormat("bn-BD").format(product.today)} টাকা
            </p>
          </div>

          {change && (
            <p
              className={`w-fit rounded-xl border border-base-100 bg-base-300 p-1 ${changeColor}`}
            >
              {changeLabel} {new Intl.NumberFormat("bn-BD").format(change.pct)}%
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
