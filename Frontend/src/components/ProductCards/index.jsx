import StyledProductCards from "./style";

const ProductCards = (elem) => {
  return (
    <StyledProductCards key={elem.elem.id}>
      <figure className="areaImgProduct">
        <img
          src={elem.elem.imgproduct}
          alt={elem.elem.description}
          className="imgProduct"
        />
      </figure>
      <div className="areaInfoProduct">
        <span className="infosProduct">
          <strong className="identifaction">Produto: </strong>
          {elem.elem.nameproduct}
        </span>
        <span className="infosProduct">
          <strong className="identifaction">Descrição: </strong>
          {elem.elem.description}
        </span>
        <span className="infosProduct">
          <strong className="identifaction">Quantidade em estoque: </strong>
          {elem.elem.qdestoque}
        </span>
        <span className="infosProduct">
          <strong className="identifaction">Categoria: </strong>
          {elem.elem.category}
        </span>
        <span className="infosProduct">
          <strong className="identifaction">Validade: </strong>
          {elem.elem.datavalidade}
        </span>
        <span className="infosProduct">
          <strong className="identifaction">Código de barras: </strong>
          {elem.elem.codbarras}
        </span>
      </div>
    </StyledProductCards>
  );
};

export default ProductCards;
