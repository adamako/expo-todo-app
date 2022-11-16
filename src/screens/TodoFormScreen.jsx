import { StyleSheet, TextInput, View } from "react-native";
import { secondaryColor } from "../utils/color";
import CustomButton from "../components/molecules/CustomButton";
import { Fontisto } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { MainContext } from "../providers/MainProvider";

const TodoFormScreen = ({ navigation }) => {
  const { isDark, addTodo } = useContext(MainContext);
  const [todoName, setTodoName] = useState("");

  const handleTodo = () => {
    if (todoName.length > 5) {
      const newTodo = {
        name: todoName,
        date: Date.now(),
        isCompleted: false,
      };

      addTodo(newTodo);
      navigation.goBack();
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "black" : "white" },
      ]}
    >
      <TextInput
        value={todoName}
        onChangeText={setTodoName}
        multiline={true}
        numberOfLines={10}
        style={styles.input}
        placeholder={"Acheter un sac"}
      />
      <View style={{ marginTop: 50 }}>
        <CustomButton
          label={"Enregistrer"}
          onPress={handleTodo}
          icon={<Fontisto name="save" size={24} color="white" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
