import { createDrawerNavigator } from "@react-navigation/drawer";

import configs from "../configs";
import MealsFavoritesScreen from "./MealsFavoritesScreen";
import FilterMealsScreen from "./FilterMealsScreen";
import LogoutScreen from './LogoutScreen';

const Drawer = createDrawerNavigator();

export default function HomeScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: configs.color.accent,
        drawerLabelStyle: {
          fontFamily: "open-sans",
        },
      }}
    >
      <Drawer.Screen
        name="MealsFavorites"
        component={MealsFavoritesScreen}
        options={{ title: "Meals" }}
      />
      <Drawer.Screen
        name="FilterMeals"
        component={FilterMealsScreen}
        options={{ title: "Filters" }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{ title: "Logout" }}
      />
    </Drawer.Navigator>
  );
}
