import { View, ScrollView } from "react-native";
import React from "react";
import { useMovies } from "../../presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "../../presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "../../presentation/components/movies/MovieHorizontalList";
import ActivityIndicatorCustom from "../../presentation/shared/ActivityIndicatorCustom";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

  const safeArea = useSafeAreaInsets();
  if (nowPlayingQuery.isLoading) {
    return <ActivityIndicatorCustom/>;
  }

  return (
    <ScrollView>
      <View className="mt-4 pb-10">
      {/* <MainSlideshow movies={nowPlayingQuery.data ?? []}></MainSlideshow> */}

       <MovieHorizontalList className="mb-5" movies={nowPlayingQuery.data ?? []} title="En Cartelera"></MovieHorizontalList>
      <MovieHorizontalList className="mb-5" movies={popularQuery.data ?? []} title="Populares"></MovieHorizontalList>
      <MovieHorizontalList className="mb-5" movies={topRatedQuery.data ?.pages.flat() ?? []} title="Tops" loadNextPage={topRatedQuery.fetchNextPage}></MovieHorizontalList>
      <MovieHorizontalList className="mb-5" movies={upcomingQuery.data ?? []} title="Próximamente"></MovieHorizontalList>
    </View>
    </ScrollView>
  );
};

export default HomeScreen;
