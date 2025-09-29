import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { CompleteMovie } from '../../infrastructure/interfaces/movie.interface';
import { CompleteSerie } from '../../infrastructure/interfaces/serie.interface';

type MediaItem = CompleteMovie | CompleteSerie;
interface Props {
  poster: string;
  item: MediaItem;
}

const MovieSerieRecomendation = ({item}:Props) => {
  return (
      <View className="mt-3 mb-10">
        <Text className="font-bold text-lg px-5">Actores</Text>
  
        {/* <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ActorCard actor={item} />}
        /> */}
      </View>
    );
}

export default MovieSerieRecomendation