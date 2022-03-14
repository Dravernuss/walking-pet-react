import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import petReducer from "../slices/petSlice";
import walkerReducer from "../slices/walkerSlice";
import datesReducer from "../slices/dateSlice";
import commentsReducer from "../slices/commentSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    pet: petReducer,
    walker: walkerReducer,
    dates: datesReducer,
    comments: commentsReducer,
  },
});
