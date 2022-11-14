import { StyleSheet, Text, TextInput, View } from "react-native";
import { secondaryColor } from "../utils/color";
import CustomButton from "../components/molecules/CustomButton";
import { Fontisto } from "@expo/vector-icons";

const TodoFormScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.input}
        placeholder={"Acheter un sac"}
      />
      <View style={{ marginTop: 50 }}>
        <CustomButton
          label={"Enregistrer"}
          onPress={() => alert("Save succesfully")}
          icon={<Fontisto name="save" size={24} color="white" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    height: 150,
    fontSize: 15,
    backgroundColor: secondaryColor,
  },
});

export default TodoFormScreen;
