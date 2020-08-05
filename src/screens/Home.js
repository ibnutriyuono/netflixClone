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
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=531394353b1ac68faa3d494a4213fa94&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      // "https://api.themoviedb.org/3/list/500?api_key=531394353b1ac68faa3d494a4213fa94&language=en-US"
    )
      .then((res) => res.json())
      .then((res) => setData((arr) => [...arr, res]));
    // dispatch(getMovies(arr));
    setReady(true);
  }, []);
  return (
    <ScrollView style={globalStyles.container}>
      <HeaderHome />
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
        console.log("sadKEK")
      )}
    </ScrollView>
  );
};

export default Home;
