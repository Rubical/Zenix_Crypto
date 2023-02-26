import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: null,
  reducers: {
    setUserInfo: (state, action) => {
      return action.payload;
    },
    clearUserInfo: (state) => {
      return null;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
