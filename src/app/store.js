import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import petReducer from "../slices/petSlice";
import walkerReducer from "../slices/walkerSlice";
import dateReducer from "../slices/dateSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    pet: petReducer,
    walker: walkerReducer,
    date: dateReducer
  },
});
