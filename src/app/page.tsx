import Banner from "@/component/homepage/Banner";
import DecreaseProducts from "@/component/homepage/DecreasedProduct";
import IcreaseProducts from "@/component/homepage/IcreaseProduct";
import Products from "@/component/homepage/Products";
import { Suspense } from "react";
import ProductGridSkeleton from "@/component/ProductGridSkeleton";
import PriceTicker from "@/component/PriceTicker";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Suspense  fallback={<ProductGridSkeleton />}>
      <div className="mb-10">

        <IcreaseProducts/>
      </div>
      </Suspense>
      <Suspense  fallback={<ProductGridSkeleton />}>
      <div className="mb-10">

        <DecreaseProducts/>
      </div>
      </Suspense>
      <Suspense  fallback={<ProductGridSkeleton />}>
        <Products/>
      </Suspense>
    <Suspense fallback={"Loading"}>
        <div className="mt-10">
        <PriceTicker/>
      </div>
    </Suspense>
    </div>
  );
}
