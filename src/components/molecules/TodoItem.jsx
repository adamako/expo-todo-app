import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { secondaryColor, successColor } from "../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";

export const TodoItem = () => {
  return (
    <TouchableOpacity onPress={() => alert("content")} style={styles.container}>
      <View style={styles.contentSection}>
        <Text style={styles.todoText} numberOfLines={2}>
          Ma todo
        </Text>
        <Text style={styles.todoDate}>10/11/2022, 16:00</Text>
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
            name="check-circle-outline"
            size={37}
            color={successColor}
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
