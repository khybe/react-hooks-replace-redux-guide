import React from "react";

import Card from "../UI/Card"; // Importing the Card component from the UI/Card.js file
import "./ProductItem.css";
// import { toggleFav } from "../../store/actions/products"; // Importing the toggleFav action creator from the actions/products.js file

const ProductItem = (props) => {
  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id)); // Dispatching the toggleFav action with the product id as the payload
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
