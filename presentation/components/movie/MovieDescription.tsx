import { View, Text } from 'react-native';
import { CompleteMovie } from '../../../infrastructure/interfaces/movie.interface';
import { Formatter } from '../../../config/helpers/formatter';

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  const percentage = Math.round(movie.rating * 10) + '%';
  const genres = movie.genres?.slice(0, 2).join(', ');
  return (
    <View className="mx-5 mb-4">
      <View className="flex-row">
        <Text className="text-base">{new Date(movie.releaseDate).toLocaleDateString()}</Text>
        <Text className="text-base"> • {percentage}</Text>
        <Text className="text-base"> • {genres}</Text>
      </View>

      <Text className="font-bold mt-3 text-lg">Sipnosis</Text>
      <Text className="font-normal mt-1 text-sm">{movie.description}</Text>
    </View>
  );
};
export default MovieDescription;