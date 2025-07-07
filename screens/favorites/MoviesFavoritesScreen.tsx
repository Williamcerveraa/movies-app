import { View } from "react-native";
import React, { useState } from "react";
import MovieVerticalList from "../../presentation/components/movies/MovieVerticalList";
import { useFavoritesMovies } from "../../presentation/hooks/useFavoritesMovies";
import { useAuth } from "../../AuthContext";
import ActivityIndicatorCustom from "../../presentation/shared/ActivityIndicatorCustom";

const MoviesFavoritesScreen = () => {
  const { session_id, account_id } = useAuth();
  const { moviesFavoritesQuery } = useFavoritesMovies({
    session_id,
    account_id,
  });
  const [refreshing, setRefreshing] = useState(false);


  const handleRefresh = async () => {
    setRefreshing(true);
    await moviesFavoritesQuery.refetch();
    setRefreshing(false);
  };


  if (moviesFavoritesQuery.isLoading) {
   return <ActivityIndicatorCustom/>;
  }

  return (
    <View className="mt-4">
      <MovieVerticalList
        className="mb-5"
        movies={moviesFavoritesQuery.data ?? []}
        onRefresh = {handleRefresh}
        refreshing = {refreshing}
      ></MovieVerticalList>
    </View>
  );
};

export default MoviesFavoritesScreen;
