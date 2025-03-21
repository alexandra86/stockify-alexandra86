import HeaderPages from "../../components/HeaderPages";
import Footer from "../../components/Footer";
import StyledSuplierPageMain from "./style";
import GeralContext from "../../contexts/GeralContext";
import { useContext } from "react";
import AddSupplierModal from "../../components/AddSupplierModal";

const SupplierPage = () => {
  const { modalIsAddSupplierOpen, handleAddSupplierModal } =
    useContext(GeralContext);

  return (
    <>
      <HeaderPages />
      <StyledSuplierPageMain>
        <h1 className="tittleSupplier">FORNECEDORES</h1>
        <div className="areaSupplierButton">
          <button
            className="btAddSupplier"
            onClick={() => handleAddSupplierModal()}
          >
            Cadastrar Fornecedor
          </button>
        </div>

        <table className="tableSupplier">
          <thead className="tableHead">
            <tr className="tableColumn">
              <th className="columns">Nome da Empresa</th>
              <th className="columns">CNPJ</th>
              <th className="columns">Endereço</th>
              <th className="columns">Telefone</th>
              <th className="columns">Email</th>
              <th className="columns">Contato Principal</th>
              <th className="columnsEditar">Editar</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            <tr className="tableLine">
              <td className="line">Casa da Vida LTDA</td>
              <td className="line">34102141000156</td>
              <td className="line">Rua da Vida, nº 38</td>
              <td className="line">(21)9854-2533</td>
              <td className="line">casadavida@casadavida.com.br</td>
              <td className="line">Ana</td>
              <td className="lineEditar">&#128221;</td>
            </tr>
          </tbody>
        </table>
      </StyledSuplierPageMain>
      <Footer />
      {modalIsAddSupplierOpen && <AddSupplierModal />}
    </>
  );
};
export default SupplierPage;
