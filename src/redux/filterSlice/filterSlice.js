import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { filter: "" },
  reducers: {
    changeFilter(state, { payload }) {
      console.log(payload);
      state.filter = payload;
      // if (payload === "all") {
      //   return state;
      // }
      // state = state.filter((el) => el.isCompleted === !!payload);
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
