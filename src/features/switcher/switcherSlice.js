import { createSlice } from "@reduxjs/toolkit";

const switcherSlice = createSlice({
  name: "switcher",
  initialState: {
    value: "",
  },
  reducers: {
    levelChanged: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { levelChanged } = switcherSlice.actions;

export default switcherSlice.reducer;
