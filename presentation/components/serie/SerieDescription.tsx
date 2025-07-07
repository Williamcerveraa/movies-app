import { View, Text } from 'react-native';
import { CompleteSerie } from '../../../infrastructure/interfaces/serie.interface';

interface Props {
  serie: CompleteSerie;
}

const SerieDescription = ({ serie }: Props) => {
  const percentage = Math.round(serie.rating * 10) + '%';
  const genres = serie.genres?.slice(0, 2).join(', ');
  return (
    <View className="mx-5 mb-4">
      <View className="flex-row">
        <Text className="text-base">{new Date(serie.releaseDate).toLocaleDateString()}</Text>
        <Text className="text-base"> • {percentage}</Text>
        <Text className="text-base"> • {genres}</Text>
      </View>

      <Text className="font-bold mt-3 text-lg">Sipnosis</Text>
      <Text className="font-normal mt-1 text-sm">{serie.description}</Text>
    </View>
  );
};
export default SerieDescription;