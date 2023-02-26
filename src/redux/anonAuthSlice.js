import { createSlice } from "@reduxjs/toolkit";

export const anonAuthSlice = createSlice({
  name: "anonAuth",
  initialState: false,
  reducers: {
    logInAnonym: (state) => {
      return true;
    },
    logOutAnonym: (state) => {
      return false;
    },
  },
});

export const { logInAnonym, logOutAnonym } = anonAuthSlice.actions;

export default anonAuthSlice.reducer;
