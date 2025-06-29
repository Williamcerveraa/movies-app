import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
  title?: string;
  description?: string
  name?: string;
}

const MoviePosterCard = ({ id, poster, smallPoster, className, title, description, name } : Props) => {
  const navigation = useNavigation<any>();
  return (
    <Pressable className={`active:opacity-90 px-2 ${className}`}
        onPress={() => navigation.navigate('MovieDetailById', { id: id })}
        >
    <View className="flex-row p-3 ">
     <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 100 : 150,
          height: smallPoster ? 150 : 230,
        }}
        resizeMode="cover"
      />
      <View className="flex-1 ml-3 justify-start pt-2">
        <Text className="text-base font-semibold text-black">
          {title ? title : name }
        </Text>
        <Text className="text-sm text-black">
          {description?.slice(0,180)} ...
        </Text>
      </View>
    </View>
    </Pressable>
  );
};

export default MoviePosterCard;
