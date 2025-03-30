import React from "react";
import ReactDom from "react-dom/client";
import App from './App.jsx'
import './index.css'
import StoreContextProvider from "./context/storeContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
