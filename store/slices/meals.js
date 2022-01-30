import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favoriteMeals.findIndex(
        ({ id }) => id === action.payload.mealId
      );

      if (index === -1) {
        state.favoriteMeals.push(
          state.meals.find(({ id }) => id === action.payload.mealId)
        );
      } else {
        state.favoriteMeals[index] =
          state.favoriteMeals[state.favoriteMeals.length - 1];
        state.favoriteMeals.pop();
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleFavorite } = mealsSlice.actions;

// Selectors
export const selectMeals = (state) => state.meals.meals;
export const selectFilteredMeals = (state) => state.meals.filteredMeals;
export const selectFavoriteMeals = (state) => state.meals.favoriteMeals;
export const selectIsFavoriteMeal = (mealId) => (state) =>
  state.meals.favoriteMeals.some(({ id }) => id === mealId);
export const selectMealById = (id) => (state) =>
  state.meals.meals.find((meal) => meal.id === id);

export default mealsSlice.reducer;
