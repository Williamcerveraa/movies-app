import { View, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "../../presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "../../presentation/components/movies/MovieHorizontalList";
import ActivityIndicatorCustom from "../../presentation/shared/ActivityIndicatorCustom";
import { useSeries } from "../../presentation/hooks/useSeries";

const SeriesHomeScreen = () => {
  const { airingTodaygQuery, onAirQuery, topRatedQuery, popularQuery } = useSeries();

  const safeArea = useSafeAreaInsets();

  if (airingTodaygQuery.isLoading) {
    return <ActivityIndicatorCustom/>;
  }

  return (
    <ScrollView>
      <View className="mt-4 pb-10">
      {/* <MainSlideshow movies={nowPlayingQuery.data ?? []}></MainSlideshow> */}

       <MovieHorizontalList className="mb-5" items={airingTodaygQuery.data ?? []} title="Al Aire"></MovieHorizontalList>
       <MovieHorizontalList className="mb-5" items={popularQuery.data ?? []} title="Populares"></MovieHorizontalList>
       <MovieHorizontalList className="mb-5" items={topRatedQuery.data ?.pages.flat() ?? []} title="Destacadas" loadNextPage={topRatedQuery.fetchNextPage}></MovieHorizontalList>
       <MovieHorizontalList className="mb-5" items={onAirQuery.data ?? []} title="Próximamente"></MovieHorizontalList>
    </View>
    </ScrollView>
  );
};

export default SeriesHomeScreen;
