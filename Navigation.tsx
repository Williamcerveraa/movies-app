import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home/HomeScreen";
import MovieScreen from "./screens/movie/MovieScreen";
import UserScreen from "./screens/user/UserScreen";
import FavoritesScreen from "./screens/favorites/FavoritesScreen";
import SerieScreen from "./screens/serie/SeriesScreen";
import {
  AccountIcon,
  FavoriteIcon,
  MovieOpenIcon,
  SerieOpenIcon,
} from "./presentation/components/icons";
import SeriesHomeScreen from "./screens/home/SeriesHomeScreen";

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();
const UserStackNavigator = createNativeStackNavigator();
const FavoritesStackNavigator = createNativeStackNavigator();
const HomeSeriesStackNavigator = createNativeStackNavigator();

function HomeScreenStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="Home">
      <HomeStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Películas", headerTintColor: "black" }}
      ></HomeStackNavigator.Screen>
      <HomeStackNavigator.Screen
        name="MovieDetailById"
        component={MovieScreen}
        options={{
          headerBackButtonDisplayMode: "minimal",
          title: "Detalles",
          headerTintColor: "black",
        }}
      ></HomeStackNavigator.Screen>
    </HomeStackNavigator.Navigator>
  );
}

function UserScreenStack() {
  return (
    <UserStackNavigator.Navigator initialRouteName="User">
      <UserStackNavigator.Screen
        name="User"
        component={UserScreen}
        options={{ title: "Tu cuenta" }}
      ></UserStackNavigator.Screen>
    </UserStackNavigator.Navigator>
  );
}

function FavoritesScreenStack() {
  return (
    <FavoritesStackNavigator.Navigator initialRouteName="Favorites">
      <FavoritesStackNavigator.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: "Tus favoritos",headerTintColor: "black" }}
      ></FavoritesStackNavigator.Screen>
      <FavoritesStackNavigator.Screen
        name="MovieDetailById"
        component={MovieScreen}
        options={{
          headerBackButtonDisplayMode: "minimal",
          title: "Detalles",
          headerTintColor: "black",
        }}
      ></FavoritesStackNavigator.Screen>
      <FavoritesStackNavigator.Screen
        name="SerieDetailById"
        component={SerieScreen}
        options={{
          headerBackButtonDisplayMode: "minimal",
          title: "Detalles",
          headerTintColor: "black",
        }}
      ></FavoritesStackNavigator.Screen>
    </FavoritesStackNavigator.Navigator>
  );
}

function SeriesHomeScreenStack() {
  return (
    <HomeSeriesStackNavigator.Navigator initialRouteName="Series">
      <HomeSeriesStackNavigator.Screen
        name="Series"
        component={SeriesHomeScreen}
        options={{ title: "Series", headerTintColor: "black" }}
      ></HomeSeriesStackNavigator.Screen>
      <HomeSeriesStackNavigator.Screen
       name="SerieDetailById"
        component={SerieScreen}
        options={{
          headerBackButtonDisplayMode: "minimal",
          title: "Detalles",
          headerTintColor: "black",
        }}
      ></HomeSeriesStackNavigator.Screen>
    </HomeSeriesStackNavigator.Navigator>
  );
}

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          borderBottomColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreenStack}
        options={{
          tabBarLabel: "Películas",
          tabBarIcon: ({ color }) => (
            //<MaterialCommunityIcons name="movie-open" size={28} color={color} />
            <MovieOpenIcon color={color} />
          ),
          headerShown: false,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="SeriesHomeScreen"
        component={SeriesHomeScreenStack}
        options={{
          tabBarLabel: "Series",
          tabBarIcon: ({ color }) => (
            <SerieOpenIcon color={color} />
          ),
          headerShown: false,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="UserScreen"
        component={UserScreenStack}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color }) => (
            <AccountIcon color={color} />
          ),
          headerShown: false,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreenStack}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color }) => (
            <FavoriteIcon color={color} />
          ),
          headerShown: false,
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigation></TabNavigation>
    </NavigationContainer>
  );
};

export default Navigation;
