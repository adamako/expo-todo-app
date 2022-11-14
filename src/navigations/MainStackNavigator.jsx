import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import TodoFormScreen from "../screens/TodoFormScreen";
import { primaryColor } from "../utils/color";
import { useContext } from "react";
import { MainContext } from "../providers/MainProvider";

const { Navigator, Screen } = createNativeStackNavigator();

const MainStackNavigator = () => {
  const { isDark } = useContext(MainContext);

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
          headerStyle: {
            backgroundColor: isDark ? "black" : "white",
          },
          headerTintColor: isDark ? "white" : "black",
          headerTitleStyle: {
            color: isDark ? "white" : "black",
          },
        }}
      />
    </Navigator>
  );
};

export default MainStackNavigator;
