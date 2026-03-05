import { Routes, Route } from "react-router-dom";
import PageRenderer from "../pages/PageRenderer";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PageRenderer pageKey="home" />} />
      <Route path="/products" element={<PageRenderer pageKey="products" />} />
      <Route path="/profile" element={<PageRenderer pageKey="profile" />} />
    </Routes>
  );
};

export default AppRouter;