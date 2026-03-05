import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const DailyBestSells = () => {
  const { categories } = useContext(AppContext);

  const products = categories.slice(0, 4);

  return (
    <div className="px-4 md:px-10 py-12 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8">Daily Best Sells</h2>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-xl p-4 relative hover:shadow-md transition"
            >
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Sale 50%
              </span>

              <div className="flex justify-center mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-30 h-24 object-contain"
                />
              </div>

              <div className="text-sm text-gray-400 line-through">$28.99</div>

              <div className="text-lg font-semibold text-gray-800">
                ${product.price} /Qty
              </div>

              <div className="text-sm text-yellow-500 mt-1">⭐ 4.8 (17k)</div>

              <h3 className="font-semibold mt-2 text-gray-700">
                {product.name}
              </h3>

              <p className="text-xs text-gray-400">By Lucky Supermarket</p>

              <div className="mt-3">
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-blue-500 h-2 rounded w-[60%]"></div>
                </div>

                <p className="text-xs mt-1 text-gray-500">Sold: 18/35</p>
              </div>

              <div className="flex gap-2 text-xs text-gray-500 mt-3">
                <span className="bg-gray-100 px-2 py-1 rounded">607 Days</span>

                <span className="bg-gray-100 px-2 py-1 rounded">9 Hours</span>

                <span className="bg-gray-100 px-2 py-1 rounded">38 Min</span>

                <span className="bg-gray-100 px-2 py-1 rounded">29 Sec</span>
              </div>

              <button className="w-full mt-4 bg-blue-100 text-blue-600 py-2 rounded-full hover:bg-blue-200">
                Add To Cart 🛒
              </button>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-blue-100 to-yellow-50 flex flex-col justify-between min-h-[350px]">
          <div className="z-10">
            <span className="text-xs bg-white px-3 py-1 rounded-full shadow">
              Nature Food
            </span>

            <h2 className="text-3xl font-bold mt-4 text-gray-800 leading-snug">
              $5 off your first order
            </h2>

            <p className="text-sm text-gray-500 mt-2">Delivery by 6:15am</p>

            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-green-100 transition">
              Shop Now →
            </button>
          </div>

          <img
            src="https://pngimg.com/uploads/potato_chips/potato_chips_PNG40.png"
            className="absolute bottom-0 right-0 w-90 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DailyBestSells;
