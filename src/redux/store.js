import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice";
import preferencesReducer from "./preferencesSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    preferences: preferencesReducer,
  },
});

export default store;
