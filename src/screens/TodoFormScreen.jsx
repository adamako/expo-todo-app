import { StyleSheet, Text, View } from "react-native";

const TodoFormScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My todo form</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});

export default TodoFormScreen;
