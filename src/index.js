import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter component from react-router-dom for client-side routing

import "./index.css";
import App from "./App";
import ProductsProvider from "./context/products-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsProvider>
    {/* Wrapping the App component with the Provider component to provide the Redux store to all components */}
    <BrowserRouter>
      {/* Wrapping the App component with the BrowserRouter component to enable client-side routing */}
      <App />
    </BrowserRouter>
  </ProductsProvider>
);
