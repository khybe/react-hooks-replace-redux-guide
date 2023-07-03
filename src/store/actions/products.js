export const TOGGLE_FAV = "TOGGLE_FAV"; // Exporting a constant variable named TOGGLE_FAV with the value 'TOGGLE_FAV'

export const toggleFav = (id) => {
  return { type: TOGGLE_FAV, productId: id }; // Defining a function named toggleFav that takes an id parameter and returns an object with a type property set to TOGGLE_FAV and a productId property set to the provided id
};
