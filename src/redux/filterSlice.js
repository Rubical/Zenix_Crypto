import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: { sort: "", query: "" },
  reducers: {
    setSortType: (state, action) => {
      state.sort = action.payload;
    },
    setSearchValue: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setSortType, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
