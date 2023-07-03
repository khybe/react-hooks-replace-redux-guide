import React from "react";
import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux for accessing state from the Redux store

import ProductItem from "../components/Products/ProductItem"; // Importing the ProductItem component from the components/Products/ProductItem.js file
import "./Products.css";

const Products = (props) => {
  // Accessing the products array from the Redux store using useSelector hook
  const productList = useSelector((state) => state.shop.products);
  return (
    <ul className="products-list">
      {productList.map((prod) => (
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
