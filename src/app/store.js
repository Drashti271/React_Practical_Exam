import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import blogReducer from "../features/blog/blogSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        blog: blogReducer
    }
});

export default store;