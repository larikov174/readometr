import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  index: 0,
  text: 0,
};

const setDataSlice = createSlice({
  name: "setData",
  initialState,
  reducers: {
    storeIndex: (state, action) => {
      state.index = action.payload;
    },
    storeText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { storeIndex, storeText } = setDataSlice.actions;

export default setDataSlice.reducer;
