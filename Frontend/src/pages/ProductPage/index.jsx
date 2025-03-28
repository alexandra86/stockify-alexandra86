import StyledProductsPageMain from "./style";
import HeaderPages from "../../components/HeaderPages";
import Footer from "../../components/Footer";
import { useContext } from "react";
import AddProductModal from "../../components/AddProductModal";
import GeralContext from "../../contexts/GeralContext";
import ProductCards from "../../components/ProductCards";
import EditProductModal from "../../components/EditProductModal";

const ProductsPage = () => {
  const {
    handleAddProductModal,
    modalIsAddProductOpen,
    products,
    loading,
    modalIsEditProductOpen,
  } = useContext(GeralContext);

  return (
    <>
      {loading && <div>Carregando...</div>}
      <HeaderPages />
      <StyledProductsPageMain>
        <h1 className="tittleProduct">PRODUTOS</h1>
        <button
          onClick={() => handleAddProductModal()}
          className="btAddProduct"
        >
          Cadastrar Produto
        </button>

        {products.length < 1 ? (
          <ul className="areaCards">
            <div className="areaNotProduct">Não há Produtos cadastrados!</div>
          </ul>
        ) : (
          <ul className="areaCards">
            {products.map((elem) => (
              <ProductCards key={elem.id} elem={elem} />
            ))}
          </ul>
        )}
      </StyledProductsPageMain>
      <Footer />
      {modalIsAddProductOpen && <AddProductModal />}
      {modalIsEditProductOpen && <EditProductModal />}
    </>
  );
};

export default ProductsPage;
