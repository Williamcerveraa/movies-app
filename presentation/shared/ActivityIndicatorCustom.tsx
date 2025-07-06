import { View, ActivityIndicator, Text } from "react-native";
import React from "react";

const ActivityIndicatorCustom = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="mb-4">Espere por favor</Text>
      <ActivityIndicator color="black" size={50}></ActivityIndicator>
    </View>
  );
};

export default ActivityIndicatorCustom;
