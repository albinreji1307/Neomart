import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const PromoCards = () => {
  const { promoCards } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {promoCards.map((card) => (
        <div
          key={card.id}
          className="bg-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              {card.title}
            </h2>

            <p className="text-red-500 mb-4">Starting at {card.price}</p>

            <button
              onClick={() => navigate("/products")}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Shop Now →
            </button>
          </div>

          <img
            src={card.img}
            alt={card.title}
            className="w-20 md:w-28 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default PromoCards;
