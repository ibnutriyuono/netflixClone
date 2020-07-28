import React, { Component } from "react";
import Home from "./src/screens/Home";
import BottomTabNavigator from "./src/routes/bottomTabNavigator";
export default class App extends Component {
  render() {
    return <BottomTabNavigator />;
  }
}
