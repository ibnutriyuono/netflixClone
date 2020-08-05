import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToMyList } from "../actions/ListAction";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { globalStyles, colors, stockImages, fonts } from "../constants";

const PreviewsScroll = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <View style={styles.previewsContainer}>
      <Text style={styles.previewsText}>{props.heading}</Text>
      <ScrollView horizontal>
        {console.log(state)}
        {props.data.results.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => dispatch(addToMyList(item.id.toString()))}
              >
                <View>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    style={styles.previewsImage}
                  />
                  <Text style={styles.title}>
                    {item.original_title.length > 19
                      ? `${item.original_title.substring(0, 20 - 3)} ...`
                      : item.original_title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
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
  title: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 15,
    alignSelf: "center",
  },
});
