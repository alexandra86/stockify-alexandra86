import { createContext, useState } from "react";

const GeralContext = createContext({});

export default GeralContext;

// eslint-disable-next-line react/prop-types
export const GeralProvider = ({ children }) => {
  const [modalIsAddProductOpen, setIsAddProductOpen] = useState(false);
  const [modalIsAddSupplierOpen, setIsAddSupplierOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tipeDocument, setTipeDocument] = useState("");

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
      }}
    >
      {children}
    </GeralContext.Provider>
  );
};
