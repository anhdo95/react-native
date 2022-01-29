import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./CategoriesScreen";
import CategoryMealsScreen from "./CategoryMealsScreen";
import MealDetailScreen from "./MealDetailScreen";

import { findMealById } from "../utils";

const Stack = createNativeStackNavigator();

export default function MealsScreen() {
  return (
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
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          title: findMealById(route.params.id).title,
          headerRight: () => <Ionicons name="star-outline" size={20} />,
        })}
      />
    </Stack.Navigator>
  );
}