import { createSlice } from "@reduxjs/toolkit"

const searchQuerySlice = createSlice({
    name: 'searchQuery',
    initialState: {
        query:"",
    },
    reducers: {
        addSearchQuery: (state, action)=>{
            state.query = action.payload
        }
    }
})

export const {addSearchQuery} = searchQuerySlice.actions
export default searchQuerySlice.reducer