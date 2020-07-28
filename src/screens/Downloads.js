import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "../components";
import { colors, fonts } from "../constants";

const Downloads = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["transparent", "#000"]}
        style={styles.linearGradient}
      />
      <StatusBar statusBarStyle="light" />
      <Ionicons
        name="ios-arrow-dropdown"
        color={colors.downloadsIconBg}
        size={250}
        style={styles.searchIcon}
      />
      <Text style={{ color: colors.textGrey, marginTop: 20 }}>
        Movies and TV shows that you
      </Text>
      <Text style={{ color: colors.textGrey }}>download appear here</Text>
      <Text
        style={{
          color: colors.black,
          marginTop: 220,
          marginBottom: -100,
          fontFamily: fonts.medium,
          backgroundColor: colors.white,
          padding: 10,
          borderRadius: 5,
        }}
      >
        Find Something to Download
      </Text>
    </View>
  );
};

export default Downloads;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.searchBarBg,
  },
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
