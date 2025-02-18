import StyledProductCards from "./style";
import termogenic from "../../Img/termogenic.svg";

const ProductCards = () => {
  return (
    <StyledProductCards>
      <figure className="areaImgProduct">
        <img
          src={termogenic}
          alt="imagem de um termogênico em cápsulas"
          className="imgProduct"
        />
      </figure>
      <div className="areaInfoProduct">
        <span className="infosProduct">
          <strong className="identifaction">Produto: </strong>
          Terrmogênico 60 Cápsulas
        </span>
        <span className="infosProduct">
          <strong className="identifaction">Fornecedor: </strong>
          Masterway Suplementos
        </span>
        <span className="infosProduct">
          <strong className="identifaction">Descrição: </strong>
          Suplemento Alimentar de cafeína com picolinato de cromo em cápsulas.
        </span>
        <span className="infosProduct">
          <strong className="identifaction">Quantidade em estoque: </strong>
          10 unidades
        </span>
        <span className="infosProduct">
          <strong className="identifaction">Categoria: </strong>
          Suplementos
        </span>
        <span className="infosProduct">
          <strong className="identifaction">Validade: </strong>
          23/12/2027
        </span>
        <span className="infosProduct">
          <strong className="identifaction">Código de barras: </strong>
          789456123789
        </span>
      </div>
    </StyledProductCards>
  );
};

export default ProductCards;
