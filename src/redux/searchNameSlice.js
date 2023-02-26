import { createSlice } from "@reduxjs/toolkit";

export const searchName = createSlice({
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

export const { setSearchName, clearSearchName } = searchName.actions;
export default searchName.reducer;
