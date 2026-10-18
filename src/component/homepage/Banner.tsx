import DateDisplay from "../Date";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="my-10 ">
      <div className="flex flex-col md:flex-row gap-5 justify-between relative border border-base-100 bg-base-200 rounded-2xl px-5 py-7 ">
        <div>
          <h2 className="text-green-700 bg-green-200 w-fit px-2 rounded-2xl">
            <DateDisplay />
          </h2>
          <h2 className="text-2xl font-bold my-5">আজকের বাজারের দাম এক নজরে</h2>
          <p>
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-
            <br />
            সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <a
            href="#all-products"
            className="btn mt-5 rounded-xl bg-green-700 font-semibold text-white"
          >
            সব পণ্য দেখুন
          </a>
        </div>
        <div>
          <Image src={"/bazar-hero.png"} height={300} width={300} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
