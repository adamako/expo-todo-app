import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { errorColor, secondaryColor, successColor } from "../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";

export const TodoItem = ({ todo }) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  return (
    <TouchableOpacity onPress={() => alert("content")} style={styles.container}>
      <View style={styles.contentSection}>
        <Text style={styles.todoText} numberOfLines={2}>
          {todo.name}
        </Text>
        <Text style={styles.todoDate}>
          {Intl.DateTimeFormat("default", options).format(todo.date)}
        </Text>
      </View>
      <View style={styles.actionsSection}>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/icons/delete-icon.png")}
            style={{ width: 29, height: 29.91 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name={
              todo.isCompleted
                ? "check-circle-outline"
                : "radio-button-unchecked"
            }
            size={37}
            color={todo.isCompleted ? successColor : "grey"}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    height: 96,
    backgroundColor: secondaryColor,
    borderRadius: 10,
    justifyContent: "space-between",
    marginBottom: 15,
  },
  contentSection: {
    flex: 0.78,
    justifyContent: "space-between",
  },
  actionsSection: {
    alignSelf: "center",
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todoText: {
    //fontWeight: "500",
    fontSize: 15,
  },
  todoDate: { fontSize: 12, fontWeight: "400" },
});
