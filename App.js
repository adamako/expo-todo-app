import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Box from "./src/Box";
import React from "react";
import BoxContainer from "./src/BoxContainer";
export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 2,
          borderBottomColor: "white",
        }}
      >
        <BoxContainer />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flex: 2,
          borderBottomWidth: 2,
          borderBottomColor: "white",
        }}
      >
        <BoxContainer direction={"column"} />
        <BoxContainer direction={"column"} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BoxContainer />
      </View>
      <StatusBar style="auto" backgroundColor="#00000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: "#000",
    //alignItems: "center",
    justifyContent: "space-evenly",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
});
