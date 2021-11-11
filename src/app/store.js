import { configureStore } from "@reduxjs/toolkit";
import setDataReducer from "../features/setData/dataSlice";

export const store = configureStore({
  reducer: {
    setData: setDataReducer,
  },
});
