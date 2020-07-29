import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "../components";
import { colors, fonts } from "../constants";

const More = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bgGrey }}>
      <LinearGradient
        colors={["transparent", "#000"]}
        style={styles.linearGradient}
      />
      <StatusBar statusBarStyle="light" />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.bgGrey,
          // flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: colors.moreSectionText,
              fontFamily: fonts.light,
              fontSize: 15,
              marginLeft: 10,
            }}
          >
            Profile 1
          </Text>
          <Text
            style={{
              color: colors.moreSectionText,
              fontFamily: fonts.light,
              fontSize: 15,
              marginLeft: 10,
            }}
          >
            Profile 2
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="ios-settings"
            color={colors.moreSectionText}
            size={20}
          />
          <Text
            style={{
              color: colors.moreSectionText,
              fontFamily: fonts.light,
              fontSize: 15,
              marginLeft: 10,
            }}
          >
            Manage profiles
          </Text>
        </View>
      </View>
      <View
        style={{ flex: 1, backgroundColor: colors.inactiveGrey, padding: 20 }}
      >
        <View style={{ flexDirection: "row", marginBottom: 15 }}>
          <Ionicons name="ios-share-alt" color={colors.white} size={25} />
          <Text
            style={{
              fontFamily: fonts.medium,
              color: colors.white,
              fontSize: 20,
              marginLeft: 10,
            }}
          >
            Tell friends about Netflix
          </Text>
        </View>
        <Text
          style={{
            fontFamily: fonts.regular,
            color: colors.white,
            marginBottom: 5,
          }}
        >
          Share this link so your friends can join the conversation
        </Text>
        <Text
          style={{
            fontFamily: fonts.regular,
            color: colors.white,
            marginBottom: 15,
          }}
        >
          around all your favorite TV shows and movies.
        </Text>
        <Text
          style={{
            fontFamily: fonts.regular,
            color: colors.textGrey,
            textDecorationLine: "underline",
          }}
        >
          Terms & conditions
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: colors.bgGrey,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          <Ionicons
            name="ios-checkmark"
            color={colors.moreDeviceText}
            size={40}
          />
          <Text
            style={{
              fontFamily: fonts.light,
              color: colors.textGrey,
              fontSize: 18,
              marginLeft: 10,
              marginTop: 7,
            }}
          >
            My List
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: colors.moreSectionBorder,
            borderBottomWidth: 1,
            width: "100%",
            marginBottom: 5,
          }}
        />
        <Text
          style={{
            fontFamily: fonts.light,
            color: colors.textGrey,
            fontSize: 18,
            marginLeft: 20,
            marginTop: 12,
            marginBottom: 5,
          }}
        >
          App Settings
        </Text>
        <Text
          style={{
            fontFamily: fonts.light,
            color: colors.textGrey,
            fontSize: 18,
            marginLeft: 20,
            marginTop: 12,
            marginBottom: 5,
          }}
        >
          Account
        </Text>
        <Text
          style={{
            fontFamily: fonts.light,
            color: colors.textGrey,
            fontSize: 18,
            marginLeft: 20,
            marginTop: 12,
            marginBottom: 5,
          }}
        >
          Help
        </Text>
        <Text
          style={{
            fontFamily: fonts.light,
            color: colors.textGrey,
            fontSize: 18,
            marginLeft: 20,
            marginTop: 12,
            marginBottom: 5,
          }}
        >
          Sign out
        </Text>
      </View>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
