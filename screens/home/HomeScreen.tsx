import { View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useMovies } from "../../presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "../../presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "../../presentation/components/movies/MovieHorizontalList";
import ActivityIndicatorCustom from "../../presentation/shared/ActivityIndicatorCustom";
import { useAuth } from "../../AuthContext";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();
  const { session_id, account_id, login } = useAuth();

  const safeArea = useSafeAreaInsets();
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
  if (nowPlayingQuery.isLoading) {
    return <ActivityIndicatorCustom/>;
  }

  return (
    <ScrollView>
      <View className="mt-4 pb-10">
      {/* <MainSlideshow movies={nowPlayingQuery.data ?? []}></MainSlideshow> */}

       <MovieHorizontalList className="mb-5" items={nowPlayingQuery.data ?? []} title="En Cartelera"></MovieHorizontalList>
      <MovieHorizontalList className="mb-5" items={popularQuery.data ?? []} title="Populares"></MovieHorizontalList>
      <MovieHorizontalList className="mb-5" items={topRatedQuery.data ?.pages.flat() ?? []} title="Destacadas" loadNextPage={topRatedQuery.fetchNextPage}></MovieHorizontalList>
      <MovieHorizontalList className="mb-5" items={upcomingQuery.data ?? []} title="Próximamente"></MovieHorizontalList>
    </View>
    </ScrollView>
  );
};

export default HomeScreen;
