import HeaderPages from "../../components/HeaderPages";
import Footer from "../../components/Footer";
import StyledSuplierPageMain from "./style";

const SupplierPage = () => {
  return (
    <>
      <HeaderPages />
      <StyledSuplierPageMain>
        <button className="btAddSupplier">Cadastrar Fornecedor</button>
      </StyledSuplierPageMain>
      <Footer />
    </>
  );
};
export default SupplierPage;
