import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
    loading: "idle",
    error: null,
    filter: "All",
  },
  reducers: {
    setMenuItems: (state, action) => {
      state.items = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addMenuItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateMenuItem: (state, action) => {
      const { id, ...updatedItem } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...updatedItem };
      }
    },
    deleteMenuItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

export const {
  setMenuItems,
  setFilter,
  setLoading,
  setError,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
} = menuSlice.actions;

export const selectAllMenuItems = (state) => state.menu.items;
export const selectMenuLoadingStatus = (state) => state.menu.loading;
export const selectMenuError = (state) => state.menu.error;
export const selectMenuFilter = (state) => state.menu.filter;

export default menuSlice.reducer;
