import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../actions/VideosAction";
import { addToMyList } from "../actions/ListAction";
import { globalStyles, colors, stockImages } from "../constants";

import HeaderHome from "../components/HeaderHome";
import { PreviewsScroll } from "../components";

const Home = () => {
  const state = useSelector((state) => state);
  const [arr, setData] = useState([]);
  const [isReady, setReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const url =
      "http://api.themoviedb.org/3/discover/tv?api_key=531394353b1ac68faa3d494a4213fa94&with_networks=213";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData((arr) => [...arr, res]);
        setReady(true);
      });
    // dispatch(getMovies(arr));
    return function cleanup() {
      abortController.abort();
    };
  }, []);
  return (
    <ScrollView style={globalStyles.container}>
      <HeaderHome />
      <View>
        {isReady ? (
          <View>
            <PreviewsScroll heading="Previews" data={arr[0]} />
            <PreviewsScroll
              heading="Continue Watching for Muhamad Ibnu"
              data={arr[0]}
            />
            <PreviewsScroll heading="My List" data={arr[0]} />
          </View>
        ) : (
          <Text style={{ color: colors.white }}>Loading ... </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
