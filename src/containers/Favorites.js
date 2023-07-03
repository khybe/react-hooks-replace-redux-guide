import React from "react";
import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux for accessing state from the Redux store

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

const Favorites = (props) => {
  // Accessing the favorite products from the Redux store by filtering the products based on isFavorite property
  const favoriteProducts = useSelector((state) =>
    state.shop.products.filter((p) => p.isFavorite)
  );

  let content = <p className="placeholder">Got no favorites yet!</p>;

  // Checking if there are favorite products
  if (favoriteProducts.length > 0) {
    // Rendering the list of favorite products
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }

  return content;
};

export default Favorites;
