import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./ToDo/slice";
import filterSlice from "./filterSlice/filterSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    filter: filterSlice,
  },
});
