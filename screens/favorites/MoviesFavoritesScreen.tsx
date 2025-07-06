import { View } from "react-native";
import React, { useEffect } from "react";
import MovieVerticalList from "../../presentation/components/movies/MovieVerticalList";
import { useFavoritesMovies } from "../../presentation/hooks/useFavoritesMovies";
import { useAuth } from "../../AuthContext";
import ActivityIndicatorCustom from "../../presentation/shared/ActivityIndicatorCustom";

const MoviesFavoritesScreen = () => {
  const { session_id, account_id, login } = useAuth();
  const { moviesFavoritesQuery } = useFavoritesMovies({
    session_id,
    account_id,
  });

  useEffect(() => {
    if (!session_id || !account_id) {
      login(process.env.EXPO_PUBLIC_MOVIE_DB_USER_ACCOUNT, process.env.EXPO_PUBLIC_MOVIE_DB_USER_PASSWORD)
        .then(() => console.log("Login automático exitoso"))
        .catch((err: any) => {
          if (err.response) {
            console.error("Error en login automático:");
            console.error("Status:", err.response.status);
            console.error("Data:", err.response.data);
            console.error("Headers:", err.response.headers);
          } else if (err.request) {
            console.error("No response received:", err.request);
          } else {
            console.error("Error al configurar la solicitud:", err.message);
          }
        });
    }
  }, []);
  if (moviesFavoritesQuery.isLoading) {
   return <ActivityIndicatorCustom/>;
  }

  return (
    <View className="mt-4">
      <MovieVerticalList
        className="mb-5"
        movies={moviesFavoritesQuery.data ?? []}
      ></MovieVerticalList>
    </View>
  );
};

export default MoviesFavoritesScreen;
