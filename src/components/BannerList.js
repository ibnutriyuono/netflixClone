import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addToMyList, removeFromMyList } from "../actions/ListAction";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, fonts } from "../constants";

const BannerList = (props) => {
  const [pressed, setPress] = useState(true);
  const dispatch = useDispatch();

  _handlePress = () => {
    setPress(!pressed);
    pressed
      ? dispatch(addToMyList(props.movieId))
      : dispatch(removeFromMyList(props.movieId));
  };

  return (
    <TouchableOpacity onPress={() => _handlePress()}>
      <Icon
        name={pressed ? "plus" : "check"}
        size={props.size}
        color={colors.infoGrey}
        style={{ marginLeft: 23 }}
      />
      <Text style={styles.navText}>My List</Text>
    </TouchableOpacity>
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
