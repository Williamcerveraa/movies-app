import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const FavoriteIcon = (props: any) => (
  <MaterialCommunityIcons name="cards-heart-outline" size={28} color="black" />
);

export const MovieOpenIcon = (props: any) => (
  <MaterialCommunityIcons name="movie-open" size={28} color={props} />
);
