import Link from "next/link";

interface Navs {
      id: string;
  slug: string;
  nameBn: string;
  icon: string;
scrapable:boolean
}

//  slug: '/bengali',
//         title: 'মূলপাতা',
//         topicId: null,
//         url: 'https://www.bbc.com/bengali',
//         scrapable: false

const Navlinks = async() => {

    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories')
   
const data: { data: Navs[] } = await res.json();
// console.log(data);
// const filteredNavs = data.filter(nav => nav.scrapable);
// console.log(filteredNavs);

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