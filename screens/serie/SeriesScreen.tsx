import { ScrollView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSerie } from "../../presentation/hooks/useSerie";
import MovieSerieHeader from "../../presentation/shared/Movie-Serie-Header";
import ActivityIndicatorCustom from "../../presentation/shared/ActivityIndicatorCustom";
import MovieSerieCast from "../../presentation/shared/Movie-Serie-Cast";
import MovieSerieDescription from "../../presentation/shared/Movie-Serie-Description";

const SerieScreen = () => {
  const { params } = useRoute<any>();
  const navigation = useNavigation<any>();

  const { SerieQuery, castSerieQuery } = useSerie(params.id);
  if (SerieQuery.isLoading || !SerieQuery.data) {
    return <ActivityIndicatorCustom/>;
  }
  return (
    <ScrollView>
       {/* <SerieHeader
        name={SerieQuery.data.name}
        poster={SerieQuery.data.poster}
      ></SerieHeader> */}
       <MovieSerieHeader
        name={SerieQuery.data.name}
        poster={SerieQuery.data.poster}
      ></MovieSerieHeader>
      <MovieSerieDescription item={SerieQuery.data} media_id={params.id}></MovieSerieDescription>
      <MovieSerieCast cast={castSerieQuery.data ?? []}></MovieSerieCast>
    </ScrollView>
  );
};

export default SerieScreen;
