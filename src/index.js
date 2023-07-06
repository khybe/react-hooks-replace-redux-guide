import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter component from react-router-dom for client-side routing

import App from "./App";
import configureProductsStore from "./hook-store/products-store";
import "./index.css";

configureProductsStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
