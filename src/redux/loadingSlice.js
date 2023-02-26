import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: true,
  reducers: {
    loadingStart: (state) => {
      return true;
    },
    loadingStop: (state) => {
      return false;
    },
  },
});

export const { loadingStart, loadingStop } = loadingSlice.actions;

export default loadingSlice.reducer;
