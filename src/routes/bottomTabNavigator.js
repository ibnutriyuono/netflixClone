import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Search from "../screens/Search";
import ComingSoon from "../screens/ComingSoon";
import Downloads from "../screens/Downloads";
import More from "../screens/More";
import TVShows from "../screens/TVShows";
import Movies from "../screens/Movies";
import MyList from "../screens/MyList";
import Details from "../screens/Details";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Tab = createBottomTabNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

import { colors } from "../constants";

const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="TVShows" component={TVShows} />
    <HomeStack.Screen name="Movies" component={Movies} />
    <HomeStack.Screen name="MyList" component={MyList} />
    <HomeStack.Screen name="Details" component={Details} />
  </HomeStack.Navigator>
);

const AppScreens = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: colors.white,
      style: {
        backgroundColor: colors.bgGrey,
        borderTopColor: "transparent",
        // marginBottom: 25,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarLabel: "Search",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-search" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ComingSoon"
      component={ComingSoon}
      options={{
        tabBarLabel: "Coming Soon",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-play" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Downloads"
      component={Downloads}
      options={{
        tabBarLabel: "Downloads",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-arrow-round-down" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="More"
      component={More}
      options={{
        tabBarLabel: "More",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-menu" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default () => (
  <NavigationContainer>
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="App" component={AppScreens} />
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Register" component={Register} />
    </LoginStack.Navigator>
  </NavigationContainer>
);
