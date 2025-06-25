import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";

const UserScreen = () => {
      const safeArea = useSafeAreaInsets();
  return (
    <View className="mt-4 px-10">
      <Text>Modo Oscuro</Text>
    </View>
  )
}

export default UserScreen