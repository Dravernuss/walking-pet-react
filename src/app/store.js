import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import petReducer from "../slices/petSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    pet: petReducer,
  },
});
