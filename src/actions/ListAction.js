export const addToMyList = (payload) => {
  return {
    type: "ADD_TO_MY_LIST",
    payload: payload,
  };
};

export const removeFromMyList = () => {
  return {
    type: "REMOVE_FROM_MY_LIST",
  };
};
