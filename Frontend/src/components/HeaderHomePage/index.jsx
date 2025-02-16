import { useState } from "react";
import StyledHeaderHomePage from "./style";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const HeaderHomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledHeaderHomePage>
      <div className="areaMenu">
        <h1 className="logoHomePage">Stockify</h1>

        <button className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>

        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <Link to="" className="links">
            Inventário
          </Link>
          <Link to="" className="links">
            Estoque
          </Link>
          <Link to="" className="links">
            Cadeia de Suprimentos
          </Link>

          <button type="button" className="btEntrar mobile">
            Entrar
          </button>
        </nav>

        <button type="button" className="btEntrar desktop">
          Entrar
        </button>
      </div>
    </StyledHeaderHomePage>
  );
};

export default HeaderHomePage;
