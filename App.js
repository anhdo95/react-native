import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ title: "Meal Categories" }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={({ route }) => ({
            title: route.params.category.title,
            headerTintColor: route.params.category.color,
          })}
        />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
