import { StyleSheet, Text, View } from "react-native";
import { primaryColor } from "../../utils/color";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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
