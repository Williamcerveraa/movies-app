import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useMovies } from "../../presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MovieHorizontalList from "../../presentation/components/movies/MovieHorizontalList";
import MovieVerticalList from "../../presentation/components/movies/MovieVerticalList";

const SeriesScreen = () => {
  const { nowPlayingQuery, upcomingQuery } = useMovies();

  const safeArea = useSafeAreaInsets();
  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={50}></ActivityIndicator>
      </View>
    );
  }

  return (
    
      <View className="mt-4 mb-2 pb-10">
    
       <MovieVerticalList className="mb-5 pb-4" movies={nowPlayingQuery.data ?? []} title="En Cartelera"></MovieVerticalList>
      
     
    </View>
 
  );
};

export default SeriesScreen;
