import React from "react";

import ProductItem from "../components/Products/ProductItem"; // Importing the ProductItem component from the components/Products/ProductItem.js file
import { useStore } from "../hook-store/store";
import "./Products.css";

const Products = (props) => {
  const state = useStore()[0];

  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
