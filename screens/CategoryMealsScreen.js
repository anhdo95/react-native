import { useMemo } from "react";
import { StyleSheet } from "react-native";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

export default function CategoryMeals(props) {
  const { id } = props.route.params.category;
  const meals = useMemo(
    () => MEALS.filter((meal) => meal.categoryIds.includes(id)),
    [id]
  );

  return <MealList meals={meals} />;
}

const styles = StyleSheet.create({});
