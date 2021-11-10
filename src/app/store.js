import { configureStore } from "@reduxjs/toolkit";
import setDataReducer from "../features/setData/setDataSlice";

export const store = configureStore({
  reducer: {
    setData: setDataReducer,
  },
});
