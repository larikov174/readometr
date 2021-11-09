import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    textBlock: '',
    wordIndex: 0,
    totalWords: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    storeData: (state, action) => {
      state.wordIndex = action.payload;
    },
    storeTotalWords: (state, action) => {
      state.totalWords = action.payload;
    },
  },
});

export const { storeData, storeTotalWords } = counterSlice.actions;

export default counterSlice.reducer;
