import React from "react";
import { Route } from "react-router-dom"; // Importing Route component from react-router-dom for defining routes

import Navigation from "./components/Nav/Navigation"; // Importing the Navigation component from the components/Nav/Navigation.js file
import ProductsPage from "./containers/Products"; // Importing the ProductsPage component from the containers/Products.js file
import FavoritesPage from "./containers/Favorites"; // Importing the FavoritesPage component from the containers/Favorites.js file

const App = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/favorites" component={FavoritesPage} />
      </main>
    </React.Fragment>
  );
};

export default App;
