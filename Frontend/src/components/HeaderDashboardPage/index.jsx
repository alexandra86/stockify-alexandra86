import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import StyledHeaderDashboardPage from "./style";

const HeaderDashboardPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const goHomeClick = () => {
    navigate("/");
  };

  return (
    <StyledHeaderDashboardPage>
      <div className="areaMenu">
        <h1 className="logoDashPage">Stockify</h1>

        <button className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>

        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <Link to="" className="links">
            Fornecedores
          </Link>
          <Link to="" className="links">
            Produtos
          </Link>
          <Link to="" className="links">
            Controle do Estoque
          </Link>

          <button type="button" className="btSair mobile" onClick={goHomeClick}>
            Sair
          </button>
        </nav>

        <button type="button" className="btSair desktop" onClick={goHomeClick}>
          Sair
        </button>
      </div>
    </StyledHeaderDashboardPage>
  );
};

export default HeaderDashboardPage;
