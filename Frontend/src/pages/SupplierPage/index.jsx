import HeaderPages from "../../components/HeaderPages";
import Footer from "../../components/Footer";
import StyledSuplierPageMain from "./style";
import GeralContext from "../../contexts/GeralContext";
import { useContext } from "react";
import AddSupplierModal from "../../components/AddSupplierModal";
import EditSupplierModal from "../../components/EditSupplierModal";

const SupplierPage = () => {
  const {
    modalIsAddSupplierOpen,
    handleAddSupplierModal,
    supplier,
    loading,
    modalIsEditSuppliertOpen,
    setSelectSupplier,
    handleEditSupplierModal,
  } = useContext(GeralContext);

  return (
    <>
      {loading && <div>Carregando...</div>}
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
            {supplier.map((elem) => (
              <tr className="tableLine" key={elem.id}>
                <td className="line">{elem.nameempresa}</td>
                <td className="line">{elem.cnpj}</td>
                <td className="line">{elem.address}</td>
                <td className="line">{elem.telephone}</td>
                <td className="line">{elem.email}</td>
                <td className="line">{elem.contactprincipal}</td>
                <td
                  className="lineEditar"
                  onClick={() => {
                    handleEditSupplierModal();
                    setSelectSupplier(elem);
                  }}
                >
                  &#128221;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </StyledSuplierPageMain>
      <Footer />
      {modalIsAddSupplierOpen && <AddSupplierModal />}
      {modalIsEditSuppliertOpen && <EditSupplierModal />}
    </>
  );
};
export default SupplierPage;
