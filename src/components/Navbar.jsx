import { NavLink, useNavigate } from "react-router-dom";
import { useConfig } from "../hooks/useConfig";
import { useState } from "react";
import TopBar from "./Elements/TopBar";

const Navbar = () => {
  const config = useConfig();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/products?search=${search}`);
      setSearch("");
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <TopBar />

      <div className="shadow-sm px-4 md:px-10 py-4 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
            🛒
          </div>

          <h1 className="text-xl font-bold text-gray-700">
            NEO<span className="text-xl font-bold text-blue-700">MART</span>
          </h1>
        </div>

        <form
          onSubmit={handleSearch}
          className="flex-1 max-w-[500px] border rounded-lg overflow-hidden flex"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="flex-1 px-3 py-2 outline-none"
          />

          <button className="px-4 text-blue-600">🔍</button>
        </form>

        <div className="ml-auto">
          <span className="bg-blue-100 px-4 py-2 rounded-full">Cart 🛒</span>
        </div>
      </div>

      <nav className="flex gap-6 md:gap-8 px-4 md:px-10 py-3 bg-gray-100 overflow-x-auto">
        {Object.values(config.pages).map((page) => (
          <NavLink
            key={page.path}
            to={page.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-700"
            }
          >
            {page.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
