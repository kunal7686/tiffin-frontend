import { createSlice } from "@reduxjs/toolkit";

const kitchenMenuSlice = createSlice({
  name: "kitchenMenu",
  initialState: {
    menuItems: [],
    loading: "idle",
    error: null,
  },
  reducers: {
    setKitchenMenuItems: (state, action) => {
      state.menuItems = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
      addKitchenMenuItem: (state, action) => {
      state.menuItems.push(action.payload);
    },
       updateKitchenMenuItem: (state, action) => {
      const { id, ...updatedItem } = action.payload;
      const index = state.menuItems.findIndex(item => item.id === id);
      if (index !== -1) {
        state.menuItems[index] = { ...state.menuItems[index], ...updatedItem };
      }
    },
    deleteKitchenMenuItem: (state, action) => {
      const itemId = action.payload;
      state.menuItems = state.menuItems.filter(item => item.id !== itemId);
    },
  },
});

export const {
  setKitchenMenuItems,
  setLoading,
  setError,
   addKitchenMenuItem,
    updateKitchenMenuItem,
    deleteKitchenMenuItem,
} = kitchenMenuSlice.actions;

export const selectKitchenMenuItems = (state) => state.kitchenMenu.menuItems;
export const selectKitchenMenuLoading = (state) => state.kitchenMenu.loading;
export const selectKitchenMenuError = (state) => state.kitchenMenu.error;

export default kitchenMenuSlice.reducer;