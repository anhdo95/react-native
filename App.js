import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import MealsFavoritesScreen from "./screens/MealsFavoritesScreen";
import FilterMealsScreen from "./screens/FilterMealsScreen";
import configs from "./configs";

const Drawer = createDrawerNavigator();

export default function App() {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: configs.color.accent,
          drawerLabelStyle: {
            fontFamily: 'open-sans'
          }
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
