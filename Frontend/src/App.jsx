import { Route, Routes } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoudPage";
import ProductsPage from "./pages/ProductPage";
import { GeralProvider } from "./contexts/GeralContext.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
      <Route
        path="/products"
        element={
          <GeralProvider>
            <ProductsPage />
          </GeralProvider>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
