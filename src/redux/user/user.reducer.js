// Create our initial state **Done in ALL CAPS**
const INITIAL_STATE = {
  currentUser: null,
};

// function that gets a state object and an action object
const userReducer = (state = INITIAL_STATE, action) => {
  /* depending on what the type of action it is this switch statement will check if the case 
    for this action type is equal to the "SET_CURRENT_USER" case
    */
  switch (action.type) {
    // if true, return this new object out of this reducer function
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    // otherwise default to return the current state that was passed into this function initially
    default:
      return state;
  }
};

export default userReducer;
