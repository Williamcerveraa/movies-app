
import { Alert } from "react-native";
import { useAuth } from "../../AuthContext";
import React from "react";


const favoriteBtn = () =>
    Alert.alert('Se agrego a favoritos', '', [
      // {
      //   text: 'Cancel',
      //   onPress: () => console.log('Cancel Pressed'),
      //   style: 'cancel',
      // },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

export const useAddFavorite = () => {
  const { session_id, account_id } = useAuth();
  const addFavorite = async (media_id: number, media_type: string) => {
     if (!session_id || !account_id) return;

  try {
    const response = await fetch(`https://api.themoviedb.org/3/account/${account_id}/favorite?api_key=${process.env.EXPO_PUBLIC_MOVIE_DB_KEY}&session_id=${session_id}`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        media_type: media_type,
        media_id: media_id,
        favorite: true
      })
    });

    const result = await response.json();
    console.log(`Se agrego a favoritos ${media_id}`, result);
    favoriteBtn();
    return result;
  } catch (error) {
    console.error('Error al añadir a favoritos:', error);
  }

};
return { addFavorite };
}