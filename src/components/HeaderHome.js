import React from "react";

import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
  ScrollView,
} from "react-native";
import { globalStyles, colors, stockImages, fonts } from "../constants";
import StatusBar from "./StatusBar";
import BannerGenre from "./BannerGenre";
import BannerPlay from "./BannerPlay";
import BannerList from "./BannerList";
import BannerInfo from "./BannerInfo";
import PreviewsScroll from "./PreviewsScroll";

const HeaderHome = () => {
  return (
    <ScrollView>
      <View style={styles.imageWrapper}>
        <ImageBackground
          style={styles.bannerStyle}
          source={stockImages.bannerPoster}
        >
          <View style={[globalStyles.flexRowSpace, styles.container]}>
            <StatusBar statusBarStyle="light" />
            <Image
              source={stockImages.netflixTransparent}
              style={styles.netflixLogo}
            />
            <Text style={styles.navText}>TV Shows</Text>
            <Text style={styles.navText}>Movies</Text>
            <Text style={[styles.navText, { marginRight: 50 }]}>My List</Text>
          </View>
          <BannerGenre />
          <View style={styles.bannerContainer}>
            <BannerList />
            <BannerPlay />
            <BannerInfo />
          </View>
        </ImageBackground>
      </View>
      <PreviewsScroll heading="Previews" />
      <PreviewsScroll heading="Continue Watching for Muhamad Ibnu" />
      <PreviewsScroll heading="My List" />
    </ScrollView>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  imageWrapper: {
    height: 550,
    overflow: "hidden",
  },
  bannerStyle: {
    width: "100%",
    height: 550,
    resizeMode: "cover",
  },
  container: {
    marginTop: 50,
  },
  netflixLogo: {
    height: 35,
    width: 20,
    marginLeft: -25,
  },
  navText: {
    color: colors.white,
    fontWeight: "bold",
  },
  listText: {
    color: colors.white,
    // fontWeight: "bold",
    fontFamily: fonts.medium,
    fontSize: 18,
  },
  bannerContainer: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-evenly",
    alignItems: "center",
    bottom: 10,
    left: 0,
    right: 0,
    marginHorizontal: 50,
  },
});
