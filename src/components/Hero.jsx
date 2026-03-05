import { useState, useEffect } from "react";
import CategoryScroll from "./Elements/CategoryScroll";
import Newsletter from "./Elements/NewsLetter";
import PromoCards from "./Elements/PromoCards";
import Spinner from "./Elements/Spinner";
import DailyBestSells from "./Elements/DailyBesteller";
import TopSellingProducts from "./Elements/TopSelling";

const Hero = ({ subtitle, title, price }) => {
  const images = [
    "https://pngimg.com/uploads/black_pepper/black_pepper_PNG3.png",
    "https://pngimg.com/uploads/banana/banana_PNG104243.png",
    "https://pngimg.com/uploads/peanut/peanut_PNG55.png",
    "https://pngimg.com/uploads/coconut/coconut_PNG108883.png",
    "https://pngimg.com/uploads/asparagus/asparagus_PNG4.png",
    "https://pngimg.com/uploads/carrot/carrot_PNG4985.png",
     "https://pngimg.com/uploads/coffee_beans/coffee_beans_PNG97303.png",
     "https://pngimg.com/uploads/cabbage/cabbage_PNG99122.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 md:px-10 mt-6">
      <div className="bg-blue-100 rounded-3xl flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8">
        <div className="max-w-xl text-center md:text-left">
          <p className="text-green-600 font-semibold mb-4 text-sm md:text-base">
            {subtitle}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            {title}
          </h1>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Explore Shop
            </button>

            <p className="text-red-400">Starting at {price}</p>
          </div>
        </div>

        <div className="relative w-[230px] md:w-[350px] h-[220px] md:h-[350px]">
          <img
            src={images[index]}
            alt="product"
            className="absolute w-full h-full object-contain transition-opacity duration-1000 opacity-100"
          />
        </div>
      </div>

      <CategoryScroll />
      <PromoCards />
      <DailyBestSells />
      <TopSellingProducts />
      <Newsletter />
    </div>
  );
};

export default Hero;
