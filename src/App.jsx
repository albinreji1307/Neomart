import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import Spinner from "./components/Elements/Spinner";

import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Elements/ScrollToTop";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <Navbar />
      <AppRouter />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
