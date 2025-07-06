import { ScrollView } from "react-native";
import React from "react";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { useSerie } from "../../presentation/hooks/useSerie";
import SerieHeader from "../../presentation/components/serie/SerieHeader";
import SerieDescription from "../../presentation/components/serie/SerieDescription";
import SerieCast from "../../presentation/components/serie/SerieCast";
import MovieSerieHeader from "../../presentation/shared/Movie-Serie-Header";
import ActivityIndicatorCustom from "../../presentation/shared/ActivityIndicatorCustom";

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
      <SerieDescription serie={SerieQuery.data}></SerieDescription>
      <SerieCast cast={castSerieQuery.data ?? [] }></SerieCast>
    </ScrollView>
  );
};

export default SerieScreen;
