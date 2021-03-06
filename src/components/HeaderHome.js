import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles, colors, stockImages, fonts } from "../constants";

import { BannerGenre, BannerInfo, BannerList, BannerPlay, StatusBar } from "./";

const HeaderHome = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: colors.headerBarBg }}>
      <View style={styles.imageWrapper}>
        <ImageBackground
          style={styles.bannerStyle}
          source={stockImages.bannerPoster}
        >
          <LinearGradient
            colors={["transparent", colors.headerBarBg]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "100%",
            }}
          />
          <View style={[globalStyles.flexRowSpace, styles.container]}>
            <StatusBar statusBarStyle="light" />
            <Image
              source={stockImages.netflixTransparent}
              style={styles.netflixLogo}
            />
            <TouchableOpacity onPress={() => navigation.navigate("TVShows")}>
              <Text style={styles.navText}>TV Shows</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Movies")}>
              <Text style={styles.navText}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MyList")}>
              <Text style={[styles.navText, { marginRight: 50 }]}>My List</Text>
            </TouchableOpacity>
          </View>
          <BannerGenre />
          <View style={styles.bannerContainer}>
            <BannerList movieId="90447" size="25" />
            <BannerPlay />
            <BannerInfo />
          </View>
        </ImageBackground>
      </View>
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
