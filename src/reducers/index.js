import isLoggedReducer from "./isLogged";
import myListReducer from "./myList";
import moviesActionReducer from "./moviesAction";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  myList: myListReducer,
  movieAction: moviesActionReducer,
});

export default allReducers;
