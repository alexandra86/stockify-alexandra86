import StyledProductsPageMain from "./style";
import ProductCards from "../../components/ProductCards";
import HeaderPages from "../../components/HeaderPages";
import Footer from "../../components/Footer";
import { useContext } from "react";
import AddProductModal from "../../components/AddProductModal";
import GeralContext from "../../contexts/GeralContext";

const ProductsPage = () => {
  const { handleAddProductModal, modalIsAddProductOpen } =
    useContext(GeralContext);
  return (
    <>
      <HeaderPages />
      <StyledProductsPageMain>
        <h1 className="tittleProduct">PRODUTOS</h1>
        <button
          onClick={() => handleAddProductModal()}
          className="btAddProduct"
        >
          Cadastrar Produto
        </button>

        <ul className="areaCards">
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
        </ul>
      </StyledProductsPageMain>
      <Footer />
      {modalIsAddProductOpen && <AddProductModal />}
    </>
  );
};

export default ProductsPage;
