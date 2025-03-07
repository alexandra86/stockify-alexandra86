import Footer from "../../components/Footer";
import StyledDashMain from "./style";
import Slider from "react-slick";
import termogenic from "../../Img/termogenic.svg";
import incenso from "../../Img/incenso.png";
import buda from "../../Img/buda.png";
import HeaderDashboardPage from "../../components/HeaderDashboardPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DashBoardPage = () => {
  const images = [`${termogenic}`, `${incenso}`, `${buda}`];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <HeaderDashboardPage />
      <StyledDashMain>
        <div className="areaWelcome">
          <span className="fraseWelcome">
            Olá, seja bem vindo(a)! &#128521;
          </span>
        </div>
        <Slider {...sliderSettings}>
          {images.map((img, index) => (
            <div className="areaSections" key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="slideShow" />
            </div>
          ))}
        </Slider>
      </StyledDashMain>
      <Footer />
    </>
  );
};
export default DashBoardPage;
