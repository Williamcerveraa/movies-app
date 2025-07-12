import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import MoviePoster from "./MoviePoster";
import { Movie } from "../../../infrastructure/interfaces/movie.interface";
import { useEffect, useRef } from "react";
import { Serie } from "../../../infrastructure/interfaces/serie.interface";

interface MediaBase {
  id: number;
  poster: string;
  title?: string;
  name?: string;
}
// interface Props {
//   title?: string;
//   movies?: Movie[];
//   className?: string;
//   items: MediaItem;

//   loadNextPage?: () => void;
// }
interface Props<T extends MediaBase> {
  title?: string;
  items: T[];
  className?: string;
  loadNextPage?: () => void;
}

const MovieHorizontalList = <T extends MediaBase>({
  title,
  className,
  loadNextPage,
  items
}: Props<T>) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [items]);

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
      {title && (
        <Text className="text-2xl font-bold px-3 mb-3 mt-3">{title}</Text>
      )}

      <FlatList
        horizontal
        data={items}
        // Para quitar la barra horizontal debajo de los componentes
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
            <MoviePoster id={item.id} poster={item.poster} name={item.name} title={item.title}/>
        )}
        onScroll={onScroll}
      />
    </View>
  );
};
export default MovieHorizontalList;
