import React from "react";
import { StyleSheet, View } from "react-native";

const Box = ({ color = "black" }) => {
  return <View style={[styles.box, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  box: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
});

export default Box;
