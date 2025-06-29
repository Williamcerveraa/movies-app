import {
  View,
  Text,
  useWindowDimensions,
  Image,
} from 'react-native';
import { useNavigation} from "@react-navigation/native";

interface Props {
  poster: string;
  originalTitle?: string;
  title?: string;
  name: string;
}

const SerieHeader = ({ poster, originalTitle, title,name }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  const navigation = useNavigation<any>();

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
        <Text className="font-semibold text-2xl text-center">{name}</Text>
        {/* <Pressable className="bg-blue-700 p-5 rounded-2xl">
           <Text className="font-semibold text-white text-lg">Ver horarios</Text>
        </Pressable> */}
      </View>
    </>
  );
};
export default SerieHeader;