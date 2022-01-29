import { Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HeaderMenu from "../components/HeaderMenu";
import FiltersScreen from "./FiltersScreen";

const Stack = createNativeStackNavigator();

export default function FilterMealsScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={{
          title: "Filter Meals",
          headerLeft: HeaderMenu,
          headerRight: () => (
            <TouchableNativeFeedback onPress={() => {}}>
              <Text style={styles.save}>Save</Text>
            </TouchableNativeFeedback>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  save: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
  },
});
