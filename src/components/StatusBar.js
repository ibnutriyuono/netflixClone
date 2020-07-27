import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const StatusBarComponent = (props) => {
  return (
    <View>
      <StatusBar style={props.statusBarStyle} />
      <Text></Text>
    </View>
  );
};

export default StatusBarComponent;
