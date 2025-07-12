import {
  View,
  Text,
  useWindowDimensions,
  Image,
} from 'react-native';
import { CompleteMovie } from '../../infrastructure/interfaces/movie.interface';
import { CompleteSerie } from '../../infrastructure/interfaces/serie.interface';

type MediaItem = CompleteMovie | CompleteSerie;
interface Props {
  poster: string;
  item: MediaItem;
}

const MovieSerieHeader = ({ poster, item}: Props) => {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <>
      <View
        style={{ height: screenHeight * 0.7 }}
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{ uri: poster }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>
      </View>

      <View className="px-5 mt-3 mb-3">
        <Text className="font-semibold text-2xl text-center" >{item.title ? item.title : item.name }</Text>
      </View>
    </>
  );
};
export default MovieSerieHeader;