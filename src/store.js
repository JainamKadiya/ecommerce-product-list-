// import { configureStore } from '@reduxjs/toolkit'
// // import counterReducer from '../counter/counterSlice'
// import counterReducer from "./counterSlice"
// // import counterReducer from '../counter/counterSlice'

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })
// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
