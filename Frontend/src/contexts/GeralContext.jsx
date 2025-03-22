import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/axiosService";

const GeralContext = createContext({});

export default GeralContext;

// eslint-disable-next-line react/prop-types
export const GeralProvider = ({ children }) => {
  const [modalIsAddProductOpen, setIsAddProductOpen] = useState(false);
  const [modalIsAddSupplierOpen, setIsAddSupplierOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tipeDocument, setTipeDocument] = useState("");
  const [products, setProducts] = useState([]);

  const handleAddProductModal = () => {
    setIsAddProductOpen(!modalIsAddProductOpen);
  };

  const handleAddSupplierModal = () => {
    setIsAddSupplierOpen(!modalIsAddSupplierOpen);
  };

  const handleDateMask = (event) => {
    let value = event.target.value.replace(/\D/g, "");

    if (value.length > 8) {
      value = value.slice(0, 8);
    }

    if (value.length > 4) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
    } else if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    event.target.value = value;
  };

  const handleCodBarrasMask = (event) => {
    let codeBar = event.target.codeBar;

    if (codeBar.length > 14) {
      codeBar = codeBar.slice(0, 14);
    }

    event.target.codeBar = codeBar;
  };

  const createProduct = async (data) => {
    try {
      setLoading(true);
      const formattedData = {
        ...data,
      };

      console.log("Dados enviados para a API:", formattedData);

      await api.post("/products", formattedData);

      toast.success("Produto criado com sucesso!");
      await searchProducts();
      setLoading(false);
    } catch (error) {
      toast.error("Algo deu errado!");
      console.log(error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  const searchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchProducts();
  }, []);

  return (
    <GeralContext.Provider
      value={{
        handleAddProductModal,
        modalIsAddProductOpen,
        setIsAddProductOpen,
        loading,
        setLoading,
        handleDateMask,
        handleCodBarrasMask,
        modalIsAddSupplierOpen,
        setIsAddSupplierOpen,
        handleAddSupplierModal,
        tipeDocument,
        setTipeDocument,
        createProduct,
        products,
        setProducts,
      }}
    >
      {children}
    </GeralContext.Provider>
  );
};
