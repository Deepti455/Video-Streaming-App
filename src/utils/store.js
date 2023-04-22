import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import searchQuerySlice from "./searchQuerySlice";
import searchSlice from "./searchSlice";


const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        searchQuery: searchQuerySlice
    }
});

export default store;