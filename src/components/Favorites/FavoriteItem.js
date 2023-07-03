import React from "react"; // Importing React library for building UI components

import Card from "../UI/Card"; // Importing the Card component from the UI/Card.js file
import "./FavoriteItem.css"; // Importing CSS styles from FavoriteItem.css file

const FavoriteItem = (props) => {
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="favorite-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default FavoriteItem; // Exporting the FavoriteItem component as the default export
