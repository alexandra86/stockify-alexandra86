import HeaderHomePage from "../../components/HeaderHomePage";
import StyledHomePage from "./style";
import Footer from "../../components/Footer";

const HomePage = () => {
  let logo =
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExanN0Y2FpYThraDEyMTNhNzcwNWpsZTg3dWlydnk5djdlZWhtMDl5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o72EXEfAoFRXnzDvG/giphy.gif";
  return (
    <>
      <HeaderHomePage />
      <StyledHomePage>
        <section className="sectionLogoHome">
          <img
            src={logo}
            alt="Gif de pastas de documentos se movimentando."
            className="logo"
          />
        </section>
        <section className="sectionApresentation">
          <p className="words">CONTROLE</p>
          <p className="words">EFICIÊNCIA</p>
          <p className="words">CRESCIMENTO</p>
          <span className="fraseSucess">
            o sucesso do seu estoque começa aqui!
          </span>
        </section>
      </StyledHomePage>
      <Footer />
    </>
  );
};

export default HomePage;
