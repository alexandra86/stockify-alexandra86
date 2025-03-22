import { useContext } from "react";
import StyledProductCards from "./style";
import GeralContext from "../../contexts/GeralContext";
import naoDisponivel from "../../Img/naoDisponivel.jpg";

const ProductCards = (elem) => {
  const { handleEditProductModal, setSelectProduct } = useContext(GeralContext);

  return (
    <StyledProductCards key={elem.elem.id}>
      <div className="areaImageAndBtEdit">
        {elem.elem.imgproduct == "" && (
          <figure className="areaImgProduct">
            <img src={naoDisponivel} className="imgProduct" />
          </figure>
        )}

        <figure className="areaImgProduct">
          <img src={elem.elem.imgproduct} className="imgProduct" />
        </figure>
        <button
          className="btEditar"
          onClick={() => {
            handleEditProductModal();
            setSelectProduct(elem.elem);
          }}
        >
          Editar
        </button>
      </div>
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
