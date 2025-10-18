import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import profileReducer from "./profileConfigSlice"
const appStore = configureStore({
    reducer:{
      user : userReducer,
      movie : movieReducer,
      profile : profileReducer
    }
})

export default appStore;