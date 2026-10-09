


import Image from "next/image";

import DateDisplay from "./Date";
import Navlinks from "./Navlinks";
import { Suspense } from "react";



const Header = () => {

//      const date = new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//   });

 
    return (
      <header className="max-w-7xl w-full mx-auto px-4 py-4">
           <div className="relative flex justify-between ">
           <div className="flex gap-2">
             <Image className="bg-green-800 border rounded-xl"
               src="/logo-icon.png"
               alt="Bazar-dor"
               height={40}
               width={40}
            
            />
            <div>
                <h2 className="font-bold  text-xl">বাজার দর</h2>
          <DateDisplay/>
            </div>
           </div>

           <div className="flex gap-3">
              <button className="btn">সাইন ইন</button>
              <button className="btn bg-green-800 text-white">সাইন আপ</button>
           </div>
        </div>
  

<Suspense fallback={<div className="mt-5">বিভাগগুলো লোড হচ্ছে...</div>}>
  <Navlinks />
</Suspense>
      </header>
    );
};

export default Header;