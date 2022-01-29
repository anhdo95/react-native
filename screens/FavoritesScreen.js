import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import FavoriteMealsScreen from "./FavoriteMealsScreen";
import MealDetailScreen from "./MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function FavoritesScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="FavoriteMeals"
        component={FavoriteMealsScreen}
        options={{ title: "Your Favorites" }}
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
