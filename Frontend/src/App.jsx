import { Route, Routes } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoudPage";
import ProductsPage from "./pages/ProductPage";
import SupplierPage from "./pages/SupplierPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/supplier" element={<SupplierPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
