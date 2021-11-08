import { configureStore } from "@reduxjs/toolkit";
import switcherReducer from "../features/switcher/switcherSlice";

export const store = configureStore({
  reducer: {
    switcher: switcherReducer,
  },
});
