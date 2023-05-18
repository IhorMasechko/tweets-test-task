import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6453779fe9ac46cedf26097f.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateFollowers = createAsyncThunk(
  "users/updateFollowers",
  async (data, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${data.id}`, { ...data });
      return response.data;
    } catch (e) {
      console.log("blad: ", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
