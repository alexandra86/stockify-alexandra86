import Footer from "../../components/Footer";
import HeaderDashboardPage from "../../components/HeaderDashboardPage";
import ProductCards from "../../components/ProductCards";
import StyledDasBoardMain from "./style";

const DashBoardPage = () => {
  return (
    <>
      <HeaderDashboardPage />
      <StyledDasBoardMain>
        <ul className="areaCards">
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
        </ul>
      </StyledDasBoardMain>
      <Footer />
    </>
  );
};

export default DashBoardPage;
