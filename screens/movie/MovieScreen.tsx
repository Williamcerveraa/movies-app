import {ScrollView} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useMovie } from "../../presentation/hooks/useMovie";
import MovieHeader from "../../presentation/components/movie/MovieHeader";
import MovieSerieHeader from "../../presentation/shared/Movie-Serie-Header";
import ActivityIndicatorCustom from "../../presentation/shared/ActivityIndicatorCustom";
import MovieSerieCast from "../../presentation/shared/Movie-Serie-Cast";
import MovieSerieDescription from "../../presentation/shared/Movie-Serie-Description";

const MovieScreen = () => {
  const { params } = useRoute<any>();

  const { movieQuery, castQuery } = useMovie(params.id);
  if (movieQuery.isLoading || !movieQuery.data) {
    return <ActivityIndicatorCustom />;
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
        item={movieQuery.data}
      ></MovieSerieHeader>
       <MovieSerieDescription item={movieQuery.data} media_id = {params.id}></MovieSerieDescription>
      <MovieSerieCast cast={castQuery.data ?? []}></MovieSerieCast>
      
    </ScrollView>
  );
};

export default MovieScreen;
