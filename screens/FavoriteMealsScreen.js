import { StyleSheet } from "react-native";
import { useSelector } from 'react-redux';

import { selectFavoriteMeals } from '../store/selectors/meals'
import MealList from "../components/MealList";

export default function FavoriteMealsScreen() {
  const meals = useSelector(selectFavoriteMeals)
  return <MealList meals={meals} />;
}

const styles = StyleSheet.create({});
