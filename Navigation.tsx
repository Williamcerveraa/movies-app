import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home/HomeScreen";
import MovieScreen from "./screens/movie/MovieScreen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BlurView } from "expo-blur";
import UserScreen from "./screens/user/UserScreen";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

const UserStackNavigator = createNativeStackNavigator();

function HomeScreenStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="Home">
      <HomeStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "MoviesApp" , headerTintColor: 'black',}}
      ></HomeStackNavigator.Screen>
      <HomeStackNavigator.Screen
        name="MovieDetailById"
        component={MovieScreen}
        options={{
          headerBackButtonDisplayMode: "minimal",
          title: "Detalles",
          headerTintColor: "black",
          headerRight: () => (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={28}
              color="black"
            />
          ),
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
        options={{ title: "MoviesApp" }}
      ></UserStackNavigator.Screen>
    </UserStackNavigator.Navigator>
  );
}

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={
        {
          //tabBarActiveTintColor : 'blue'
          //headerShown: false,
        }
      }
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreenStack}
        options={{
          tabBarLabel: "Películas",
          tabBarActiveTintColor: "red",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-open" size={28} color={color} />
          ),
          headerShown: false,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="UserScreen"
        component={UserScreenStack}
        options={{
          tabBarLabel: "Cuenta",
          tabBarActiveTintColor: "red",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={28} color={color} />
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
