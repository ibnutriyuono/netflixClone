import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, fonts } from "../constants";

const BannerList = () => {
  return (
    <View style={{}}>
      <Icon
        name="plus"
        size={25}
        color={colors.infoGrey}
        style={{ marginLeft: 23 }}
      />
      <Text style={styles.navText}>My List</Text>
    </View>
  );
};

export default BannerList;

const styles = StyleSheet.create({
  navText: {
    color: colors.infoGrey,
    fontFamily: fonts.regular,
    fontSize: 12,
    // alignContent: "center",
    marginLeft: 15,
  },
});
