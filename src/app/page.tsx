import Banner from "@/component/homepage/Banner";
import DecreaseProducts from "@/component/homepage/DecreasedProduct";
import IcreaseProducts from "@/component/homepage/IcreaseProduct";
import Products from "@/component/homepage/Products";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Suspense  fallback={<p>Loadiing...</p>}>
      <div className="mb-10">

        <IcreaseProducts/>
      </div>
      </Suspense>
      <Suspense  fallback={<p>Loadiing...</p>}>
      <div className="mb-10">

        <DecreaseProducts/>
      </div>
      </Suspense>
      <Suspense  fallback={<p>Loadiing...</p>}>
        <Products/>
      </Suspense>
    </div>
  );
}
