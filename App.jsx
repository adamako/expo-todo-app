import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BoxContainer from "./src/components/molecules/BoxContainer";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/navigations/MainStackNavigator";
import { MainProvider } from "./src/providers/MainProvider";
import { Appearance } from "react-native";

export default function App() {
  const colorScheme = Appearance.getColorScheme();
  return (
    <MainProvider isDark={colorScheme === "dark"}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </MainProvider>
  );
}
