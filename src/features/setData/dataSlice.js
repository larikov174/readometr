import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  text: "",
  user: "",
  index: 0,
};

const dataSlice = createSlice({
  name: "setData",
  initialState,
  reducers: {
    saveText: (state, action) => {
      state.text = action.payload;
    },
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    saveIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { saveText, saveUser, saveIndex } = dataSlice.actions;

export default dataSlice.reducer;
