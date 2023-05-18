import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, updateFollowers } from "./operations";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateFollowers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateFollowers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.map((item) => {
          return item.id === payload.id ? payload : item;
        });
        state.error = null;
      })
      .addCase(updateFollowers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
