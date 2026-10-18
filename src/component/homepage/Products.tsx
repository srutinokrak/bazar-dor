
import { Product } from "@/types/product.types";
import ProductCard from "../ProductCard";

const getProducts = async ():Promise<Product[]> => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/products",
    );
    const data = await res.json();
    console.log("from productpage", data);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
const Products = async () => {
  const productsData = await getProducts();
  console.log(productsData);
  return (
    <div id="all-products" className="scroll-mt-6">
      <h2 className="text-2xl font-bold mb-3">সব পণ্য</h2>
      <p className="text-gray-500 mb-2" >মোট {new Intl.NumberFormat("bn-BD").format(productsData.length)}টি পণ্য দেখানো হচ্ছে</p>
      <div  className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-3 ">
        {productsData.map((product, ind) => {
        return <ProductCard key={ind} product={product} />;
      })}
      </div>
    </div>
  );
};

export default Products;
