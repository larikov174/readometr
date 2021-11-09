import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  index: 0,
  text: 'abc',
  totalWords: 0,
};

const counterSlice = createSlice({
  name: "counter",
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

export const { storeIndex, storeText } = counterSlice.actions;

export default counterSlice.reducer;
