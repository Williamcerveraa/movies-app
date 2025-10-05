import 'dotenv/config';

export default {
    name: 'movies-app',
    slug: 'movies-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/moviesapp-icon-white.png',
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    splash: {
      image: './assets/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      edgeToEdgeEnabled: true,
      package: 'com.williamcervera.moviesapp',
      versionCode: 1,
    },
    web: {
      favicon: './assets/favicon.png',
    },
     plugins: [
      'expo-asset',
      'expo-font'
    ],
    extra: {
      movieDbKey: process.env.EXPO_PUBLIC_MOVIE_DB_KEY,
      movieDbUrl: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
      movieDbAccountUrl: process.env.EXPO_PUBLIC_MOVIE_DB_ACCOUNT_URL,
      movieDbSerieUrl: process.env.EXPO_PUBLIC_MOVIE_DB_SERIE_URL,
      movieDbCastUrl: process.env.EXPO_PUBLIC_MOVIE_DB_CAST_URL,
      movieDbUser: process.env.EXPO_PUBLIC_MOVIE_DB_USER_ACCOUNT,
      movieDbPassword: process.env.EXPO_PUBLIC_MOVIE_DB_USER_PASSWORD,
      appEnv: process.env.APP_ENV,
      eas: {
        projectId: 'f05a7499-e4a6-4979-a0f3-a35608602c9c',
      },
    },
  };
