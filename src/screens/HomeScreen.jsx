import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { primaryColor, secondaryColor } from "../utils/color";
import Header from "../components/molecules/Header";
import CustomButton from "../components/molecules/CustomButton";
import { AntDesign, Feather } from "@expo/vector-icons";
import { TodoItem } from "../components/molecules/TodoItem";
import { useContext } from "react";
import { MainContext } from "../providers/MainProvider";

const HomeScreen = ({ navigation }) => {
  const { isDark, todos } = useContext(MainContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "black" : "white" },
      ]}
    >
      <Header title="Todos" />
      <View style={styles.searchContainer}>
        <View style={styles.inputSection}>
          <TextInput style={styles.input} placeholder={"rechercher"} />
          <Feather
            name="search"
            size={20}
            color={"black"}
            style={{ opacity: 0.5 }}
          />
        </View>
        <TouchableOpacity onPress={() => alert("filter")}>
          <Image
            source={require("../../assets/icons/filter-icon.png")}
            style={{
              height: 30,
              width: 31,
              tintColor: isDark ? "white" : "black",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.todosContainer}>
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoItem todo={item} />}
        />
      </View>
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
  },
  title: {
    fontWeight: "700",
    fontSize: 50,
    color: primaryColor,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todosContainer: {
    paddingTop: 20,
    flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
    height: 100,
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
  inputSection: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: secondaryColor,
    height: 52,
    padding: 10,
    borderRadius: 10,
  },
});

export default HomeScreen;
