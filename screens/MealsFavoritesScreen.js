import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import FavoritesScreen from "./FavoritesScreen";
import MealsScreen from "./MealsScreen";
import configs from "../configs";

const Tab = createBottomTabNavigator();

export default function MealsFavoritesScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: configs.color.accent,
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsScreen}
        options={{
          tabBarIcon: (props) => (
            <Ionicons {...props} name="restaurant" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: (props) => <Ionicons {...props} name="star" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}
