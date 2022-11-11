import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { primaryColor } from "../../utils/color";

const CustomButton = ({ label, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon}
      <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    backgroundColor: primaryColor,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 23,
    color: "white",
    marginLeft: 20,
  },
});

export default CustomButton;
