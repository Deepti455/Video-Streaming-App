import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: 'app',
    initialState: {
        isSideBarOpen: true,
        isClickOutsideSearch: false
    },
    reducers:{
        toggleOpen: (state)=>{
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        closeMenu: (state)=>{
            state.isSideBarOpen = false
        },
        clickOutSideSearch: (state)=>{
            state.isClickOutsideSearch = true
        }
    }
});

export const { toggleOpen, closeMenu } = appSlice.actions;
export default appSlice.reducer
