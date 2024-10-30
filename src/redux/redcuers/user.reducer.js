import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../aactions/user.action";
import toast from "react-hot-toast";

const userInitial = {
  loading: false,
  user: null,
  error: false,
};

const userReducer = createSlice({
  initialState: userInitial,
  name: "user",
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.error = false;
        toast.success("Login successful");
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.error = String(payload);
        toast.error(state?.error);
      });
  },
});

export default userReducer.reducer;
export const { logoutUser,setUser } = userReducer.actions;
