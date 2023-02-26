import { createSlice } from "@reduxjs/toolkit";

export const searchNameSlice = createSlice({
  name: "searchName",
  initialState: "",
  reducers: {
    setSearchName: (state, action) => {
      return action.payload;
    },
    clearSearchName: (state) => {
      return "";
    },
  },
});

export const { setSearchName, clearSearchName } = searchNameSlice.actions;
export default searchNameSlice.reducer;
