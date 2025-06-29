import axios from "axios";

export const serieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_SERIE_URL,
  params: {
    language: 'es-MX',
    api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY,
  },
});