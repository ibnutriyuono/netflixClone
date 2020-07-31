import isLoggedReducer from "./isLogged";
import myListReducer from "./myList";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  myList: myListReducer,
});

export default allReducers;
