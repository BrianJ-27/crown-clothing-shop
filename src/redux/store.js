import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// placing logger middleware inside of this array
const middlewares = [logger];

// createStore is a function that gets a rootReducer parameters and the returned value of our applyMiddleware
// by doing ...middlewares, we are spreading in all our methods or all values in this array into this function call as individual arguments
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// This now gets brought into or imported into our index.js file and pass it into our provider component
export default store;
