
import NotFound from "@/app/not-found";
import Sorting from "@/component/Sorting";
import { Product } from "@/types/product.types";



type CategoryProduct =  Product & {
  category : string
}

const Category = async ({ params }: { params:Promise< { categoryId: string }> }) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/categories/${categoryId}`,
  );

  const data = await res.json();
  console.log(data);

  const productRes = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const productsData:CategoryProduct[] = await productRes.json();
  console.log(productsData);

  const categoryProducts = productsData.filter(
    (product) => product.category === categoryId,
  );

  if(categoryProducts.length === 0) {
    NotFound()
  }
  return (
    <div>
     <div className="mb-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
  {categoryProducts[0] && (
    <>
      <p  className="h-8 w-8 shrink-0 object-contain">{categoryProducts[0].image}</p>
      <div>
        <h2 className="font-bold text-slate-900">
          {categoryProducts[0].categoryNameBn}
        </h2>
        <p className="text-xs text-slate-500">
          {categoryProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
        </p>
      </div>
    </>
  )}
</div>

   


 <Sorting products={categoryProducts}/>
    </div>
  );
};

export default Category;
