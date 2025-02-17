import { useNavigate } from "react-router-dom";
import sadEmotion from "../../img/fundo.jpg";
import { StyledNotFound } from "./style";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHomeClick = () => {
    navigate("/");
  };
  return (
    <StyledNotFound>
      <button onClick={goHomeClick} className="btComeBack">
        Voltar
      </button>
      <img
        src={sadEmotion}
        alt="imagem de página não encontrada"
        className="imgError"
      />
    </StyledNotFound>
  );
};

export default NotFoundPage;
