import { Platform } from "react-native";

const bold = Platform.select({
  android: "sans-serif-condensed",
  ios: "HelveticaNeue-Bold",
});

const light = Platform.select({
  android: "sans-serif-light",
  ios: "HelveticaNeue-Light",
});

const medium = Platform.select({
  android: "sans-serif-medium",
  ios: "HelveticaNeue-Medium",
});

const regular = Platform.select({
  android: "sans-serif",
  ios: "HelveticaNeue",
});

export default {
  bold,
  light,
  medium,
  regular,
};
