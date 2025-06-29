import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MovieVerticalList from "../../presentation/components/movies/MovieVerticalList";
import { useAuth } from "../../AuthContext";
import { useFavoritesMovies } from "../../presentation/hooks/useFavoritesMovies";

const SeriesFavoritesScreen = () => {
  const { session_id, account_id } = useAuth();
  const { seriesFavoritesQuery } = useFavoritesMovies({
    session_id,
    account_id,
  });

  const safeArea = useSafeAreaInsets();

  if (seriesFavoritesQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="black" size={50}></ActivityIndicator>
      </View>
    );
  }

  return (
    <View className="mt-4">
      <MovieVerticalList
        className="mb-5 pb-4"
        movies={seriesFavoritesQuery.data ?? []}
        title="En Cartelera"
      ></MovieVerticalList>
    </View>
  );
};

export default SeriesFavoritesScreen;
