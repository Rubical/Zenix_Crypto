import { createSlice } from "@reduxjs/toolkit";

export const userInfo = createSlice({
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

export const { setUserInfo, clearUserInfo } = userInfo.actions;
export default userInfo.reducer;
