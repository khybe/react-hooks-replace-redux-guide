import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Importing Provider component from react-redux for integrating Redux with React
import { combineReducers, createStore } from "redux"; // Importing combineReducers and createStore functions from redux for managing application state
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter component from react-router-dom for client-side routing

import "./index.css";
import App from "./App";
import productReducer from "./store/reducers/products"; // Importing the productReducer function from the products.js file inside the reducers folder

const rootReducer = combineReducers({
  shop: productReducer, // Combining reducers using combineReducers, with "shop" as the key and the productReducer as its value
});

const store = createStore(rootReducer); // Creating a Redux store using the rootReducer

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {" "}
    {/* Wrapping the App component with the Provider component to provide the Redux store to all components */}
    <BrowserRouter>
      {" "}
      {/* Wrapping the App component with the BrowserRouter component to enable client-side routing */}
      <App />
    </BrowserRouter>
  </Provider>
);
