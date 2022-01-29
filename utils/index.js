import { MEALS } from "../data/dummy-data";

export const findMealById = (id) => MEALS.find(meal => meal.id === id)