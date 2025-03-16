import { createContext, useState } from "react";

const GeralContext = createContext({});

export default GeralContext;

// eslint-disable-next-line react/prop-types
export const GeralProvider = ({ children }) => {
  const [modalIsAddProductOpen, setIsAddProductOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAddProductModal = () => {
    setIsAddProductOpen(!modalIsAddProductOpen);
  };

  return (
    <GeralContext.Provider
      value={{
        handleAddProductModal,
        modalIsAddProductOpen,
        setIsAddProductOpen,
        loading,
        setLoading,
      }}
    >
      {children}
    </GeralContext.Provider>
  );
};
