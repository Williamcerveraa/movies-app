import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/home/HomeScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const queryClient = new QueryClient();
export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        {/* <HomeScreen></HomeScreen> */}
        <Navigation></Navigation>
        <StatusBar style="auto" />
      </QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

