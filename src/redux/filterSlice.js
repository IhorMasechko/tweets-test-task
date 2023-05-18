import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    idFollowers: [],
    statusFilter: false,
  },
  reducers: {
    setFollower(state, { payload }) {
      state.idFollowers.push(payload);
    },
    removeFollower(state, { payload }) {
      const index = state.idFollowers.findIndex((id) => id === payload);
      state.idFollowers.splice(index, 1);
    },
    setStatusFilter(state, { payload }) {
      state.statusFilter = payload;
    },
  },
});

export const { setFollower, removeFollower, setStatusFilter } =
  filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
