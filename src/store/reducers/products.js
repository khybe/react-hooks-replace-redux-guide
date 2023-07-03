import { TOGGLE_FAV } from "../actions/products"; // Importing the TOGGLE_FAV action type from the products.js file inside the actions folder

// Initial state object with an array of products
const initialState = {
  products: [
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
  ],
};

// Defining a productReducer function that takes the state and action as parameters
const productReducer = (state = initialState, action) => {
  // Using a switch statement to handle different action types
  switch (action.type) {
    case TOGGLE_FAV: // Handling the TOGGLE_FAV action type
      const prodIndex = state.products.findIndex(
        (p) => p.id === action.productId // Finding the index of the product with the matching productId
      );
      const newFavStatus = !state.products[prodIndex].isFavorite; // Toggling the isFavorite status of the product
      const updatedProducts = [...state.products]; // Creating a copy of the products array
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex], // Creating a copy of the product object
        isFavorite: newFavStatus, // Updating the isFavorite property with the new status
      };
      return {
        ...state,
        products: updatedProducts, // Returning the updated state with the modified products array
      };
    default: // Handling the default case when no matching action type is found
      return state; // Returning the current state as is
  }
};

export default productReducer;
