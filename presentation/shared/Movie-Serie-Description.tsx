import { View, Text } from 'react-native';
import { CompleteMovie } from '../../infrastructure/interfaces/movie.interface';
import { CompleteSerie } from '../../infrastructure/interfaces/serie.interface';
import { FavoriteIconOutline } from '../components/icons';

type MediaItem = CompleteMovie | CompleteSerie;
interface Props {
   item: MediaItem;
   media_id : number;
}

const MovieSerieDescription = ({ item, media_id }: Props) => {
  const percentage = Math.round(item.rating * 10) + '%' ;
  const genres = item.genres?.slice(0, 2).join(', ');
  return (
    <View className="mx-5 mb-4 ">
      <View className="flex-row justify-center items-center">
        <Text className="text-base">{new Date(item.releaseDate).toLocaleDateString()}</Text>
        <Text className="text-base"> • {percentage}</Text>
        <Text className="text-base"> • {genres}</Text>
      </View>
       <FavoriteIconOutline media_id = {media_id} media_type={item.title ? "movie" : "tv"} />

      <Text className="font-bold mt-3 text-lg">Sipnosis</Text>
      <Text className="font-normal mt-1 text-sm">{item.description ? item.description : "No hay Sipnosis."}</Text>
    </View>
  );
};
export default MovieSerieDescription;