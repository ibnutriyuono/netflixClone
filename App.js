import React, { Component } from "react";
import Home from "./src/screens/Home";
import BottomTabNavigator from "./src/routes/bottomTabNavigator";
import allReducers from "./src/reducers/";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(allReducers);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BottomTabNavigator />
      </Provider>
    );
  }
}
