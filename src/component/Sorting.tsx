'use client'

import { Product } from "@/types/product.types";
import { useState } from "react";
import ProductCard from "./ProductCard";

type SortingProps = {
    products : Product []
}

type SortOption = "default" | "price-asc" | "price-desc"

const Sorting = ({products} : SortingProps) => {
    const [sortBy, setSortBy] = useState<SortOption>("default")

    const sortedProducts = [...products].sort((a,b) => {
        if(sortBy === "price-asc") return a.today - b.today
        if(sortBy === "price-desc") return b.today - a.today
       return 0 
    })




    return (
        <>
        <div className="mb-4 flex justify-end rounded-xl border border-slate-200 bg-white px-4 py-3">
           <label className="flex items-center gap-2 text-sm text-slate-500">
             সাজান
             <select value={sortBy} onChange={(event)=>
                setSortBy(event.target.value as SortOption)
             } className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700">
                 <option value="default">ডিফল্ট</option>
                 <option value="price-asc">দাম: কম থেকে বেশি</option>
                 <option value="price-desc">দাম: বেশি থেকে কম</option>
             </select>
           </label>

        </div>

       <p className="mb-3 mt-3 text-xs text-slate-500">
        মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
      </div>
        </>
    );
};

export default Sorting;