import Box from "../atoms/Box";
import { View } from "react-native";
import React from "react";

const BoxContainer = ({ direction = "row" }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: direction === "row" ? "95%" : "20%",
        height: direction === "row" ? 100 : 250,
        justifyContent: "space-evenly",
        flexDirection: direction,
        alignItems: "center",
      }}
    >
      <Box color={"red"} />
      <Box />
      <Box color={"green"} />
    </View>
  );
};

export default BoxContainer;
