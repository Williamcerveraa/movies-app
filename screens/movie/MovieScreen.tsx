import { ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useMovie } from "../../presentation/hooks/useMovie";
import MovieHeader from "../../presentation/components/movie/MovieHeader";
import MovieDescription from "../../presentation/components/movie/MovieDescription";
import MovieCast from "../../presentation/components/movie/MovieCast";
import MovieSerieHeader from "../../presentation/shared/Movie-Serie-Header";
import ActivityIndicatorCustom from "../../presentation/shared/ActivityIndicatorCustom";

const MovieScreen = () => {
  const { params } = useRoute<any>();

  const { movieQuery, castQuery } = useMovie(params.id);
  if (movieQuery.isLoading || !movieQuery.data) {
    return <ActivityIndicatorCustom/>;
  }
  return (
    <ScrollView>
      {/* <MovieHeader
        poster={movieQuery.data.poster}
        originalTitle={movieQuery.data.originalTitle}
        title={movieQuery.data.title}
      ></MovieHeader> */}
      <MovieSerieHeader
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      ></MovieSerieHeader>
      <MovieDescription movie={movieQuery.data}></MovieDescription>
      <MovieCast cast={castQuery.data ?? []}></MovieCast>
    </ScrollView>
  );
};

export default MovieScreen;
