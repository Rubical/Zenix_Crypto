import { createSlice } from "@reduxjs/toolkit";

export const githubAuthSlice = createSlice({
  name: "githubAuth",
  initialState: {
    user: null,
  },
  reducers: {
    logInGithub: (state, action) => {
      state.user = action.payload;
    },
    logOutGithub: (state) => {
      state.user = null;
    },
  },
});

export const { logInGithub, logOutGithub } = githubAuthSlice.actions;

export default githubAuthSlice.reducer;
