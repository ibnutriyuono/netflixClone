import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "../components";
import { colors } from "../constants";

const Search = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["transparent", "#000"]}
        style={styles.linearGradient}
      />
      <StatusBar statusBarStyle="light" />
      <View style={styles.searchContainer}>
        <Ionicons
          name="ios-search"
          color={colors.searchIcon}
          size={20}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchTextInput}
          underlineColorAndroid="transparent"
          placeholder="Search for a show, movie, genre, etc."
          placeholderTextColor={colors.searchHeadingText}
          autoCapitalize="none"
        />
      </View>
      <Text style={{ color: colors.white }}>SearchScreen</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
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
  searchContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    paddingLeft: 20,
    paddingVertical: 14,
    backgroundColor: colors.searchHeadingBg,
    paddingTop: 16,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  searchTextInput: {
    width: "100%",
    backgroundColor: colors.searchHeadingBg,
    height: 50,
    color: colors.searchHeadingText,
    flex: 1,
  },
});
