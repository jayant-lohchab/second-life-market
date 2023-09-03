import { createSlice } from "@reduxjs/toolkit";

const SellSlice = createSlice({
  name: "SellSlice",
  initialState: {
    categories: [
      "Vehicle",
      "Property",
      "Mobile",
      "Electronics",
      "Furniture",
      "Fashion",
      "Books",
      "Sports",
    ],
  },
  reducers: {},
});

export const selectCategories = (state) => state.SellSlice.categories;

export default SellSlice.reducer;
