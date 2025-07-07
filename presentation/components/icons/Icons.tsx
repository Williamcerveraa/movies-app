import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, Text, View } from "react-native";
import { useAddFavorite } from "../../hooks/useAddFavorites";

interface FavoritesProps {
  media_id: number;
  props?: any;
}

export const FavoriteIconOutline = ({ media_id, props }: FavoritesProps) => {
  const { addFavorite } = useAddFavorite();
  return (
    <Pressable
    className="rounded-xl bg-white px-4 py-3 mt-2"
      onPress={() => addFavorite(media_id, "movie")}
    >
      <View className="flex-row justify-center items-start space-x-2">
        <Text className="font-semibold text-lg text-center text-black" >Agregar a favoritos</Text>
        <MaterialCommunityIcons
          name="cards-heart-outline"
          size={24}
          color="black"
          {...props}
        />
      </View>

    </Pressable>
  );
};

export const MovieOpenIcon = (props: any) => (
  <MaterialCommunityIcons
    name="movie-open"
    size={28}
    color="black"
    {...props}
  />
);

export const AccountIcon = (props: any) => (
  <MaterialCommunityIcons name="account" size={28} color="black" {...props} />
);

export const FavoriteIcon = (props: any) => (
  <MaterialCommunityIcons
    name="cards-heart"
    size={28}
    color="black"
    {...props}
  />
);
