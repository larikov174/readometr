import { configureStore } from "@reduxjs/toolkit";
import switcherReducer from "../features/switcher/switcherSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    switcher: switcherReducer,
    counter: counterReducer,
  },
});
