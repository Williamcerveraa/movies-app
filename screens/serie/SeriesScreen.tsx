import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { useMovie } from "../../presentation/hooks/useMovie";
import MovieHeader from "../../presentation/components/movie/MovieHeader";
import MovieDescription from "../../presentation/components/movie/MovieDescription";
import MovieCast from "../../presentation/components/movie/MovieCast";

const SeriesScreen = () => {
  const { params } = useRoute<any>();
  const navigation = useNavigation<any>();

  const { movieQuery, castQuery } = useMovie(params.id);
  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="black" size={50}></ActivityIndicator>
      </View>
    );
  }
  return (
    <ScrollView>
      {/* <Text >{movieQuery.data?.title}</Text> */}
      <MovieHeader
        poster={movieQuery.data.poster}
        originalTitle={movieQuery.data.originalTitle}
        title={movieQuery.data.title}
      ></MovieHeader>
      <MovieDescription movie={movieQuery.data}></MovieDescription>
      <MovieCast cast={castQuery.data ?? [] }></MovieCast>
    </ScrollView>
  );
};

export default SeriesScreen;
