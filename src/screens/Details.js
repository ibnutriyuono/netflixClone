import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import YoutubePlayer from "react-native-youtube-iframe";
import { colors, fonts } from "../constants";

const Details = ({ route }) => {
  const { id } = route.params;
  const [arr, setData] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [isReady, setReady] = useState(false);
  const dispatch = useDispatch();
  const detailsUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=531394353b1ac68faa3d494a4213fa94&language=en-US`;
  const trailersUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=531394353b1ac68faa3d494a4213fa94&language=en-US`;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    // fetch(detailsUrl)
    //   .then((res) => res.json())
    //   .then((res) => {
    // setData((arr) => [...arr, res]);
    // setReady(true);
    //   });
    Promise.all([fetch(detailsUrl), fetch(trailersUrl)])
      .then((res) => {
        return Promise.all(
          res.map((res) => {
            return res.json();
          })
        );
      })
      .then((data) => {
        setData((arr) => [...arr, data]);
        setReady(true);
      })
      .catch((e) => console.log(e));
    return function cleanup() {
      abortController.abort();
    };
  }, []);
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.bgGrey,
        }}
      >
        {isReady ? (
          <View style={{ flex: 1, backgroundColor: colors.bgGrey }}>
            <ImageBackground
              style={{ flex: 1 }}
              blurRadius={5}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${arr[0][0].poster_path}`,
              }}
            >
              <LinearGradient
                colors={["transparent", colors.bgGrey]}
                style={{ flex: 1 }}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginTop: 50,
                    marginBottom: 20,
                  }}
                >
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${arr[0][0].poster_path}`,
                    }}
                    style={{ height: 400, width: 250 }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", marginBottom: 20 }}>
                    <Text
                      style={{
                        color: "#5ac16e",
                        marginRight: 10,
                      }}
                    >
                      99% Match
                    </Text>
                    <Text
                      style={{
                        color: colors.white,
                        marginRight: 10,
                      }}
                    >
                      {parseInt(arr[0][0].first_air_date)}
                    </Text>
                    <Text
                      style={{
                        color: colors.white,
                        marginRight: 10,
                      }}
                    >
                      Season {arr[0][0].number_of_seasons}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: colors.white,
                    }}
                  >
                    Resume
                  </Text>
                  <Text
                    style={{
                      color: colors.white,
                    }}
                  >
                    Download S{arr[0][0].last_episode_to_air.season_number} : E
                    {arr[0][0].last_episode_to_air.episode_number}
                  </Text>
                </View>
              </LinearGradient>
            </ImageBackground>
            <View
              style={{
                flex: 1,
                backgroundColor: colors.bgGrey,
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontFamily: fonts.medium,
                  marginLeft: 20,
                  marginTop: 20,
                }}
              >
                S{arr[0][0].last_episode_to_air.season_number} : E
                {arr[0][0].last_episode_to_air.episode_number} "
                {arr[0][0].last_episode_to_air.name}"
              </Text>
              <View
                style={{
                  borderBottomColor: colors.moreSectionBorder,
                  borderBottomWidth: 2,
                  marginTop: 20,
                  marginBottom: 5,
                  marginLeft: 20,
                  marginRight: 50,
                }}
              />
              <Text
                style={{
                  color: colors.white,
                  fontFamily: fonts.medium,
                  marginLeft: 20,
                  marginTop: 20,
                  marginRight: 20,
                  marginBottom: 10,
                }}
              >
                {arr[0][0].last_episode_to_air.overview}
              </Text>
              {arr[0][1].results.map((data, index) => {
                // console.log(data);
                return (
                  <View
                    key={index}
                    style={{ marginTop: 5, marginHorizontal: 10 }}
                  >
                    <YoutubePlayer
                      height={250}
                      width={"100%"}
                      videoId={data.key}
                      play={false}
                      volume={50}
                      playbackRate={1}
                      initialPlayerParams={{
                        cc_lang_pref: "us",
                        showClosedCaptions: true,
                      }}
                    />
                  </View>
                );
              })}
            </View>
          </View>
        ) : (
          <View>
            <Text>Loading ... </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({});
