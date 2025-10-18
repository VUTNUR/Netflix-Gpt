import { createSlice } from "@reduxjs/toolkit";

const profileConfigSlice = createSlice({
    name:"profile",
    initialState:{
       showSearch: false,
       showLanguage : "english"
    },
    reducers:{
        toggleSearch:(state)=>{
             state.showSearch = !state.showSearch
        },
        selectLanguage:(state,action)=>{
            state.showLanguage = action.payload
        }
    }
})

export const {toggleSearch, selectLanguage} = profileConfigSlice.actions;

export default profileConfigSlice.reducer