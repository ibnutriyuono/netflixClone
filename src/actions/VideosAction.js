export const getMovies = (payload) => {
  return {
    type: "GET_MOVIES",
    payload: payload,
  };
};
