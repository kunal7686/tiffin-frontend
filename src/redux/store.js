import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import cartReducer from "./cartSlice";
import kitchenMenuReducer from "./kitchenMenuSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    kitchenMenu: kitchenMenuReducer,
  },
});

export default store;
