type Market = {
  market: string;
  division: string;
  min: number;
  max: number;
};

type ProductMarketSummaryProps = {
  markets: Market[];
  unitLabel: string;
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 2,
  }).format(price);

const ProductMarketSummury = ({
  markets,
  unitLabel,
}: ProductMarketSummaryProps) => {
  const minPrice =
    markets.length > 0 ? Math.min(...markets.map((item) => item.min)) : null;

  const maxPrice =
    markets.length > 0 ? Math.max(...markets.map((item) => item.max)) : null;

  const averagePrice =
    markets.length > 0
      ? Math.round(
          markets.reduce((sum, item) => sum + (item.min + item.max) / 2, 0) /
            markets.length,
        )
      : null;

  const lowestMarket =
    markets.length > 0
      ? markets.reduce((lowest, item) =>
          item.min < lowest.min ? item : lowest,
        )
      : null;

  const highestMarket =
    markets.length > 0
      ? markets.reduce((highest, item) =>
          item.max > highest.max ? item : highest,
        )
      : null;

  return (
    <section className="mt-5 rounded-xl border border-slate-200 bg-white p-5 mb-10">
      <h2 className="mb-4 font-bold">দামের সারসংক্ষেপ</h2>

      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <SummaryItem
          label="সর্বনিম্ন দাম"
          value={minPrice}
          description={
            lowestMarket
              ? `সবচেয়ে কম দামের বাজার: ${lowestMarket.market}`
              : "বাজারের তথ্য নেই"
          }
          color="text-green-700"
        />

        <SummaryItem
          label="সর্বোচ্চ দাম"
          value={maxPrice}
          description={
            highestMarket
              ? `সবচেয়ে বেশি দামের বাজার: ${highestMarket.market}`
              : "বাজারের তথ্য নেই"
          }
          color="text-red-600"
        />

        <SummaryItem
          label="গড় দাম"
          value={averagePrice}
          description={`প্রতি ${unitLabel} হিসেবে`}
          color="text-green-700"
        />
      </div>
      <h2 className="mb-3 font-bold">বাজারভিত্তিক আজকের দাম</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="p-3">বাজার</th>
              <th className="p-3">বিভাগ</th>
              <th className="p-3">সর্বনিম্ন</th>
              <th className="p-3">সর্বোচ্চ</th>
              <th className="p-3">গড়</th>
            </tr>
          </thead>
          <tbody>
            {markets.map((item)=> (
                <tr key={`${item.market}-${item.division}`}  className="border-t border-slate-200">
                  <td className="p-3">{item.market}</td>
                <td className="p-3">{item.division}</td>
                <td className="p-3">{formatPrice(item.min)} টাকা</td>
                <td className="p-3">{formatPrice(item.max)} টাকা</td>
                <td className="p-3">
               {formatPrice(Math.round((item.min + item.max) / 2))} টাকা
                </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

type SummaryItemProps = {
  label: string;
  value: number | null;
  color: string;
  description?: string;
};

const SummaryItem = ({
  label,
  value,
  color,
  description,
}: SummaryItemProps) => (
  <div className="rounded-lg border border-slate-200 p-4">
    <p className="text-sm text-slate-500">{label}</p>
    <p className={`font-bold ${color}`}>
      {value === null ? "—" : `${formatPrice(value)} টাকা`}
    </p>
    {description && (
      <p className="mt-1 text-xs text-slate-500">{description}</p>
    )}
  </div>
);
export default ProductMarketSummury;
