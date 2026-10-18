import { ProductDetails } from "@/component/ProductDetails";
import { Suspense } from "react";

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
   
  return (
   <Suspense
    fallback={
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        পণ্যের তথ্য লোড হচ্ছে...
      </div>
    }
  >
    <ProductDetails params={params} />
  </Suspense>
  );
};

export default ProductDetailsPage;
