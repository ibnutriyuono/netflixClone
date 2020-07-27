import React from "react";
import { Text, View, ScrollView } from "react-native";
import { globalStyles, colors, stockImages } from "../constants";

import HeaderHome from "../components/HeaderHome";

const Home = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <HeaderHome />
    </ScrollView>
  );
};

export default Home;
