import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./styles/styleGlobal.js";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { GeralProvider } from "./contexts/GeralContext.jsx";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GeralProvider>
        <GlobalStyle />
        <App />
      </GeralProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  </StrictMode>
);
