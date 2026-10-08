import Link from "next/link";


const Navlinks = async() => {

    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const data = await res.json()
    const navs = data.data
    const filteredNevs = navs.filter(n => n.scrapable)
    console.log(navs);
    return (
        <div>
            <Link></Link>
            {filteredNevs.map((n,i)=> <Link >
            {n.title}</Link>)}
        </div>
    );
};

export default Navlinks;