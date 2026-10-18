const ProductGridSkeleton = () => {
  return (
    <div
      role="status"
      aria-label="পণ্য লোড হচ্ছে"
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
    >
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          aria-hidden="true"
          className="rounded-xl border border-slate-200 bg-white p-4"
        >
          <div className="skeleton h-36 w-full" />
          <div className="skeleton mt-4 h-4 w-3/4" />
          <div className="skeleton mt-3 h-4 w-1/2" />
          <div className="skeleton mt-5 h-8 w-1/3" />
        </div>
      ))}
    </div>
  );
};

export default ProductGridSkeleton;