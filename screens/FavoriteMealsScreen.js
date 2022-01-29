import { StyleSheet } from "react-native";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

export default function FavoriteMealsScreen() {
  const meals = MEALS.filter((meal) => ["m1", "m2"].includes(meal.id));
  return <MealList meals={meals} />;
}

const styles = StyleSheet.create({});
