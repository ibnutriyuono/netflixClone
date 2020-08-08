import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "../components";
import { colors, fonts } from "../constants";

const Search = () => {
  const [arr, setData] = useState([]);
  const [isReady, setReady] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=531394353b1ac68faa3d494a4213fa94&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setData((arr) => [...arr, data]);
        setReady(true);
      });
  }, []);

  const state = useSelector((state) => state);

  return (
    <ScrollView>
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
        <View
          style={{ alignSelf: "flex-start", marginLeft: 5, marginVertical: 10 }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 15,
              fontFamily: fonts.medium,
            }}
          >
            Top Searches
          </Text>
        </View>
        {isReady ? (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {arr[0].results.map((data, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Details", { id: data.id })}
              >
                <View>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                    }}
                    style={{
                      height: 170,
                      width: 130,
                      marginHorizontal: 5,
                      marginTop: 10,
                      borderRadius: 5,
                    }}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View>
            <Text>Not Ready</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.bgGrey,
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
