import Link from "next/link";

interface Navs {
      id: string;
  slug: string;
  nameBn: string;
  icon: string;
scrapable:boolean
}



const Navlinks = async() => {

    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories')
   
const data: { data: Navs[]} = await res.json();


return (
  <div className="mt-5 flex gap-5">
    {data.map((nav) => (
      <Link key={nav.id} href={`/category/${nav.slug}`}>
       {nav.icon} {nav.nameBn}
      </Link>
    ))}
  </div>
);
};

export default Navlinks;