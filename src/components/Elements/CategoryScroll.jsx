import { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const CategoryScroll = () => {
  const { categories } = useContext(AppContext);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-10 py-10 bg-white relative">
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center"
      >
        ‹
      </button>

      <div ref={scrollRef} className="flex gap-10 overflow-hidden">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => navigate("/products")}
            className="text-center min-w-[120px] cursor-pointer hover:scale-105 transition"
          >
            <div className="bg-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-14 h-14 object-contain"
              />
            </div>

            <h3 className="mt-3 font-semibold text-gray-700">{cat.name}</h3>

            <p className="text-gray-400 text-sm">{cat.products} Products</p>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
};

export default CategoryScroll;
