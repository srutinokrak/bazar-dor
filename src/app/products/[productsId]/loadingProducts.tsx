

const Loading = () => {
  return (
    <div aria-busy="true" className="space-y-5">
      <div className="skeleton h-5 w-48" />
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="flex gap-4">
          <div className="skeleton h-24 w-24 shrink-0 rounded-xl" />
          <div className="flex-1 space-y-3">
            <div className="skeleton h-6 w-1/2" />
            <div className="skeleton h-4 w-1/3" />
            <div className="skeleton h-4 w-2/3" />
          </div>
        </div>
      </div>
      <div className="skeleton h-40 w-full rounded-xl" />
    </div>
  );
};

export default Loading;