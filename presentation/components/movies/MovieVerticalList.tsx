import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  RefreshControl,
} from "react-native";
import MoviePoster from "./MoviePoster";
import { Movie } from "../../../infrastructure/interfaces/movie.interface";
import { useEffect, useRef } from "react";
import MoviePosterCard from "./MoviePosterCard";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
  name? : string;
  onRefresh : ()=> void;
  refreshing : boolean;

  loadNextPage?: () => void;
}

const MovieVerticalList = ({
  title,
  movies,
  className,
  loadNextPage,
  onRefresh,
  refreshing
}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    //calcular el final del flatlist
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    console.log('Cargar siguientes películas');
    loadNextPage && loadNextPage();

  };
  return (
    <View className={` ${className}`}>
      <FlatList
        data={movies}
        // Para quitar la barra horizontal debajo de los componentes
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <MoviePosterCard id={item.id} poster={item.poster} description={item.description} title={item.title} name={item.name} smallPoster/>
        )}
        onScroll={onScroll}
        refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
};
export default MovieVerticalList;
