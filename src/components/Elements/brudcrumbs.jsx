import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className="bg-gray-300 py-6 px-6 md:px-10 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>

      <div className="text-sm text-gray-500 flex items-center gap-2">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>

        <span>›</span>

        <span className="text-blue-600 font-medium">{title}</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
