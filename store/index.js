import { configureStore } from "@reduxjs/toolkit";

import meals from "./slices/meals";

export default configureStore({
  reducer: {
    meals,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});
