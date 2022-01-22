// In order for us to combine all our slice reducers together, we need to first import the combineReducers functions from the redux library
import { combineReducers } from "redux";
// Then we import in our userReducer object from user.reducer.js
import userReducer from "./user/user.reducer";

// Then we export this object and pass in first the key of user to our userReducer object
export default combineReducers({
  // The keys (ex. user) represent the slices of state
  user: userReducer,
});
