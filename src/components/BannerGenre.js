import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles, colors, stockImages, fonts } from "../constants";

const BannerGenre = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bannerGenreText}>Hearfelt</Text>
      <Text style={styles.bannerBull}>&bull; </Text>
      <Text style={styles.bannerGenreText}>Quirky</Text>
      <Text style={styles.bannerBull}>&bull; </Text>
      <Text style={styles.bannerGenreText}>Romantic</Text>
      <Text style={styles.bannerBull}>&bull; </Text>
      <Text style={styles.bannerGenreText}>Fantasy TV</Text>
      <Text style={styles.bannerBull}>&bull; </Text>
      <Text style={styles.bannerGenreText}>Comedy</Text>
      <Text style={styles.bannerBull}>&bull; </Text>
      <Text style={styles.bannerGenreText}>Ghost</Text>
    </View>
  );
};

export default BannerGenre;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 45,
  },
  bannerGenreText: {
    color: colors.white,
    fontWeight: "bold",
    marginHorizontal: 30,
    fontFamily: fonts.light,
  },
  bannerBull: {
    color: colors.infoGrey,
    fontWeight: "100",
    marginHorizontal: 20,
  },
});
