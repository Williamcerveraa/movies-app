import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { useSerie } from "../../presentation/hooks/useSerie";
import SerieHeader from "../../presentation/components/serie/SerieHeader";
import SerieDescription from "../../presentation/components/serie/SerieDescription";
import SerieCast from "../../presentation/components/serie/SerieCast";

const SerieScreen = () => {
  const { params } = useRoute<any>();
  const navigation = useNavigation<any>();

  const { SerieQuery, castSerieQuery } = useSerie(params.id);
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
      <SerieDescription serie={SerieQuery.data}></SerieDescription>
      <SerieCast cast={castSerieQuery.data ?? [] }></SerieCast>
    </ScrollView>
  );
};

export default SerieScreen;
