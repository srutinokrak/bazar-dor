import ProductMarketSummury from "@/component/ProductMarketSummury";

type Market = {
  market: string;
  division: string;
  min: number;
  max: number;
};

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productsId: string }>;
}) => {
  const { productsId } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productsId}`,
  );

  const data = await res.json();

  console.log(data);
  const product = data.data ?? data;
  console.log(product);



  const unitLabels: Record<string, string> = {
    kg: "কেজি",
    gram: "পিস",
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
    <section>
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
          <p
            className={`w-fit rounded-xl border border-base-100 bg-base-300 p-1 ${changeColor}`}
          >
            {change && (
              <p>
                {changeLabel}{" "}
                {new Intl.NumberFormat("bn-BD").format(change.pct)}%
              </p>
            )}
          </p>
        </div>
      </div>
      <div><ProductMarketSummury markets={product.markets ?? []}
  unitLabel={unitBn}  /></div>
    </section>
  );
};

export default ProductDetailsPage;
