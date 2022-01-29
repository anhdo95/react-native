import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { selectMeals } from "../store/selectors/meals";
import MealList from "../components/MealList";

export default function CategoryMeals(props) {
  const { id } = props.route.params.category;
  const meals = useSelector(selectMeals);
  const categoryMeals = useMemo(
    () => meals.filter((meal) => meal.categoryIds.includes(id)),
    [id, meals]
  );

  return <MealList meals={categoryMeals} />;
}

const styles = StyleSheet.create({});
