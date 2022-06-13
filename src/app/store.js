import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "../features/foodSlice";

export default configureStore({
  reducer: {
    foods: foodsReducer,
  },
});
