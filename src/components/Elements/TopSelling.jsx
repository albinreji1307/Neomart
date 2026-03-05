import { useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";

const TopSellingProducts = () => {
  const { categories } = useContext(AppContext);
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const products = categories.slice(0, 6);

  return (
    <div className="px-4 md:px-10 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Top Selling Products</h2>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 cursor-pointer">
            View All Products
          </span>

          <button
            onClick={scrollLeft}
            className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100"
          >
            ‹
          </button>

          <button
            onClick={scrollRight}
            className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        <div className="min-w-[300px] bg-blue-200 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold">Fresh Grocery Deals</h3>

            <p className="text-blue-700 font-semibold">Get 35% off</p>

            <button className="mt-4 bg-white px-5 py-2 rounded-full text-sm">
              Shop Now 🛒
            </button>
          </div>

          <img
            src="https://pngimg.com/uploads/cocacola/coca_cola_PNG8915.png"
            className="mt-6"
          />
        </div>

        {products.map((product, index) => (
          <div
            key={product.id}
            className="min-w-[200px] bg-white border rounded-xl p-4"
          >
            {index === 0 && (
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                Best Sale
              </span>
            )}

            {index === 2 && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                Sale 50%
              </span>
            )}

            <div className="flex justify-center my-4">
              <img src={product.img} className="w-20 h-20 object-contain" />
            </div>

            <p className="text-sm text-gray-500">⭐ 4.8 (17k)</p>

            <h3 className="text-sm font-semibold mt-2">{product.name}</h3>

            <p className="text-xs text-gray-400">By Lucky Supermarket</p>

            <div className="mt-3">
              <div className="bg-gray-200 h-2 rounded">
                <div className="bg-blue-500 h-2 w-[60%] rounded"></div>
              </div>

              <p className="text-xs mt-1 text-gray-500">Sold: 18/35</p>
            </div>

            <div className="mt-3">
              <span className="text-gray-400 line-through mr-2">$28.99</span>

              <span className="font-semibold text-gray-800">
                ${product.price} /Qty
              </span>
            </div>

            <button className="mt-4 w-full bg-gray-100 py-2 rounded-full text-sm hover:bg-gray-200">
              Add To Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
