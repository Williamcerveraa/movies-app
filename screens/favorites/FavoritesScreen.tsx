import React, { useState } from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MoviesFavoritesScreen from "./MoviesFavoritesScreen";
import SeriesFavoritesScreen from "./SeriesFavoritesScreen";


const renderScene = SceneMap({
  movies: MoviesFavoritesScreen,
  series: SeriesFavoritesScreen,
});

const FavoritesScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "movies", title: "Películas" },
    { key: "series", title: "Series" },
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "black" }}
      style={{ backgroundColor: "#fff", padding: 0, margin:0}}
      labelStyle={{ color: "black", fontWeight: "bold" }}
      activeColor="black"
      inactiveColor="gray"
      
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

export default FavoritesScreen;
