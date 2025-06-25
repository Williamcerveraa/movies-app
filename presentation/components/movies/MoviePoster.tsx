import {Pressable, Image, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
  title?: string;
}

const MoviePoster = ({ id, poster, smallPoster = false, className, title }: Props) => {
   const navigation = useNavigation<any>();
  return (
    <Pressable className={`active:opacity-90 px-2 ${className}`}
    onPress={() => navigation.navigate('MovieDetailById', { id: id })}
    >
      <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 100 : 150,
          height: smallPoster ? 170 : 230,
        }}
        resizeMode="cover"
      />
      {/* <Text className="text-sm font-bold mb-3 mt-3">{title}</Text> */}
      <Text className="text-sm font-bold mb-3 mt-3 px-3" style={{textDecorationLine : "underline"}}>Ver sipnosis</Text> 
    </Pressable>
  );
};
export default MoviePoster;