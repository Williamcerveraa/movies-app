import { View } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MovieVerticalList from "../../presentation/components/movies/MovieVerticalList";
import { useAuth } from "../../AuthContext";
import { useFavoritesMovies } from "../../presentation/hooks/useFavoritesMovies";
import ActivityIndicatorCustom from "../../presentation/shared/ActivityIndicatorCustom";

const SeriesFavoritesScreen = () => {
  const { session_id, account_id } = useAuth();
  const { seriesFavoritesQuery } = useFavoritesMovies({
    session_id,
    account_id,
  });
const [refreshing, setRefreshing] = useState(false);


  const handleRefresh = async () => {
    setRefreshing(true);
    await seriesFavoritesQuery.refetch();
    setRefreshing(false);
  };
  const safeArea = useSafeAreaInsets();

  if (seriesFavoritesQuery.isLoading) {
    return <ActivityIndicatorCustom/>;
  }

  return (
    <View className="mt-4">
      <MovieVerticalList
        className="mb-5 pb-4"
        movies={seriesFavoritesQuery.data ?? []}
        title="En Cartelera"
        onRefresh = {handleRefresh}
        refreshing = {refreshing}
      ></MovieVerticalList>
    </View>
  );
};

export default SeriesFavoritesScreen;
