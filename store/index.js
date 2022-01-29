import { createStore, combineReducers } from "redux";

import meals from "./reducers/meals";

export default createStore(
  combineReducers({
    meals,
  })
);
