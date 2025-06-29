import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/home/HomeScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from "./AuthContext";

const queryClient = new QueryClient();
export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
        <Navigation></Navigation>
        <StatusBar style="auto" />
        </AuthProvider>
      </QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

