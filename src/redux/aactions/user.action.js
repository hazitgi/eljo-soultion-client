import { createAsyncThunk } from "@reduxjs/toolkit";

import client from "../../api/graphql";
import { LOGIN_USER } from "../../api/queris/login";
export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await client.query({
        query: LOGIN_USER,
        variables: { email, password },
      });
      const { access_token, user } = response.data.login;

      // Store token and user data in localStorage if needed
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("user", JSON.stringify(user));

      // Return the data to fulfill the action
      return { access_token, user };
    } catch (error) {
      console.error("Login error:", error);
      return rejectWithValue(error.message);
    }
  }
);
