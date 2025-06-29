import axios from 'axios';

export const movieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
  params: {
    language: 'es-MX',
    api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY,
  },
});

export const favoritesMovieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_ACCOUNT_URL,
  params: {
    language: 'es-MX',
    api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY,
  },
});

export const serieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_SERIE_URL,
  params: {
    language: 'es-MX',
    api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY,
  },
});