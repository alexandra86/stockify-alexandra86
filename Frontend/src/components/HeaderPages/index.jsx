import { useNavigate } from "react-router-dom";
import StyledHeaderPages from "./style";

const HeaderPages = () => {
  const navigate = useNavigate();

  const goDashClick = () => {
    navigate("/dashboard");
  };

  return (
    <StyledHeaderPages>
      <div className="areaHeader">
        <h1 className="logoHeaderPages">Stockify</h1>

        <button type="button" className="btVoltar" onClick={goDashClick}>
          Voltar
        </button>
      </div>
    </StyledHeaderPages>
  );
};

export default HeaderPages;
