   import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProductMarketSummury from "./ProductMarketSummury";
import Link from "next/link";

export async function ProductDetails({
  params,
}: {
  params: Promise<{ productsId: string }>;
}) {
 const { productsId } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productsId}`,
  );

 if (res.status === 404) {
  notFound();
}

if (!res.ok) {
  throw new Error("Failed to load product");
}

const data = await res.json();
const product = data?.data ?? data;

if (!product?.nameBn || !product?.unit) {
  notFound();
}

  const unitLabels: Record<string, string> = {
    kg: "কেজি",
   piece: "পিস",
    litre: "লিটার",
    dozen: "ডজন",
  };

  const unitBn = unitLabels[product.unit.toLowerCase()] ?? product.unit;

  const priceDifference = Math.abs(product.today - product.yesterday);

  const priceChangeText =
    product.today > product.yesterday
      ? "বেড়েছে"
      : product.today < product.yesterday
        ? "কমেছে"
        : "একই আছে";

  const priceDifferenceBn = new Intl.NumberFormat("bn-BD").format(
    priceDifference,
  );

  const change = product.change;

  const changeLabel =
    change?.dir === "up" ? "↑ " : change?.dir === "down" ? "↓" : "→";

  const changeColor =
    change?.dir === "up"
      ? "text-red-600"
      : change?.dir === "down"
        ? "text-green-600"
        : "text-gray-600";


    return (
<>
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-500">
  <ol className="flex items-center gap-2">
    <li>
      <Link href="/">হোম</Link>
    </li>
    <li aria-hidden="true">›</li>
    <li>
      <Link href={`/category/${product.category}`}>
        {product.categoryNameBn}
      </Link>
    </li>
    <li aria-hidden="true">›</li>
    <li aria-current="page" className="text-slate-800">
      {product.nameBn}
    </li>
  </ol>
</nav>
        <div>
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-4">
          <div className="text-3xl rounded-xl p-4 bg-slate-100">
            {product.image}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{product.nameBn}</h1>
            <p className="text-sm text-slate-500">
              প্রতি {unitBn}.{product.categoryNameBn}
            </p>
            <p className="text-sm mt-2">
              গতকালের তুলনায় আজ দাম {priceChangeText} · {priceDifferenceBn}{" "}
              টাকা
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-slate-100 p-4 text-center">
          <p className="text-sm text-slate-500">আজকের দাম</p>
          <p className="text-2xl font-bold">
            {new Intl.NumberFormat("bn-BD").format(product.today)}
          </p>
          <p className="text-sm text-slate-500 mb-3">টাকা /{unitBn}</p>
          <div
            className={`w-fit rounded-xl border border-base-100 bg-base-300 p-1 ${changeColor}`}
          >
            {change && (
              <p>
                {changeLabel}{" "}
                {new Intl.NumberFormat("bn-BD").format(change.pct)}%
              </p>
            )}
          </div>
        </div>
      </div>
        <div>
      <Suspense fallback={"loading...."}>
          <ProductMarketSummury
            markets={product.markets ?? []}
            unitLabel={unitBn}
          />
      </Suspense>
        </div>
        </div>
        </>
    )
}