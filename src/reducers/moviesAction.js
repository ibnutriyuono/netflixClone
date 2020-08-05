let initialState = {
  data: [],
};
const moviesActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default moviesActionReducer;
