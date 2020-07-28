import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { globalStyles, colors, stockImages, fonts } from "../constants";

const PreviewsScroll = (props) => {
  return (
    <View style={styles.previewsContainer}>
      <Text style={styles.previewsText}>{props.heading}</Text>
      <ScrollView horizontal>
        <Image
          source={stockImages.netflixTransparent}
          style={styles.previewsImage}
        />
        <Image
          source={stockImages.netflixTransparent}
          style={styles.previewsImage}
        />
        <Image
          source={stockImages.netflixTransparent}
          style={styles.previewsImage}
        />
        <Image
          source={stockImages.netflixTransparent}
          style={styles.previewsImage}
        />
      </ScrollView>
    </View>
  );
};

export default PreviewsScroll;

const styles = StyleSheet.create({
  previewsContainer: {
    margin: 15,
  },
  previewsText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: fonts.bold,
  },
  previewsImage: {
    height: 150,
    width: 150,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 70,
  },
});
