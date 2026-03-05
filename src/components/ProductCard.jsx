import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Breadcrumb from "./Elements/brudcrumbs";

const ProductCard = () => {

  const { categories } = useContext(AppContext);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(200);

  let filteredProducts = categories.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );


  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (item) => item.title === selectedCategory
    );
  }


  filteredProducts = filteredProducts.filter(
    (item) => Number(item.price) <= Number(maxPrice)
  );


  if (sort === "az") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === "za") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("");
    setSort("default");
    setMaxPrice(200);
  };

  return (
    <>
     <Breadcrumb title="Product Shop" />
    <div className="flex h-[80vh] gap-6 p-4 md:p-6">

 
      <div className="w-[250px] bg-white border rounded p-4 sticky top-20 h-fit">

        <h2 className="font-semibold mb-4 text-lg">
          Product Category
        </h2>

        {[...new Set(categories.map((cat) => cat.title))].map((title) => (
          <p
            key={title}
            onClick={() => setSelectedCategory(title)}
            className="cursor-pointer mb-2 hover:text-blue-600"
          >
            {title}
          </p>
        ))}

      
        <div className="mt-6">

          <h3 className="font-semibold mb-2">
            Filter by Price
          </h3>

          <input
            type="range"
            min="0"
            max="200"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full"
          />

          <p className="text-sm mt-2">
            Max Price: ${maxPrice}
          </p>

        </div>

      </div>

 
      <div className="flex-1 flex flex-col">


        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sticky top-20 bg-white z-10 pb-3">

       
          <input
            type="text"
            value={search}
            placeholder="Search product..."
            className="border px-4 py-2 rounded w-[250px]"
            onChange={(e) => setSearch(e.target.value)}
          />

        
          <div className="flex gap-3">

            <select
              className="border px-3 py-2 rounded"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Sort</option>
              <option value="az">A → Z</option>
              <option value="za">Z → A</option>
            </select>

            <button
              onClick={resetFilters}
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Reset
            </button>

          </div>

        </div>


        <div className="overflow-y-auto pr-2">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                onClick={() => navigate("/profile")}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col items-center text-center cursor-pointer"
              >

          
                <div className=" rounded-full w-24 h-24 flex items-center justify-center mb-4">

                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-14 h-14 object-contain"
                  />

                </div>

       
                <h3 className="font-semibold text-gray-700">
                  {product.name}
                </h3>

         
                <p className="text-red-500 font-semibold">
                  ${product.price}
                </p>

             

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("Added to cart");
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  Add To Cart
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
    </>
  );
};

export default ProductCard;