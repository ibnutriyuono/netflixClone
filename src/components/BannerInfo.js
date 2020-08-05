import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, fonts } from "../constants";

const BannerInfo = () => {
  const navigation = useNavigation();
  return (
    <View style={{}}>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Icon
          name="information-outline"
          size={25}
          color={colors.infoGrey}
          style={{ marginLeft: 23 }}
        />
        <Text style={styles.navText}>Info</Text>
      </TouchableOpacity>
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
