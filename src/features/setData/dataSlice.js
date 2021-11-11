import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  text: "",
  user: "",
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
  },
});

export const { saveText, saveUser } = dataSlice.actions;

export default dataSlice.reducer;
