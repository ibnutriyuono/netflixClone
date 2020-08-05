const myListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_MY_LIST":
      // return state + action.payload;
      return [...state, action.payload];

    case "REMOVE_FROM_MY_LIST":
      // return state - 1;
      // return state.filter((e) => e !== action.payload);
      return [...state.filter((a) => action.payload !== action.payload)];
    default:
      return state;
  }
};

export default myListReducer;
