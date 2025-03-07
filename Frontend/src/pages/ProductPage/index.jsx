import StyledProductsPageMain from "./style";
import ProductCards from "../../components/ProductCards";
import HeaderPages from "../../components/HeaderPages";
import Footer from "../../components/Footer";

const ProductsPage = () => {
  return (
    <>
      <HeaderPages />
      <StyledProductsPageMain>
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
    </>
  );
};

export default ProductsPage;
