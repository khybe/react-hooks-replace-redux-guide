import { useState, useEffect } from "react";

// Create a global state object
let globalState = {};

// Create an array to store listeners
let listeners = [];

// Create an object to store actions
let actions = {};

// Custom hook named useStore
const useStore = () => {
  // Retrieve the state and setState function from the global state using useState hook
  const setState = useState(globalState)[1];

  // Add the setState function to the listeners array when the component mounts
  useEffect(() => {
    listeners.push(setState);

    // Remove the setState function from the listeners array when the component unmounts
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);
};
