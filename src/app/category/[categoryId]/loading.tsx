
import ProductGridSkeleton from "@/component/ProductGridSkeleton";

const Loading = () => {
  return (
    <div aria-busy="true">
      <div className="skeleton mb-5 h-16 w-full rounded-xl" />
      <ProductGridSkeleton />
    </div>
  );
};

export default Loading;