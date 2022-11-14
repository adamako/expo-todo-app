import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import TodoFormScreen from "../screens/TodoFormScreen";
import { primaryColor } from "../utils/color";

const { Navigator, Screen } = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Navigator
      initialRouteName={"HomeScreen"}
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Screen
        name={"HomeScreen"}
        options={{
          headerShown: false,
          headerTitle: "Todos",
          headerStyle: { backgroundColor: "white" },
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: primaryColor,
            fontSize: 25,
            fontWeight: "700",
          },
        }}
        component={HomeScreen}
      />
      <Screen
        name="TodoFormScreen"
        component={TodoFormScreen}
        options={{
          headerTitle: "Ajouter une todo",
          headerBackTitleVisible: false,
        }}
      />
    </Navigator>
  );
};

export default MainStackNavigator;
