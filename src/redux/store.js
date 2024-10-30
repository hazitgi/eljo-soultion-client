import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redcuers/user.reducer";
export const reduxStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
