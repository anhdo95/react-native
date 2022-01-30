import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./CategoriesScreen";
import CategoryMealsScreen from "./CategoryMealsScreen";
import MealDetailScreen from "./MealDetailScreen";

import HeaderFavorite from "../components/HeaderFavorite";
import HeaderMenu from "../components/HeaderMenu";

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
        options={{ title: "Meal Categories", headerLeft: HeaderMenu }}
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
          title: route.params.title,
          headerRight: (props) => <HeaderFavorite {...props} mealId={route.params.id} />,
        })}
      />
    </Stack.Navigator>
  );
}
