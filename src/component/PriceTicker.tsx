import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

type Product = {
  id: string | number;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  change?: {
    dir: "up" | "down" | "same";
    pct: number;
  };
};

const unitLabels: Record<string, string> = {
  kg: "কেজি",
  piece: "পিস",
  liter: "লিটার",
  litre: "লিটার",

  dozen: "ডজন",
};

const formatNumber = (value: number) =>
  new Intl.NumberFormat("bn-BD", { maximumFractionDigits: 1 }).format(value);

const PriceTicker = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();

  const products: Product[] = Array.isArray(data)
    ? data
    : Array.isArray(data.data)
      ? data.data
      : [];

  return (
    <div className="bg-white">
      <MarqueeText
        className="border-y border-slate-200 py-2"
        direction="left"
        duration={10}
        pauseOnHover
      >
        <div className="flex w-max items-center">
          {products.map((product) => {
            const dir = product.change?.dir ?? "same";
            const arrow = dir === "up" ? "▲" : dir === "down" ? "▼" : "—";
            const color =
              dir === "up"
                ? "text-red-600"
                : dir === "down"
                  ? "text-green-700"
                  : "text-slate-500";
            const unit =
              unitLabels[product.unit.toLowerCase()] ?? product.unit;

            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="mx-5 flex shrink-0 items-center gap-2 whitespace-nowrap text-sm"
              >
                <span>{product.image}</span>
                <span>{product.nameBn}</span>
                <span>
                  {formatNumber(product.today)} টাকা/{unit}
                </span>
                <span className={color}>
                  {arrow} {formatNumber(Math.abs(product.change?.pct ?? 0))}%
                </span>
              </Link>
            );
          })}
        </div>
      </MarqueeText>
    </div>
  );
};

export default PriceTicker;