export const selectMeals = (state) => state.meals.meals;
export const selectFilteredMeals = (state) => state.meals.filteredMeals;
export const selectFavoriteMeals = (state) => state.meals.favoriteMeals;
export const selectMealById = (id) => (state) => state.meals.meals.find(meal => meal.id === id);
