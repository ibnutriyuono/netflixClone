const myListReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_TO_MY_LIST":
      return state + action.payload;

    case "REMOVE_FROM_MY_LIST":
      return state - 1;
    // return state;
    default:
      return state;
  }
};

export default myListReducer;
