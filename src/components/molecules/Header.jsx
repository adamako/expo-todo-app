import { StyleSheet, Switch, Text, View } from "react-native";
import { primaryColor } from "../../utils/color";
import { useTheme } from "@react-navigation/native";
import { useContext, useState } from "react";
import { MainContext } from "../../providers/MainProvider";

const Header = ({ title }) => {
  const { isDark, toggleMode } = useContext(MainContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Switch value={isDark} onValueChange={toggleMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 20,
    padding: 10,
    height: "8%",
  },
  title: {
    fontWeight: "700",
    fontSize: 50,
    color: primaryColor,
  },
});

export default Header;
