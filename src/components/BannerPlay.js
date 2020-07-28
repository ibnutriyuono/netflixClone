import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, fonts } from "../constants";

const BannerPlay = () => {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: colors.white,
        borderRadius: 8,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 8,
        marginHorizontal: 70,
        paddingRight: 8,
      }}
    >
      <Icon
        name="play"
        size={20}
        color={colors.black}
        style={{ justifyContent: "center", marginRight: 5 }}
      />
      <Text style={styles.navText}>Play</Text>
    </View>
  );
};

export default BannerPlay;

const styles = StyleSheet.create({
  navText: {
    color: colors.black,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
});
