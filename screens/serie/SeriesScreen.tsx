import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import MovieDescription from "../../presentation/components/movie/MovieDescription";
import MovieCast from "../../presentation/components/movie/MovieCast";
import { useSerie } from "../../presentation/hooks/useSerie";
import SerieHeader from "../../presentation/components/serie/SerieHeader";

const SerieScreen = () => {
  const { params } = useRoute<any>();
  const navigation = useNavigation<any>();

  const { SerieQuery, castQuery } = useSerie(params.id);
  if (SerieQuery.isLoading || !SerieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="black" size={50}></ActivityIndicator>
      </View>
    );
  }
  return (
    <ScrollView>
       <SerieHeader
        name={SerieQuery.data.name}
        poster={SerieQuery.data.poster}
      ></SerieHeader>
      {/* <MovieDescription movie={SerieQuery.data}></MovieDescription> */}
      <MovieCast cast={castQuery.data ?? [] }></MovieCast>
    </ScrollView>
  );
};

export default SerieScreen;
