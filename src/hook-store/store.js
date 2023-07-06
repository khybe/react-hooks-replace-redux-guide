import { useState, useEffect } from "react"; // Importing the useState and useEffect functions from the "react" library

let globalState = {}; // Creating a global state object
let listeners = []; // Creating an array to store listeners
let actions = {}; // Creating an object to store actions

export const useStore = () => {
  // Defining a custom hook named useStore
  const setState = useState(globalState)[1]; // Retrieving the state and setState function from the global state using the useState hook

  const dispatch = (actionIdentifier, payload) => {
    // Defining a dispatch function
    const newState = actions[actionIdentifier](globalState, payload); // Invoking the action function associated with the given actionIdentifier, passing the global state as an argument and obtaining a new state
    globalState = { ...globalState, ...newState }; // Updating the global state with the new state

    for (const listener of listeners) {
      // Notifying all the listeners by invoking them with the updated global state
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState); // Adding the setState function to the listeners array when the component mounts

    return () => {
      listeners = listeners.filter((li) => li !== setState); // Removing the setState function from the listeners array when the component unmounts
    };
  }, [setState]);

  return [globalState, dispatch]; // Returning the global state and dispatch function
};

export const initStore = (userActions, initialState) => {
  // Initializing the store with userActions and initialState
  if (initialState) {
    globalState = { ...globalState, ...initialState }; // If an initialState is provided, updating the global state with the initial state
  }
  actions = { ...actions, ...userActions }; // Adding userActions to the actions object
};
