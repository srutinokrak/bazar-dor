import CategoryNavItems from "./CategoryNavItems";

interface Navs {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
  scrapable: boolean;
}

const Navlinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );

  if (!res.ok) {
    throw new Error("Categories load করা যায়নি");
  }

  const data: Navs[] = await res.json();

  return <CategoryNavItems items={data} />;
};

export default Navlinks;