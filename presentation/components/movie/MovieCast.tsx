import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Cast } from '../../../infrastructure/interfaces/cast';
import { ActorCard } from './ActorCard';


interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-3 mb-10">
      <Text className="font-bold text-lg px-5">Actores</Text>

      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};
export default MovieCast;