import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HeaderFavorite from "../components/HeaderFavorite";
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
          title: route.params.title,
          headerRight: (props) => (
            <HeaderFavorite {...props} mealId={route.params.id} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
