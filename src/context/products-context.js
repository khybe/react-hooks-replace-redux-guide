// Importing the necessary modules and functions from the "react" library.
import React, { useState } from "react";

// Creating a new context object named "ProductsContext" with an initial value of an empty array and exporting it.
export const ProductsContext = React.createContext({
  products: [],
});

// Defining a functional component named "ProductsProvider" which takes in props as a parameter.
const ProductsProvider = (props) => {
  // Using the useState hook to declare a state variable named "productsList" and its setter function "setProductsList".
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  // Returning the JSX code to provide the "productsList" value to the context and render its children.
  return (
    <ProductsContext.Provider value={{ products: productsList }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

// Exporting the "ProductsProvider" component as the default export of this module.
export default ProductsProvider;
