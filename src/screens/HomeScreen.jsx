import { Button, StyleSheet, Text, View } from "react-native";
import { primaryColor } from "../utils/color";
import Header from "../components/molecules/Header";
import CustomButton from "../components/molecules/CustomButton";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Todos" />
      <View style={{ height: 100, backgroundColor: "red" }}></View>
      <View style={styles.todosContainer}></View>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => {
            navigation.push("TodoFormScreen");
          }}
          label={"Ajouter"}
          icon={<AntDesign name="pluscircleo" size={30} color="white" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "700",
    fontSize: 50,
    color: primaryColor,
  },
  searchContainer: {
    height: 100,
    backgroundColor: "red",
  },
  todosContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
  buttonContainer: {
    marginTop: 10,
    height: 100,
  },
});

export default HomeScreen;
