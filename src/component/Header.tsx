import Image from "next/image";

import DateDisplay from "./Date";
import Navlinks from "./Navlinks";
import { Suspense } from "react";
import UserInfo from "./UserInfo";
import Link from "next/link";
import PriceTicker from "./PriceTicker";
import TickerOutsideHome from "./TickerOutsideHome";

const Header = () => {
  //      const date = new Date().toLocaleDateString("bn-BD", {
  //     dateStyle: "full",
  //   });

  return (
    <header className="max-w-7xl w-full mx-auto px-4 py-4">
      <div className="relative flex justify-between">
        <div className="flex ">
           <div className="flex gap-2  items-center">
            <div>
              <Image
                className="bg-green-800 border rounded-xl"
                src="/logo-icon.png"
                alt="Bazar-dor"
                height={40}
                width={40}
              />
            </div>
            <div>
              <Link href={"/"}>
                <h2 className="font-bold  text-xl">বাজার দর </h2>
              </Link>
              <div>
                <DateDisplay />
               
              </div>
            </div>
          </div>
        </div>

        <UserInfo />
      </div>

      <Suspense fallback={<div className="mt-5">বিভাগগুলো লোড হচ্ছে...</div>}>
        <Navlinks />
      </Suspense>
     <Suspense fallback={<div className="h-10 border-y border-slate-200" />}>
  <TickerOutsideHome>
    <PriceTicker />
  </TickerOutsideHome>
</Suspense>
    </header>
  );
};

export default Header;
