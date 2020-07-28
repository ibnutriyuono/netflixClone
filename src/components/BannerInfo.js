import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, fonts } from "../constants";

const BannerInfo = () => {
  return (
    <View style={{}}>
      <Icon
        name="information-outline"
        size={25}
        color={colors.infoGrey}
        style={{ marginLeft: 23 }}
      />
      <Text style={styles.navText}>Info</Text>
    </View>
  );
};

export default BannerInfo;

const styles = StyleSheet.create({
  navText: {
    color: colors.infoGrey,
    fontFamily: fonts.regular,
    fontSize: 12,
    marginLeft: 24,
  },
});
