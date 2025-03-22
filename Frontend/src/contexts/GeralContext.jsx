import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/axiosService";

const GeralContext = createContext({});

export default GeralContext;

// eslint-disable-next-line react/prop-types
export const GeralProvider = ({ children }) => {
  const [modalIsAddProductOpen, setIsAddProductOpen] = useState(false);
  const [modalIsAddSupplierOpen, setIsAddSupplierOpen] = useState(false);
  const [modalIsEditProductOpen, setIsEditProductOpen] = useState(false);
  const [modalIsEditSuppliertOpen, setIsEditSupplierOpen] = useState(false);
  const [tipeDocument, setTipeDocument] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [selectProduct, setSelectProduct] = useState(null);
  const [selectSupplier, setSelectSupplier] = useState(null);

  const handleAddProductModal = () => {
    setIsAddProductOpen(!modalIsAddProductOpen);
  };

  const handleEditProductModal = () => {
    setIsEditProductOpen(!modalIsEditProductOpen);
  };

  const handleAddSupplierModal = () => {
    setIsAddSupplierOpen(!modalIsAddSupplierOpen);
  };
  const handleEditSupplierModal = () => {
    setIsEditSupplierOpen(!modalIsEditSuppliertOpen);
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

  const handlePhoneMask = (event) => {
    let value = event.target.value.replace(/\D/g, "");

    if (value.length > 10) {
      value = value.slice(0, 10);
    }

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(
        6,
        10
      )}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    event.target.value = value;
  };

  const createProduct = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/products", data);

      const productId = response.data.id;
      localStorage.setItem("@PRODUCTID", productId);

      toast.success("Produto criado com sucesso!");
      await searchProducts();
    } catch (error) {
      toast.error("Algo deu errado!");
      console.log(error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  const editProduct = async (data) => {
    try {
      setLoading(true);

      const productId = localStorage.getItem("@PRODUCTID");

      await api.put(`/products/${productId}`, data);

      setIsEditProductOpen(false);
      toast.success("Produto alterado com sucesso!");
      await searchProducts();
    } catch (error) {
      toast.error("Algo deu errado!");
      console.log(error);
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

  const createSupplier = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/supplier", data);

      const supplierId = response.data.id;
      localStorage.setItem("@SUPPLIERID", supplierId);

      toast.success("Fornecedor criado com sucesso!");
      await searchSuppliers();
    } catch (error) {
      toast.error("Algo deu errado!");
      console.log(error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  const editSupplier = async (data) => {
    try {
      setLoading(true);

      const supplierId = localStorage.getItem("@SUPPLIERID");

      await api.put(`/supplier/${supplierId}`, data);

      setIsEditSupplierOpen(false);
      toast.success("Produto alterado com sucesso!");
      await searchSuppliers();
    } catch (error) {
      toast.error("Algo deu errado!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const searchSuppliers = async () => {
    try {
      setLoading(true);
      const response = await api.get("/supplier");
      setSupplier(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchProducts();
    searchSuppliers();
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
        supplier,
        setSupplier,
        searchSuppliers,
        handlePhoneMask,
        createSupplier,
        handleEditProductModal,
        modalIsEditProductOpen,
        setIsEditProductOpen,
        selectProduct,
        setSelectProduct,
        editProduct,
        modalIsEditSuppliertOpen,
        setIsEditSupplierOpen,
        editSupplier,
        selectSupplier,
        setSelectSupplier,
        handleEditSupplierModal,
      }}
    >
      {children}
    </GeralContext.Provider>
  );
};
